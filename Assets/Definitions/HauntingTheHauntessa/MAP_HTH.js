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
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA3BB2ABABB3AA19BAA11BB2AA7BAA3BB2ABAA8BB2AA6BAA12ÁQAA3BAA10BAA2BB10ABB2ABB21AA3BB4AA2BB11ABAA2BABB6ABB4AA2BB8ABAA3BB8ABB2ABB16$BB46ÁÁ2BB48ABB78ÁÁ3BÁÁ3BB27ÁÁ2BB5ÁÁ6BÁÁ2BB37ÁBB2ÁÁ2BB6ÁBB9AA2ÁÁ19BÁÁ30BÁÁ10BÁBÁÁ23BÁÁ10BB2ÁÁ15BÁBB4ÁÁ4BÁÁ31BB9"}',
        wall: "FloorPebbles1",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "SmallBlackBricks44",
        start: '[202,1]',
        lights: '[[112,1,"Candelabra01","standard"],[305,3,"DuaLLantern_002","standard"],[566,3,"WallLamp19","standard"]]',
        }
};