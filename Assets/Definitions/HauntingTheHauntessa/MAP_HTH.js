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
    1: {
        name: "Generic room name",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA3BB2ABABABAA13ÁAA3BAA2BAA9BB2AA6BAA5BB2ABAA7BABAA7BÁAA10ÁAÁÁ2BAA2ÁQAA3ÁBÁAA10BABAÁABÁABÁBABAA3BB9ABB3ABB11ÁBB15AA3BB7AA2BB9ABB3ABAA3BB2AA2BABB5ABB6AA2BB11AA2BB14ABB5ABB4ABABB20$BB93ÁBB24AA2BB39ÁÁ4BB2ABABB3ABÁBB16ÁBB7ÁÁ2AA2BB29ÁBB2ÁBB2ÁÁ3BB10AA2ÁÁ4AÁÁ2AÁÁ10BÁÁ4BÁÁ4BÁÁ19AÁÁ9BÁÁ4BÁBB2ÁÁ14AÁÁ3BÁBÁÁ20BÁÁ3BB4ÁÁ11AÁABÁÁ2BB2ÁÁ2BB2"}',
        wall: "FloorPebbles1",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "SmallBlackBricks44",
        start: '[202,1]',
        decals: '[[7,7,"GameDommes_039","picture"],[246,7,"GemDommes_063","picture"],[503,7,"FemDommes_5062","picture"],[332,4,"RustyFloorGrille_09","crest"]]',
        lights: '[[112,1,"Candelabra01","standard"],[305,3,"DuaLLantern_002","standard"],[566,3,"WallLamp19","standard"],[112,7,"WallLamp10","standard"]]',
        gates: '[[217,1,"1.1","2.1","Silver"]]',
        keys: '[[363,0],[172,1]]',
        scrolls: '[[369,0]]',
        gold: '[[364,"GoldSphere"],[171,"GoldSphere"]]',
        skills: '[[370,"Attack"],[371,"Heart"],[342,"Defense"],[387,"Mana"]]',
        containers: '[[357,"WoodenCrate59","GOLD_ITEM_TYPE.GoldSphere",3]]',
        shrines: '[[297,7,"CuteDemon"]]',
        entities: '[[374,3,"Darksy"]]',
        objects: '[[155,"Apple"],[366,"Apple"],[368,"Apple"],[327,"Champagne"]]',
        oracles: '[[360,5,"DarkPriestess1"]]',
        trainers: '[[344,3,"Darksy"]]',
    },
    2 : {
        name: "Second room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"16","height":"16","depth":3,"map":"BB15AA27BB11ABAA102BB7AA2BAA235BAA3BB38AA13BB47AA11BB49AA7BB23ABB14ABB102ABB34$BB20A"}',
        wall: "MossyRocks41",
        floor: "IceFloor37",
        ceil: "IrregularTiledFloorCeil04",
        start: '[276,7]',
        lights: '[[487,1,"Candle71","standard"]]',
        gates: '[[260,7,"2.1","1.1","Closed"]]',
        }
};