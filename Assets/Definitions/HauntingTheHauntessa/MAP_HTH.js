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
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA3BB2ABABABAA13ÁAA3BAA2BAA9BB2AA6BAA5BB2ABAA7BABAA7BAA10ÁAA3ÁQAA3BAA9BABAA2BÁABABB11ABB3ABB26AA3BB6AA2BB10ÁBB3ABAA2BB4ABABB5ABB5ÁÁ2BAA2BB11AA2BB14ABB5ABB4ABABB20$BB93ÁBB24ÁABB39ÁÁ4BB2ABABB3ABÁBB23ÁÁ4BÁBB28ÁÁ2BÁBB2ÁÁ3BB11AA2ÁAÁÁ11BÁBÁÁ5BÁÁ32BÁÁ6BÁBÁÁ16AÁBÁÁ2BÁÁ10BÁÁ13BÁÁ2BÁBB3ÁÁ16BÁÁ3BAÁÁ4ABB4"}',
        wall: "FloorPebbles1",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "SmallBlackBricks44",
        start: '[361,5]',
        decals: '[[7,7,"GameDommes_039","picture"],[246,7,"GemDommes_063","picture"],[503,7,"FemDommes_5062","picture"],[332,4,"RustyFloorGrille_09","crest"]]',
        lights: '[[112,1,"Candelabra01","standard"],[305,3,"DuaLLantern_002","standard"],[566,3,"WallLamp19","standard"],[112,7,"WallLamp10","standard"]]',
        gold: '[[364,"GoldSphere"],[171,"GoldSphere"]]',
        objects: '[[155,"Apple"],[366,"Apple"],[368,"Apple"]]',
        oracles: '[[360,5,"DarkPriestess1"]]',
        }
};