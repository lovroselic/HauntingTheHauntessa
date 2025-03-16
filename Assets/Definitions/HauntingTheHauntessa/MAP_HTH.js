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
        containers: '[[275,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[279,"Wardrobe","INTERACTION_ITEM.BlackLatexGloves",7],[655,"WoodenCrate57","GOLD_ITEM_TYPE.GoldCube",1],[298,"WoodenCrate55","GOLD_ITEM_TYPE.GoldSphere",3],[286,"Barrel","GOLD_ITEM_TYPE.Coins",5],[272,"IronChest","GOLD_ITEM_TYPE.SilverBar",3]]',
        objects: '[[243,"Cake"],[646,"Crown"],[649,"Orb"],[176,"Orb"]]',
        oracles: '[[232,7,"PrincessBed"],[667,1,"Darksy"]]',
        movables: '[[287,"GreenBat"],[297,"GreenBat"],[384,"GreenBat"],[172,"GreenBat"]]',
    }
    ,
    2 : {
        name: "The Throne Room",
        sg: 0,
        maxSpawned: -1,
        killCountdown: -1,
        killsRequiredToStopSpawning: 99,
        spawnDelay: -1,
        data: '{"width":"19","height":"19","depth":5,"map":"BB2AA2BAA4BB2AA7BABÁAA7BAA5BAA19BABAA9BAA2BB2ABABABAA7BAÁAA4BAA2ÁBAA13BB2AA2BB2AA3BAA6ÁÁ2AÁABAA4сABAA2ŁABB2AA2BÁBB2AA4BAA3ÁAA7BB2AA5ÁAÁAA5BŁAŁAA3ŁABB3AA2ɁAA5BB3ABB3ÁABB2ABB2AA2BB2AA3BAA6BB2AA3BABABB2AA4ÁAA3ÁÁ2AA2BAA4ÁAA2ÁÁ2AA4BAA3BABÁAA4ÁAÁABÁABÁÁ3AA2ÁÁ2AA4BB2AA2BB3AA6BB11ABB3ABB5ABABB7AA2ÁÁ2ࡁBB9AA2BB2AA2BB4ABB2ABB17ABB7ABB4ABB19ABB14ABB8AEABABB2AA2BB5ABB7AA2BB2AA2BB15ABB4AA2BB3AA3BABB2AA2BB4AA2BB7AA3BABB5AA2BB19ABB17ABABB4ABB19ABB5AA3BB12ÁBB4ABAA2BB6ABB13ÁBABB6ABB18ABB12ABB85ABB44ÁBB142$ABB26ABB169ÁBB42ࡁBB9ÁBB5ÁÁ3BÁÁ2BÁÁ3BB10ÁBB3ÁBB3ÁBB14ABB2ÁBB2ÁBB9ÁÁ2BB3ÁBÁBB18ÁÁ2BB8ÁÁ2BB19ࡁBB28ABB61ÁÁ2BB8AA2ÁÁ5BB17ABB2ÁÁ5AÁÁ11BAÁÁ12BÁÁ11BÁÁ3ABABÁÁ2BB2ÁÁ13AÁÁ5AA2ÁAÁÁ8BÁÁ11BÁÁ3BB2ÁÁ18AÁÁ27BÁAÁAÁÁ8AA2BB2AA2сAÁBB5ÁÁ8BB5ÁÁ38AÁÁ36AÁÁ2AÁÁ3AA2ÁBB3ÁBÁÁ13AA2ÁÁ3BB3ÁÁ7AA3BB3ÁÁ3AɁŁɁŁŁ3AA4ɁсɁŁŁ2сÁࡁсAɁࡁBсBࡁB"}',
        wall: "GreyBrownTiles101",
        floor: "BloodMarbleFloorWall_SDXL_030",
        ceil: "DarkMarble50",
        start: '[541,1]',
        decals: '[[519,7,"KnightStatue106","crest"],[521,7,"KnightStatue110","crest"],[523,7,"KnightStatue105","crest"],[525,7,"KnightStatue107","crest"],[881,7,"ShieldDecal02","crest"],[885,7,"ShieldDecal03","crest"],[538,4,"PersianRug06","crest"],[557,4,"PersianRug06","crest"],[539,4,"PersianRug06","crest"],[558,4,"PersianRug06","crest"],[540,4,"PersianRug06","crest"],[559,4,"PersianRug06","crest"],[541,4,"PersianRug06","crest"],[560,4,"PersianRug06","crest"],[542,4,"PersianRug06","crest"],[561,4,"PersianRug06","crest"],[543,4,"PersianRug06","crest"],[562,4,"PersianRug06","crest"],[544,4,"PersianRug06","crest"],[563,4,"PersianRug06","crest"],[520,4,"PersianRug06","crest"],[524,4,"PersianRug06","crest"]]',
        lights: '[[458,1,"Candelabra01","standardSoft"],[472,1,"Candelabra02","standardSoft"],[370,7,"Candelabra03","standardSoft"],[672,1,"Lamp42","standard"],[676,1,"Lamp42","standard"],[459,7,"FireplaceFLuxU417","fireplace"],[471,7,"FireplaceFLuxU420","fireplaceDim"]]',
        gates: '[[363,7,"2.1","1.1","Closed"]]',
        doors: '[427]',
        entities: '[[505,7,"QueenMother"]]',
        oracles: '[[501,7,"PrincessThrone"]]',
        }
};