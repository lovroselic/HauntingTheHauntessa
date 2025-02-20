#version 300 es
///fShader///
/*
* v1.2
* last change in Haunting The Hauntessa
*/

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
precision highp sampler3D;
#else
precision mediump float;
precision mediump sampler3D;
#endif

struct Material {
    vec3 ambientColor;
    vec3 diffuseColor;
    vec3 specularColor;
    float shininess;
};

const int N_LIGHTS = 1;                                         //replaced before compiling
float illumination;
uniform vec3 uPointLights[N_LIGHTS];
uniform vec3 uLightColors[N_LIGHTS];
uniform vec3 uLightDirections[N_LIGHTS];
uniform sampler2D uSampler;
uniform vec3 uCameraPos;
uniform Material uMaterial;
uniform sampler3D uOcclusionMap;                                // Occlusion map
uniform vec3 uGridSize;                                         // Size of the grid in the occlusion map

in vec3 FragPos;
in vec3 v_normal;
in vec2 vTextureCoord;

//bloody hardcoded constants
const vec3 innerLightColor = vec3(1.0f, 1.0f, 1.0f);
const float innerAmbientStrength = 0.30f;                        //0.30
const float innerDiffuseStrength = 20.0f;                        //15.0
const float innerSpecularStrength = 2.5f;                        //5.0

const float PL_AmbientStrength = 9.99f;                           //5.0
const float PL_DiffuseStrength = 50.0f;                          //10.0
const float PL_SpecularStrength = 2.5f;                          //2.5

const float IGNORE_ALPHA = 0.1f;
const int MAX_STEPS = 999;                                       // Max steps for raycasting loop - 99
const float EPSILON = 0.005f;                                    // don't enter the wall, check for occlusion - 0.005
const float PL_AMBIENT_OCCLUSION = 0.10f;                        // how much of ambient light gets through occlusion - 0.225
const float PL_DIFFUSE_OCCLUSION = 0.10f;                        // how much of diffused light gets through occlusion - 0.30
const float PL_AMBIENT_ILLUMINATION_REDUCTION = 0.02f;           // how much of ambient light gets through in reverse direction - 0.02
const float PL_DIFUSSE_ILLUMINATION_REDUCTION = 0.05f;           // how much of ambient light gets through in reverse direction - 0.20
const float PL_DIFUSSE_LIGHT_HALO_REDUCTION = 0.25f;             // intensity of light halo - 0.40
const float ATTNF = 0.05f;                                        // linear arrenuation factor 0.3
const float ATTNF2 = 0.55f;                                      // quadratic attenuation factor 0.75
const float HATTNF = 1.5f;                                       // light halo -- linear arrenuation factor - 1.5
const float HATTNF2 = 6.0f;                                      // light halo quadratic attenuation factor - 5.0
const float MAXLIGHT = 0.999f;                                    // max contribution to avoid overburning; - 0.999
const float IGNORED_ATTN_DISTANCE = 0.012f;                      // distance after attenuation starts taking effect - 0.012
const float ILLUMINATION_CUTOFF = 0.11f;                         // remove flickering, light FOV - 0.11
const float DISTANCE_LIGHT = 0.475f;                             // force illumination near the light source  - 0.475
const float LIGHT_POS_Y_OFFSET = 0.35f;                          // vertical light position change 
const float INTO_WALL = 0.01f;                                   // into wall target raycast offset: 0.01

out vec4 fragColor;                                              //300 es

// ----------------------------------------------------------------------------
// Function prototypes
// ----------------------------------------------------------------------------

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection);
bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D, float illumination);
vec2 worldToGridTexCoord(vec2 position2D);
vec3 worldToNormalizedTexCoord(vec2 position2D);
bool isOccluded(vec2 position2D);

bool Raycast3D(vec3 rayOrigin3D, vec3 rayTarget3D, float illumination);
bool isOccluded(vec3 position3D);
vec3 worldToNormalizedTexCoord3D(vec3 position3D);                    

// ----------------------------------------------------------------------------

void main(void) {
    // Basic material properties
    vec3 ambientColor = uMaterial.ambientColor;
    vec3 diffuseColor = uMaterial.diffuseColor;
    vec3 specularColor = uMaterial.specularColor;
    float shininess = uMaterial.shininess;

    // Prepare normal & view direction
    vec3 norm = normalize(v_normal);
    vec3 viewDir = normalize(uCameraPos - FragPos);

    // "Inner" light from the camera position
    vec3 innerLight = CalcLight(uCameraPos, FragPos, viewDir, norm, innerLightColor, shininess, ambientColor, diffuseColor, specularColor, innerAmbientStrength, innerDiffuseStrength, innerSpecularStrength, 1, viewDir);

    // Sum point lights
    vec3 PL_output = vec3(0.0f);
    for (int i = 0; i < N_LIGHTS; i++) {
        if (uPointLights[i].x < 0.0f) {
            continue;
        }
        PL_output += CalcLight(uPointLights[i], FragPos, viewDir, norm, uLightColors[i], shininess, ambientColor, diffuseColor, specularColor, PL_AmbientStrength, PL_DiffuseStrength, PL_SpecularStrength, 0, uLightDirections[i]);
    }

    vec3 light = innerLight + PL_output;
    vec4 texelColor = texture(uSampler, vTextureCoord);
    if (texelColor.a < IGNORE_ALPHA) {
        discard;
    }

    fragColor = vec4(texelColor.rgb * light, texelColor.a);
}

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection) {
    float lightPosDistance = distance(lightPosition, FragPos);
    float lightDistance = distance(vec3(lightPosition.x, lightPosition.y - LIGHT_POS_Y_OFFSET, lightPosition.z), FragPos);
    vec3 lightDir = normalize(FragPos - lightPosition);
    vec3 directionOfOrthoLight = lightDirection;                                //it normal already!

    float invDistance = 1.0f / lightPosDistance;
    float attenuation = invDistance / (ATTNF + ATTNF2 * lightPosDistance);

    //is fragment illuminated by ligh source? omni dir is (128,128,128) so if x < 128.0 it is not omni dir, but directional!
    illumination = 1.0f;
    if (inner == 0 && lightDirection.x < 128.0f) {
        illumination = dot(lightDir, directionOfOrthoLight);               // considers only directional lights
    }

    //bool occluded = Raycast(lightPosition, FragPos, illumination);
    bool occluded = Raycast3D(lightPosition, FragPos, illumination);

    bool isLight = false;
    if (lightDistance < DISTANCE_LIGHT) {
        isLight = true;
    }

    //ambient
    vec3 ambientLight = vec3(0.0f);
    if (inner == 1) {
        ambientLight = pointLightColor * ambientStrength * ambientColor;
    } else {
        ambientLight = pointLightColor * ambientStrength * attenuation * ambientColor;
    }

    // Diffuse lighting  
    float diffLight = max(dot(normal, lightDir), 0.0f);
    float diffView = max(dot(normal, viewDir), 0.0f);
    float diff = 0.95f * diffLight + 0.05f * diffView;
    vec3 diffuselight = pointLightColor * diff * diffuseStrength * attenuation * diffuseColor;

    // specular shading
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0f), shininess);
    vec3 specularLight = pointLightColor * spec * specularStrength * attenuation * specularColor;

    //ambientLight = clamp(ambientLight, 0.0f, MAXLIGHT);
    //diffuselight = clamp(diffuselight, 0.0f, MAXLIGHT);
    //specularLight = clamp(specularLight, 0.0f, MAXLIGHT);

    if (illumination < ILLUMINATION_CUTOFF) {
        if (isLight) {
            float invlightDistance = 1.0f / lightDistance;
            float attenuationHalo = invlightDistance / (HATTNF + HATTNF2 * lightDistance);
            diffuselight *= PL_DIFUSSE_LIGHT_HALO_REDUCTION * attenuationHalo;
        } else {
            diffuselight *= PL_DIFUSSE_ILLUMINATION_REDUCTION;
        }

        if (lightPosDistance > IGNORED_ATTN_DISTANCE) {
            ambientLight *= PL_AMBIENT_ILLUMINATION_REDUCTION;
        }
    } else if (occluded && inner == 0) {
        return PL_AMBIENT_OCCLUSION * ambientLight + PL_DIFFUSE_OCCLUSION * diffuselight;
    }

    return clamp(ambientLight + diffuselight + specularLight, 0.0f, MAXLIGHT);
}

bool Raycast3D(vec3 rayOrigin3D, vec3 rayTarget3D, float illumination) {
    vec3 direction = rayTarget3D - rayOrigin3D;
    float illumination2 = (illumination + EPSILON) * (illumination + EPSILON);
    vec3 adjustedTarget = rayTarget3D - normalize(direction) * INTO_WALL * illumination2;
    direction = adjustedTarget - rayOrigin3D;

    vec3 step = sign(direction);
    vec3 invDirection = 1.0f / max(abs(direction), vec3(EPSILON));

    vec3 tDelta = invDirection;
    vec3 startCell = floor(rayOrigin3D);                                                // integer cell containing the origin
    vec3 cellTarget = floor(adjustedTarget);                                            //integer target cell
    vec3 cellOffset = rayOrigin3D - startCell;

    // how far to the next boundary
    vec3 tMax = vec3(0.0f);
    for (int i = 0; i < 3; i++) {
        float distToBoundary = (step[i] > 0.0f) ? (1.0f - fract(cellOffset[i])) : fract(cellOffset[i]);
        distToBoundary = (distToBoundary == 0.0f) ? 1.0f : distToBoundary;
        tMax[i] = distToBoundary * tDelta[i];
    }

    vec3 currentCell = startCell;

    // *** Walk along the ray in 3D, up to MAX_STEPS ***
    for (int i = 0; i < MAX_STEPS; i++) {

        vec3 cellCenter = currentCell + vec3(0.5f);              //checking the center
        if (isOccluded(cellCenter)) {
            return true;
        }

        if (currentCell == cellTarget) {
            return false;
        }

        // How far in t we must go to step in x vs y vs z
        if (tMax.x < tMax.y) {
            if (tMax.x < tMax.z) {
                // We cross a boundary in x first
                tMax.x += tDelta.x;
                currentCell.x += step.x;
            } else {
                // We cross in z
                tMax.z += tDelta.z;
                currentCell.z += step.z;
            }
        } else {
            if (tMax.y < tMax.z) {
                // We cross a boundary in y
                tMax.y += tDelta.y;
                currentCell.y += step.y;
            } else {
                // We cross in z
                tMax.z += tDelta.z;
                currentCell.z += step.z;
            }
        }
    }
    return false;                               // No occlusion detected, target not reached
}

bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D, float illumination) {
    vec2 origin = rayOrigin3D.xz;
    vec2 target = rayTarget3D.xz;
    vec2 deltaGrid = target - origin;
    vec2 step = sign(target - origin);
    vec2 gridOrigin = origin;
    float illumination2 = (illumination + EPSILON) * (illumination + EPSILON);
    vec2 gridTarget = worldToGridTexCoord(target - step * INTO_WALL * illumination2);            // Adjusted target with directional offset so the target is reached when FragPOs is in the wall - iluminating wall   
    vec2 tDelta = abs(1.0f / max(abs(deltaGrid), vec2(EPSILON)));                            // How far to go in each direction to cross a grid line

    vec2 tMax;
    tMax.x = step.x > 0.0f ? (1.0f - fract(gridOrigin.x)) * tDelta.x : fract(gridOrigin.x) * tDelta.x;
    tMax.y = step.y > 0.0f ? (1.0f - fract(gridOrigin.y)) * tDelta.y : fract(gridOrigin.y) * tDelta.y;

    vec2 current = gridOrigin;

    for (int i = 0; i < MAX_STEPS; i++) {
        if (isOccluded(current)) {
            return true;
        }
        if (worldToGridTexCoord(current) == gridTarget) {
            return false;
        }
        if ((step.x > 0.0f && current.x >= gridTarget.x) || (step.x < 0.0f && current.x <= gridTarget.x)) {
            if ((step.y > 0.0f && current.y >= gridTarget.y) || (step.y < 0.0f && current.y <= gridTarget.y)) {
                return false;                                                                   // Target reached
            }
        }
        if (tMax.x < tMax.y) {
            tMax.x += tDelta.x;
            current.x += step.x;
        } else {
            tMax.y += tDelta.y;
            current.y += step.y;
        }
    }
    return false;                               // No occlusion detected, target not reached
}

vec2 worldToGridTexCoord(vec2 position2D) {
    return vec2(floor(position2D.x), floor(position2D.y));
}

vec3 worldToNormalizedTexCoord(vec2 position2D) {
    return vec3(position2D.x / uGridSize.x, position2D.y / uGridSize.y, 0.0f);
}

bool isOccluded(vec2 position2D) {
    vec3 texCoord = worldToNormalizedTexCoord(position2D);
    float occlusion = texture(uOcclusionMap, texCoord).r; // Sample red channel
    return occlusion > 0.5f; //  >0.5 indicates impassable
}

bool isOccluded(vec3 position3D) {
    // Convert from world position to [0,1] texture coordinates
    vec3 texCoord = worldToNormalizedTexCoord3D(position3D);
    float occlusion = texture(uOcclusionMap, texCoord).r;
    return (occlusion > 0.5f);
}

vec3 worldToNormalizedTexCoord3D(vec3 position3D) {
    return vec3(position3D.x / uGridSize.x, position3D.y / uGridSize.y, position3D.z / uGridSize.z);
}