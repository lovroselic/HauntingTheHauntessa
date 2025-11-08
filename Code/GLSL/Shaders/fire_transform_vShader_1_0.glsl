#version 300 es
///fire_transform_vShader///
/*
* v1.0
*/

// Uniforms:
//   uniform float u_time;              // ms since emitter birth (Date.now() - birth)
//   uniform float uVelocityFactor;     // integration step scale (e.g., 0.004..0.012)
//   uniform vec3  uGravity;            // buoyancy/accel per step (use +Y for rising flames)
//   uniform float uSpawnRadius;        // spawn disk radius in XZ (meters/world units)
//   uniform float uTurbulence;         // small random jitter per step (e.g., 0.004..0.015)
//   uniform float uDamping;            // velocity damping per step (0.97..0.995)

#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

layout (location = 0) in vec3 a_offset;
layout (location = 1) in vec3 a_velocity;
layout (location = 2) in float a_age;
layout (location = 3) in float a_ageNorm;
layout (location = 4) in float a_life;

uniform float u_time;
uniform float uVelocityFactor;
uniform vec3 uGravity;
uniform float uSpawnRadius;
uniform float uTurbulence;
uniform float uDamping;

out vec3 o_offset;
out vec3 o_velocity;
out float o_age;
out float o_ageNorm;

const float CONE = 0.05f;
const float UPBIAS = 0.25f; //0.08

// --- Small hash helpers (deterministic per-vertex, varying slowly over time) ---
float hash(float n) {
    return fract(sin(n) * 43758.5453123f);
}
vec3 hash3(float n) {
    return vec3(hash(n + 0.0f), hash(n + 1.0f), hash(n + 2.0f));
}

// Uniform random point on a disk (XZ plane), radius in [0,R]
vec2 disk2(float seed, float R) {
    float r = sqrt(hash(seed + 2.17f)) * R;
    float ang = 6.28318530718f * hash(seed + 3.91f);
    return vec2(cos(ang), sin(ang)) * r;
}

void main() {
    // Current particle age in ms
    float lived = u_time - a_age;
    bool dead = (lived >= a_life);

    // Slowly-evolving seed so the flame keeps changing but stays stable within a frame
    float tstep = floor(u_time * 0.001f);             // change about every 1 ms (tune if needed)
    float seed = float(gl_VertexID) * 0.123f + tstep;

    if (dead) {
        // --- Respawn near center on a small XZ disk, y=0 is the base of the flame ---
        vec2 d = disk2(seed, uSpawnRadius);
        o_offset = vec3(d.x, 0.0f, d.y);
        float len = max(length(d), 1e-6f);
        vec2 dn = d / len;

        // Upward-biased initial direction with a touch of lateral randomness
        vec3 dir = normalize(vec3(dn.x * CONE, 1.0f, dn.y * CONE) + (hash3(seed + 7.7f) - 0.5f) * (uTurbulence * 4.0f));

        // Base speed; actual step size still scaled by uVelocityFactor
        float sp = mix(0.02f, 0.10f, hash(seed + 8.9f));
        o_velocity = dir * sp;

        // New birth is now; normalized age starts at 0
        o_age = u_time;
        o_ageNorm = 0.0f;
    } else {
        // --- Alive: simple Euler with buoyancy, turbulence and damping ---
        vec3 jitter = (hash3(seed + 5.0f) - 0.5f) * (uTurbulence * 2.0f);
        vec3 v = a_velocity + uGravity + jitter;
        v *= uDamping;

        // Gently bias toward +Y while preserving speed
        float m = max(length(v), 1e-6f);
        vec3 vdir = v / m;
        vdir = normalize(mix(vdir, vec3(0.0f, 1.0f, 0.0f), UPBIAS)); 
        v = vdir * m;

        o_velocity = v;
        o_offset = a_offset + v * uVelocityFactor;

        o_age = a_age;
        o_ageNorm = clamp(lived / a_life, 0.0f, 1.0f);
    }
}
