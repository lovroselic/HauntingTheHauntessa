/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";
console.log("%cMAP for HTH loaded.", "color: #888");
/**
 * entry texts
 */

const MAP_TEXT = {
    1: "This is my bedroom.",

};

/** Map definitions */
const MAP = {
    1 : {
        name: "Generic room name",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA3BB2ABABABAA16BAA2ÁBAA9BB2AA5BAA6BB2ABAA6BABAA8BAA9ÁAA4ÁQAA3BAA8BABAA2BÁAA2BABB8ABB3ABB23AA3BB6AA2BB7ÁBB3ABAA2BB3ABB5ABB6AA2BB11AA2BB14ABB5ABB4ABABB20$BB93ÁBB24ÁABB39ÁÁ4BB2ABABB3ABÁBB18ÁBB5ÁÁ5BÁBB16ABB17ÁÁ2BÁBB2ÁÁ3BB14AA2ÁAÁÁ10BÁÁ3BÁÁ4BÁÁ30BÁÁ8BÁBÁÁ18BÁÁ9BÁÁ3BB2ÁÁ13BÁBÁBB3ÁÁ16BÁÁ4BÁÁ6BB6"}',
        wall: "FloorPebbles1",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "SmallBlackBricks44",
        start: '[522,3]',
        decals: '[[7,7,"GameDommes_039","picture"],[246,7,"GemDommes_063","picture"],[503,7,"FemDommes_5062","picture"]]',
        lights: '[[112,1,"Candelabra01","standard"],[305,3,"DuaLLantern_002","standard"],[566,3,"WallLamp19","standard"],[112,7,"WallLamp10","standard"]]',
        objects: '[[155,"Apple"]]',
        }
};