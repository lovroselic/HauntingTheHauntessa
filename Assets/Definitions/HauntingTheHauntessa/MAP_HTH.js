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
    2: "My throne room. Here I listen to the petitions of my subjects. This time they want me to get rid of Hauntessa Spookish.",
    3: "Beyound this hall, there is and outside world. Am I ready yet?"

};

/** Map definitions */
const MAP = {
    1: {
        name: "It Starts In The Bedroom",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA2BB2AA6BAA12BAA8ɁсŁABB3ABB2AA2BB2AA3BAA2BB2AA3BB3AA14BAÁÁ2AA3BAA3BABB3AA3BAA2BAA2ÁBAA7BÁÁ2AA2BB3AA4BB13ࡁBB5ABB4ABB8ABB3ABB4ABB5AA3BB2ABAA2BB6ABB4ABB4ABB2ABB3ÁBÁBB5ABB3ABAA2BB11AA4BB3ABB13ABB17ABB6ABB44ABB55$ࡁBB104ÁÁ4BÁAŁɁсBB6ABB15ÁÁ4BB10ABсÁÁ13BB2ÁÁ13ABÁÁ9AÁÁ3BÁÁ6BÁÁ32AÁÁ14ABB6ŁɁࡁÁÁ23AÁAÁBAÁBAÁBB2ÁB"}',
        wall: "GoldBlackSDXL347",
        floor: "GoldBlackSDXL349",
        ceil: "BloodMarbleFloorWall_SDXL_008",
        start: '[277,1]',
        decals: '[[412,1,"ShieldDecal01","crest"],[79,7,"GemDommes_205","picture"],[85,7,"FluxDommes2197","picture"],[96,7,"FemDommes_6330","picture"],[98,7,"GemDommes_008","picture"],[155,7,"FluxDommes2182","picture"],[159,7,"FluxDommes3047","picture"],[274,7,"AirWolf200","picture"],[280,7,"ShortBlackSkirt_032","picture"],[238,7,"CCC_144","picture"],[226,7,"FemDommes_10008","picture"],[257,7,"Witcher113","picture"],[267,7,"Fred102","picture"],[260,7,"FluxDommes4031","picture"],[264,7,"FemDommes_12186","picture"],[502,7,"FemDommes_12186","picture"],[154,1,"FemDommes_5231","picture"],[160,1,"GameDommes_233","picture"],[191,1,"FluxDommes3019","picture"],[183,1,"FemDommes_12123","picture"],[185,1,"BlackBeret_080","picture"],[189,1,"FemDommes_5251","picture"],[321,1,"CCC_191","picture"],[323,1,"Zak50","picture"],[301,1,"BlackBeret_023","picture"],[313,1,"FemDommes_6368","picture"],[662,1,"Shamus4","picture"],[672,1,"GameDommes_258","picture"],[670,1,"FemDommes_8333","picture"],[664,1,"FemDommes_10082","picture"],[497,7,"LaughingSkeleton5","crest"],[507,7,"SittingSkelly14","crest"],[155,5,"AticAtac201","picture"],[137,5,"FemDommes_6229","picture"],[107,5,"FemDommes_6089","picture"],[159,3,"GameDommes_252","picture"],[147,3,"Nature04","picture"],[117,3,"MonkeyIsland101","picture"],[284,3,"FluxDommes2320","picture"],[328,3,"FemDommes_6187","picture"],[270,5,"UnusedEntities2070","picture"],[316,5,"FemDommes_8146","picture"],[643,3,"FluxDommes3160","picture"],[598,3,"FemDommes_8266","picture"],[659,3,"GameScreens015","picture"],[645,5,"FemDommes_6132","picture"],[631,5,"FemDommes_6351","picture"],[586,5,"FemDommes_6350","picture"],[96,3,"NurseAlchemyMagic_119","picture"],[98,5,"UnusedEntities2026","picture"]]',
        lights: '[[201,1,"DuaLLantern_010","standardSoft"],[203,1,"DuaLLantern_010","standardSoft"],[546,1,"Candle61","softOrange"],[548,1,"Candle61","softOrange"],[648,1,"Candle60","warmCandle"],[656,1,"Candle63","warmCandle"],[244,3,"Candle57","weakCandle"],[250,5,"Candle66","weakCandle"]]',
        gates: '[[217,1,"1.1","2.1","Pink"]]',
        keys: '[[380,10]]',
        monsters: '[[556,"Bat"],[568,"Bat"],[649,"RedGoldBat"],[655,"RedGoldBat"]]',
        scrolls: '[[658,4]]',
        gold: '[[124,"Coins"],[110,"Coins"],[130,"GoldCube"],[327,"Coins"],[635,"Coins"],[385,"GoldBar"]]',
        skills: '[[251,"Defense"]]',
        containers: '[[275,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[279,"Wardrobe","INTERACTION_ITEM.BlackLatexGloves",7],[655,"WoodenCrate57","GOLD_ITEM_TYPE.GoldCube",1],[298,"WoodenCrate55","GOLD_ITEM_TYPE.GoldSphere",3],[286,"Barrel","GOLD_ITEM_TYPE.Coins",5],[272,"IronChest","GOLD_ITEM_TYPE.SilverBar",3],[263,"Barrel_467","GOLD_ITEM_TYPE.SilverBar",3]]',
        objects: '[[243,"Cake"],[646,"Crown"],[649,"Orb"],[176,"Orb"]]',
        oracles: '[[232,7,"PrincessBed"],[667,1,"Darksy"]]',
        movables: '[[287,"GreenBat"],[297,"GreenBat"],[384,"GreenBat"],[172,"GreenBat"]]',
    }
    ,
    2: {
        name: "The Throne Room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"19","height":"19","depth":5,"map":"BB3AA4BAA5BABAA10BÁAA7BAA6BAA18BABAA9BAA2BB2ABB2AA3BAA6BAÁAA5BAA2ÁAÁBAA11BB3AA2BB2AA4BÁAÁBAA6ÁAÁAA2ÁBAA2сABAA2BŁABB3AA3BB2ÁBB2AA4BAA3ÁAA13BAA3ÁAÁAA5BŁAŁAA3ŁAA2BB2AA2ɁAA8BB3ABB3ÁABB2ABB2AA2BB2AA3BAA7BABAA7BABB3ABB2AÁAA3ÁÁ2AA2BAA6BAA7BABÁAA4ÁAÁAÁBAA2ÁÁ3AA2ÁÁ2AA8BB3AA6BB11ABB2ABB7ABABÁBB9AA2ÁࡁBB8AA2BB2AA2BB4ABB4ABB14ABB7ABB5ABB21ABB14AA2BB6AEABABB2AA3BABB2AA3BABB6AA2BB2AA2BABB2ABB7ABB5AA2BB4ABB3AA2BB5AA2BB3AA3BB2ABB3AA2BABB2ABB11ABB13ABB21ABB6ABB10ÁBB3ABAA2BB5ABB12ÁBB7ABB18ABB12ABB85ABB36ÁBB146$ABB26ABB169ÁBB42ࡁBB9ÁBB5ÁÁ3BÁÁ2BB14ÁBB7ÁÁ5BB2ABB2ÁBB2ÁBB5ÁÁ2BB7ÁBÁBB18ÁÁ2BB8ÁÁ2BB19ࡁBB28ABB61ÁÁ2BB8AA2ÁÁ5BB17ABB2ÁÁ8AÁÁ8BAÁÁ12BÁÁ11BÁÁ3ABABÁÁ2BB2ÁÁ8AÁÁ7AÁÁ3AÁAÁÁ8BÁÁ6BÁÁ8BB2ÁÁ18AÁÁ27BÁÁ2AÁAÁÁ7AA2BB2AA2сAÁBB5ÁÁ8BB5ÁÁ39AÁÁ35AA3ÁÁ2AÁÁ26AA2ÁÁ3BB7ÁÁ7AA3BB3ÁÁ3AɁŁɁŁŁ3AA4ɁсɁŁŁ2сÁࡁсAɁࡁBсBࡁB"}',
        wall: "GreyBrownTiles101",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "DarkMarble50",
        start: '[529,5]',
        decals: '[[519,7,"KnightStatue106","crest"],[521,7,"KnightStatue110","crest"],[523,7,"KnightStatue105","crest"],[525,7,"KnightStatue107","crest"],[881,7,"ShieldDecal02","crest"],[885,7,"ShieldDecal03","crest"],[538,4,"PersianRug06","crest"],[557,4,"PersianRug06","crest"],[539,4,"PersianRug06","crest"],[558,4,"PersianRug06","crest"],[540,4,"PersianRug06","crest"],[559,4,"PersianRug06","crest"],[541,4,"PersianRug06","crest"],[560,4,"PersianRug06","crest"],[542,4,"PersianRug06","crest"],[561,4,"PersianRug06","crest"],[543,4,"PersianRug06","crest"],[562,4,"PersianRug06","crest"],[544,4,"PersianRug06","crest"],[563,4,"PersianRug06","crest"],[520,4,"PersianRug06","crest"],[524,4,"PersianRug06","crest"]]',
        lights: '[[458,1,"Candelabra01","standardSoft"],[472,1,"Candelabra02","standardSoft"],[370,7,"Candelabra03","standardSoft"],[672,1,"Lamp42","standard"],[676,1,"Lamp42","standard"],[459,7,"FireplaceFLuxU417","fireplace"],[471,7,"FireplaceFLuxU420","fireplaceDim"]]',
        gates: '[[363,7,"2.1","1.1","Closed"],[351,1,"2.2","3.1","Closed"],[1073,1,"2.3","3.3","Closed"],[1795,1,"2.4","3.4","Closed"],[377,7,"2.5","5.1","Closed"],[531,3,"2.6","6.1","Closed"]]',
        doors: '[427]',
        entities: '[[505,7,"QueenMother"],[589,5,"FashionGuard"],[607,3,"CuteTank"]]',
        oracles: '[[501,7,"PrincessThrone"]]',
    }
    ,
    3: {
        name: "Castle Entrance Hall",
        sg: 0,
        maxSpawned: 6,
        killCountdown: 6,
        killsRequiredToStopSpawning: 99,
        spawnDelay: 9999,
        data: '{"width":"15","height":"15","depth":5,"map":"BB3AA4BB3AA5BAA2BAA3BAA24BB2AA3BAA5ÁAA2BAA2BAA8BAA5BB3AA3BAA5BB2AÁÁ2AA23BABB2AA4BAA4BAA3BB2ABB3AÁBB2ÁÁ4AÁÁ3AA4BB7AÁÁ2AA3BB10ÁBB6ABB2ABABABABB6AA3BB33ABAA4BB2ABB27ABAA2BB9AA3BB4AA2BABB4ÁÁ2BB5ABB4ABB5ABB3AA9BB2AA5ÁBB2ABB11ÁBB8ABB29$BB10ABB32ABB22ÁABŁBB102ÁBB9ÁBB13ÁÁ3BÁÁ4BB6ABB5ÁBB6ÁBB2ÁBB4ÁÁ13ABB9ÁBB11ABB5ABB4ࡁBࡁBB32ÁÁ2BB2ÁÁ3BB2ÁÁ2BB9ÁÁ2BB21ÁÁ47ŁɁсBB2ÁÁ51BÁÁ6BB4ÁÁ7BB2ÁÁ3BÁÁ3BÁAÁÁ15BB6ÁÁ9AÁÁ8ɁÁAÁÁ7ŁсࡁBB2ÁÁ6BÁÁ4BB2ÁÁ78AA4ÁÁ5BB4ÁÁ23AA2BB15ÁÁ6AA2ÁAÁAÁÁ15ɁÁABÁÁ2сŁÁÁ2ࡁɁсÁÁ2B"}',
        wall: "GoldBlackSDXL349",
        floor: "BloodMarbleFloorWall_SDXL_001",
        ceil: "DarkFloorSDXL337",
        start: '[22,7]',
        decals: '[[21,7,"KnightStatue_504","crest"],[23,7,"KnightStatue_497","crest"],[262,7,"ShieldDecal_505","crest"],[427,1,"ShieldDecal_515","crest"],[621,1,"ShieldDecal_514","crest"],[623,1,"ShieldDecal_510","crest"],[547,7,"ShieldDecal_513","crest"],[395,1,"ShieldDecal02","crest"],[399,1,"ShieldDecal_513","crest"]]',
        lights: '[[260,7,"DuaLLantern_021","standard2"],[264,7,"DuaLLantern_021","standard2"],[1102,1,"SkullLantern58","softCandle"],[321,7,"WallLamp31","warmCandle"],[323,7,"WallLamp31","warmCandle"],[137,7,"Candle50","darkgray"],[147,7,"WallLamp19","darkgray"]]',
        gates: '[[7,7,"3.1","2.2","Closed"],[217,1,"3.2","4.1","Gold"],[457,7,"3.3","2.3","Closed"],[907,7,"3.4","2.4","Closed"]]',
        monsters: '[[847,"DarkRedBat"]]',
        entities: '[[222,1,"GateKeeper"]]',
        oracles: '[[212,1,"StandingFashionGuard"],[1,7,"CuteDemon"]]',
        lairs: '[[974,3,"Lair67"],[1064,3,"Lair55"],[1119,1,"Lair66"],[1115,1,"Lair54"],[1050,5,"Lair15"],[960,5,"Lair48"],[888,1,"Lair31"],[896,1,"Lair70"],[903,7,"Lair31"],[911,7,"Lair57"]]',
        monsterList: '["Bat","RedGoldBat","DarkRedBat"]',
    }
    ,
    4: {}
    ,
    5: {
        name: "Storage",
        sg: 0,
        maxSpawned: 8,
        killCountdown: 8,
        killsRequiredToStopSpawning: 99,
        spawnDelay: 5000,
        data: '{"width":"15","height":"15","depth":3,"map":"BB2AA4BÁAÁAÁÁ2ABAA6ÁÁ2ABAA4BAÁÁ2AA10BB3ABAA5BB2AA8BAA10BABAA44BABB3ÁABABB2AA2BB4ABB2AA4BB2ABAA5BAA2BB2ABAA3BB16ABB5AA2BB14AA2BB4ABB5ABB5ABABABABB3ÁBABB10AA2BB4AA4ÁBB11ABB22ABB22ABB16ɁBB7ABABࡁŁсBB4AA2BB19A$BB49ABB32ÁÁ5BB8ABB25AA2ÁBB4ࡁAÁAÁÁ2BB3ABB9AA3BB18ÁBB22ÁÁ42ABB3ÁÁ4BÁÁ2BB5ÁÁ9BÁÁ5BB5ÁBÁÁ23BABB2AA3ŁAɁAс"}',
        wall: "DarkWallSDXL317",
        floor: "DetailedFloor2",
        ceil: "IrregularTiledFloorCeil07",
        start: '[197,1]',
        lights: '[[562,7,"WallLamp32","standardSoft"],[546,1,"FluxLight121","standardSoft"],[547,5,"DuaLLantern_007","standardSoft"],[105,5,"Fireplace104","fireplace"],[209,3,"Candle65","faintCandle"]]',
        gates: '[[212,1,"5.1","2.5","Closed"]]',
        monsters: '[[48,"Spider"],[109,"Spider"],[191,"Spider"],[279,"SpiderGreen"],[296,"SpiderGreen"],[631,"SpiderRed"],[621,"SpiderRed"],[596,"SpiderRed"]]',
        containers: '[[646,"WoodenCrate56","INTERACTION_ITEM.BrownLeatherBoots",1]]',
        entities: '[[4,7,"TheMaid"]]',
        oracles: '[[299,3,"Jumpy"]]',
        lairs: '[[585,5,"Lair28"],[525,5,"Lair66"],[453,7,"Lair12"],[456,7,"Lair14"]]',
        monsterList: '["Bat","RedGoldBat","DarkRedBat"]',
    }
    ,
    6 : {
        name: "The Temple",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"17","height":"17","depth":5,"map":"BB5AA20ࡁŁɁсBB4AA36BAA5BAA8ÁAÁÁ2AA8BB3AA6ÁÁ2AA5ÁÁ4AA9BB6AA17BB3AA2BAA17BB10ABB39ABB6AA3BB4AA2BB5ABABB5AA4BB13AA2BB10ABB6ABɁсࡁBŁBB191$BB35ÁBB4AÁBB36ÁBB100ABB195ÁÁ6BB13ÁBB6ÁÁ7BB2AA4BB23ÁBB14ÁÁ9BB129ÁBÁÁ2BÁBB29ÁÁ97BÁÁ18BÁÁ5BÁÁ21BÁÁ10ABÁÁ33BB2ÁÁ40BÁÁ2BB5ÁÁ42AA8BÁBB7ÁÁ19BB11ABABABA"}',
        wall: "BlackWall41",
        floor: "DarkWallSDXL314",
        ceil: "RoughCave08",
        start: '[426,5]',
        decals: '[[699,5,"Ivy12a","crest"],[665,5,"Ivy17","crest"],[750,5,"Ivy4","crest"],[801,5,"Ivy16","crest"],[660,3,"Ivy16","crest"],[694,3,"Ivy1","crest"],[762,3,"Ivy12","crest"],[796,3,"Ivy16","crest"],[619,7,"Ivy17","crest"],[621,7,"Ivy1","crest"],[624,7,"Ivy2","crest"],[616,7,"Ivy4","crest"],[829,1,"Ivy4","crest"],[827,1,"Ivy12","crest"],[825,1,"Ivy11","crest"],[822,1,"Ivy12a","crest"],[820,1,"Ivy1","crest"],[926,7,"Ivy303","crest"],[924,7,"Ivy12a","crest"],[922,7,"Ivy17","crest"],[929,7,"Ivy15","crest"],[1093,1,"Ivy16","crest"],[1096,1,"Ivy300","crest"],[1100,1,"Ivy1","crest"],[955,5,"Ivy305","crest"],[1057,5,"Ivy305","crest"],[1023,5,"Ivy14","crest"],[982,3,"Ivy16","crest"],[999,3,"Ivy14","crest"],[1050,3,"Ivy14","crest"],[1229,7,"IvyWall_517","texture"],[1230,7,"IvyWall_517","texture"],[1231,7,"IvyWall_517","texture"],[1232,7,"IvyWall_517","texture"],[1233,7,"IvyWall_517","texture"],[1234,7,"IvyWall_517","texture"],[1235,7,"IvyWall_517","texture"],[1365,1,"IvyWall_518","texture"],[1366,1,"IvyWall_518","texture"],[1367,1,"IvyWall_518","texture"],[1368,1,"IvyWall_518","texture"],[1369,1,"IvyWall_518","texture"],[1370,1,"IvyWall_518","texture"],[1371,1,"IvyWall_518","texture"],[1245,5,"IvyWall_519","texture"],[1262,5,"IvyWall_519","texture"],[1279,5,"IvyWall_519","texture"],[1296,5,"IvyWall_519","texture"],[1313,5,"IvyWall_519","texture"],[1330,5,"IvyWall_519","texture"],[1347,5,"IvyWall_519","texture"],[1253,3,"IvyWall_521","texture"],[1270,3,"IvyWall_521","texture"],[1287,3,"IvyWall_521","texture"],[1304,3,"IvyWall_521","texture"],[1321,3,"IvyWall_521","texture"],[1338,3,"IvyWall_521","texture"],[1355,3,"IvyWall_521","texture"]]',
        lights: '[[1011,7,"DuaLLantern_007","standardMuted"],[1011,5,"FluxLight115","standardMuted"],[1011,1,"DuaLLantern_030","standardMuted"],[1011,3,"Lantern301","standardMuted"],[443,5,"CandleL1","warmCandle"],[409,5,"CandleR1","warmCandle"]]',
        gates: '[[425,5,"6.1","2.6","Closed"]]',
        shrines: '[[441,3,"RedRaincoat"]]',
        }
};