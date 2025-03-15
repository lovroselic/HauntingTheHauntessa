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
    1 : {
        name: "It starts in the bedroom",
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
        decals: '[[412,1,"ShieldDecal01","crest"],[79,7,"GemDommes_205","picture"],[85,7,"FluxDommes2197","picture"],[96,7,"FemDommes_6330","picture"],[98,7,"GemDommes_008","picture"],[155,7,"FluxDommes2182","picture"],[159,7,"FluxDommes3047","picture"],[274,7,"AirWolf200","picture"],[280,7,"ShortBlackSkirt_032","picture"],[238,7,"CCC_144","picture"],[226,7,"FemDommes_10008","picture"],[257,7,"Witcher113","picture"],[267,7,"Fred102","picture"],[260,7,"FluxDommes4031","picture"],[264,7,"FemDommes_12186","picture"],[502,7,"FemDommes_12186","picture"],[154,1,"FemDommes_5231","picture"],[160,1,"GameDommes_233","picture"],[191,1,"FluxDommes3019","picture"],[183,1,"FemDommes_12123","picture"],[185,1,"BlackBeret_080","picture"],[189,1,"FemDommes_5251","picture"],[321,1,"CCC_191","picture"],[323,1,"Zak50","picture"],[301,1,"BlackBeret_023","picture"],[313,1,"FemDommes_6368","picture"],[662,1,"Shamus4","picture"],[672,1,"GameDommes_258","picture"],[670,1,"FemDommes_8333","picture"],[664,1,"FemDommes_10082","picture"],[497,7,"LaughingSkeleton5","crest"],[507,7,"SittingSkelly14","crest"]]',
        lights: '[[201,1,"DuaLLantern_010","standardSoft"],[203,1,"DuaLLantern_010","standardSoft"],[546,1,"Candle61","softOrange"],[548,1,"Candle61","softOrange"],[648,1,"Candle60","warmCandle"],[656,1,"Candle63","warmCandle"],[244,3,"Candle57","weakCandle"],[250,5,"Candle66","weakCandle"]]',
        gates: '[[217,1,"1.1","2.1","Pink"]]',
        keys: '[[380,10]]',
        monsters: '[[556,"Bat"],[568,"Bat"],[649,"RedGoldBat"],[655,"RedGoldBat"]]',
        scrolls: '[[658,4]]',
        gold: '[[124,"Coins"],[110,"Coins"],[130,"GoldCube"],[327,"Coins"],[635,"Coins"]]',
        skills: '[[251,"Defense"]]',
        containers: '[[275,"TreasureChest","GOLD_ITEM_TYPE.GoldBar",7],[279,"Wardrobe","INTERACTION_ITEM.BlackLatexGloves",7]]',
        objects: '[[243,"Cake"],[646,"Crown"],[649,"Orb"],[176,"Orb"]]',
        oracles: '[[232,7,"PrincessBed"],[667,1,"Darksy"]]',
        movables: '[[287,"GreenBat"],[297,"GreenBat"],[384,"GreenBat"],[172,"GreenBat"]]',
        }
    ,
};