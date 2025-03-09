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
    1: "This is my bedroom, but I don't have time to rest.",

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
    }
    ,
    2: {
        name: "Second room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        spawnDelay: -1,
        data: '{"width":"16","height":"16","depth":3,"map":"BB3ABAA3BB2ABAA22BB7AA2BAA73ÁAÁÁ7AA10BB8ÁÁ12AA19BAA11BB50ABB21AA12BB21ABB3ABAA2BB8AA7BB41AA7BB23ABB14ABB102ABB34$BB20AÁÁ140AA8ÁÁ48AA12"}',
        wall: "MossyRocks41",
        floor: "IceFloor37",
        ceil: "IrregularTiledFloorCeil04",
        start: '[276,7]',
        lights: '[[487,1,"Candle71","standard"],[520,7,"DuaLLantern_021","standard"]]',
        gates: '[[260,7,"2.1","1.1","Closed"],[319,3,"2.2","3.1","Down"]]',
        monsters: '[[323,"Bat"],[306,"Bat"],[308,"Bat"],[338,"Bat"],[355,"RedGoldBat"],[370,"RedGoldBat"],[387,"RedGoldBat"],[310,"RedGoldBat"],[312,"RedGoldBat"],[455,"MissGalaxy"],[457,"MissGalaxyGreen"]]',
        objects: '[[294,"Cake"],[295,"Cake"],[290,"Orb"],[291,"Orb"]]',
        movables: '[[309,"RoastChicken"],[307,"RoastPig"]]',
    }
    ,
    3: {
        name: "Trap test",
        sg: 0,
        maxSpawned: 1,
        killCountdown: 3,
        killsRequiredToStopSpawning: 33,
        spawnDelay: 5000,
        data: '{"width":"13","height":"13","depth":3,"map":"BB2ABABAA2BAA4BAA13ÁAA2BB3ÁAA3ÁAÁABB4AA3BB2AA2EAA2BAA19BAA6BAA3BAA6BB12ABB4ABB4ABB11ABB2ABAA4BB5ABB3ABB12ABB3ABB25AA2BB109ABB15ÁBB25ABB14$ABB49ÁBÁBB2ÁÁ4BB36AÁAÁÁ19AA3ÁÁ14BÁBÁÁ9BB5"}',
        wall: "BrownidhMossy102",
        floor: "OrnateFloor108",
        ceil: "FloorTiles_SDXL_002",
        start: '[209,5]',
        lights: '[[185,7,"Candelabra01","standard"],[315,1,"Candelabra01","standard"]]',
        gates: '[[208,5,"3.1","2.2","Up"],[259,3,"3.2","4.1","Closed"]]',
        doors: '[204]',
        triggers: '[[284,7,"SmoothWallButton",1,309],[320,1,"SmoothWallButton",0,305]]',
        traps: '[[222,5,"SmoothWallButton",1,"MissGalaxy",215],[235,5,"SmoothWallButton",0,"Bounceball",244],[261,5,"SmoothWallButton",0,"RedFireball",270]]',
        lairs: '[[286,5,"Lair06"]]',
        monsterList: '["MissGalaxyGreen"]',
    }
    ,
    4: {
        name: "Advancer",
        sg: 0,
        maxSpawned: 1,
        killCountdown: 3,
        killsRequiredToStopSpawning: 33,
        spawnDelay: 5000,
        data: '{"width":"13","height":"13","depth":3,"map":"BB2ABABAA2BAA4BAA13ÁAA2BB3ÁAA3ÁAÁABB4AA3BB2AA2EAA2BAA19BAA6BAA3BAA6BB12ABB4ABB4ABB11ABB2ABAA4BB5ABB3ABB12ABB3ABB25AA2BB109ABB15ÁBB25ABB14$ABB49ÁBÁBB2ÁÁ4BB36AÁAÁÁ19AA3ÁÁ14BÁBÁÁ9BB5"}',
        wall: "BrownishMossy21",
        floor: "Relief05",
        ceil: "SmallBlackBricks48",
        start: '[209,5]',
        lights: '[[185,7,"Candelabra01","standard"],[315,1,"Candelabra01","standard"]]',
        gates: '[[208,5,"4.1","3.2","Closed"],[259,3,"4.2","5.1","Closed"]]',
        monsters: '[[242,"Spider"],[268,"SpiderGreen"],[294,"SpiderRed"]]',
    }
    ,
    5 : {
        name: "StairStudy",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: -1,
        spawnDelay: -1,
        data: '{"width":"16","height":"16","depth":3,"map":"BB3ABAA3BABAA17ŁAA9ɁAA6BAŁAA13сAA3ŁAA7BAA5BB4ɁAA2ÁAA2ÁAÁÁ6AA7BB6ABB3AA5ÁÁ6AÁÁ4AA11BAA6BABÁÁ3AÁÁ3AÁAA3ÁÁ3AA5BB9AA3BB6ࡁࡁ2BB5сBB7AA3BB11ABB15AA9BB5ABB6ABB6AA3BB4AA6BB20AA3BB25ABB68ABB17$ABB93AA4BB16AA3BB28ABÁÁ3AÁAA2ÁAÁÁ16AA3ÁÁ20AÁÁ4AÁÁ31AÁÁ21AÁÁ14AA2ÁÁ15AA3ÁÁ40BÁÁ4BB2ÁAA9ɁBABAсABࡁBB3"}',
        wall: "DarkMossy22",
        floor: "BloodMarbleFloorWall_SDXL_009",
        ceil: "RedBricks40",
        start: '[474,1]',
        decals: '[[282,7,"FemDommes_6238","picture"],[490,1,"FemDommes_10150","picture"],[170,3,"FemDommes_6145","picture"]]',
        lights: '[[487,1,"Candle71","standard"],[520,7,"DuaLLantern_021","standard"],[156,3,"Candle66","standard"]]',
        gates: '[[384,5,"5.1","4.2","Closed"]]',
        monsters: '[[182,"Bat"],[183,"Bat"],[184,"Bat"],[185,"Bat"],[186,"Bat"],[187,"Bat"]]',
        scrolls: '[[473,4],[475,5],[459,6]]',
        }
};