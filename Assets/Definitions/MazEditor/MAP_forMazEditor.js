/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";

/** textures */
const TEXTURE_LIST = [
    "3d wall", "3d wall2", "Beach1", "Beach2", "BigBricks4", "BigGreyBricks1", "BigRocks2", "BigStoneWall1", "BigStoneWall2", "BlackBricks45", "BlackReddish1", "BlackWal46",
    "BlackWall215", "BlackWall40", "BlackWall41", "BlackWall42", "BlackWall43", "BlackWall44", "BlackWall45", "BloodMarbleFloorWall_SDXL_001", "BloodMarbleFloorWall_SDXL_002", "BloodMarbleFloorWall_SDXL_003", "BloodMarbleFloorWall_SDXL_004", "BloodMarbleFloorWall_SDXL_005",
    "BloodMarbleFloorWall_SDXL_006", "BloodMarbleFloorWall_SDXL_007", "BloodMarbleFloorWall_SDXL_008", "BloodMarbleFloorWall_SDXL_009", "BloodMarbleFloorWall_SDXL_010", "BloodMarbleFloorWall_SDXL_011", "BloodMarbleFloorWall_SDXL_012", "BloodMarbleFloorWall_SDXL_013", "BloodMarbleFloorWall_SDXL_014", "BloodMarbleFloorWall_SDXL_015", "BloodMarbleFloorWall_SDXL_016", "BloodMarbleFloorWall_SDXL_017",
    "BloodMarbleFloorWall_SDXL_018", "BloodMarbleFloorWall_SDXL_019", "BloodMarbleFloorWall_SDXL_020", "BloodMarbleFloorWall_SDXL_021", "BloodMarbleFloorWall_SDXL_022", "BloodMarbleFloorWall_SDXL_023", "BloodMarbleFloorWall_SDXL_024", "BloodMarbleFloorWall_SDXL_025", "BloodMarbleFloorWall_SDXL_026", "BloodMarbleFloorWall_SDXL_027", "BloodMarbleFloorWall_SDXL_028", "BloodMarbleFloorWall_SDXL_029",
    "BloodMarbleFloorWall_SDXL_030", "BloodMarbleFloorWall_SDXL_031", "BloodMarbleFloorWall_SDXL_032", "BlurryRedBricks1", "BoulderWall1", "BoulderWall103", "Boulders1", "BrightGlowyWall2", "BrownWall50", "BrownWapp51", "BrownidhMossy102", "BrownishMossy21",
    "BrownishMossyBricks101", "Clouds11", "Clouds12", "Cracked01", "Cracked02", "Cracked03", "Cracked04", "Cracked05", "Cracked06", "Cracked07", "Cracked08", "Cracked09",
    "DARKBricks107", "DarkBrick113", "DarkBricks101", "DarkBricks102", "DarkBricks108", "DarkBricks110", "DarkBricks111", "DarkBricks112", "DarkBricks114", "DarkMarble50", "DarkMarble51", "DarkMarble52",
    "DarkMarble54", "DarkMoss1001", "DarkMossy124", "DarkMossy2", "DarkMossy22", "DarkMossy23", "DarkMossy232", "DarkMossy24", "DarkMossy7", "DarkMossy78", "DarkMossy9", "DarkMossyWall101",
    "DarkRedBricks2", "DarkRedBricks3", "DarkSky01", "DarkSky02", "DarkSky03", "DarkSky04", "DarkSky05", "DarkSky06", "DarkSky07", "DarkWAll43234", "DarkWall10001", "DarkWall102",
    "DatkMossy103", "DetailedFloor1", "DetailedFloor2", "Dirt1", "FloorPebbles1", "FloorTiles_SDXL_001", "FloorTiles_SDXL_002", "FloorTiles_SDXL_003", "FloorTiles_SDXL_004", "FloorTiles_SDXL_005", "FloorTiles_SDXL_006", "FloorTiles_SDXL_007",
    "FloorTiles_SDXL_008", "FloorTiles_SDXL_009", "FloorTiles_SDXL_010", "FloorTiles_SDXL_011", "Forest", "Forest101", "Forest102", "Forest103", "Forest104", "Forest105", "Forest106", "Forest107",
    "Forest108", "Forest109", "Forest110", "Forest111", "Forest112", "Forest113", "Forest114", "Forest115", "Forest116", "Forest2", "Forest3", "Forest4",
    "Forest5", "Forest6", "Forest7", "Forest8", "ForestFloor01", "ForestFloor02", "ForestFloor03", "GlossyBrownBrickedWall50", "GlossyBrownBrickedWall51", "GlossyBrownBrickedWall52", "GlossyBrownBrickedWall53", "GlossyBrownBrickedWall54",
    "GlossyBrownBrickedWall55", "GlossyBrownBrickedWall56", "GlossyBrownBrickedWall58", "GlossyBrownBrickedWall59", "GlossyBrownBrickedWall60", "GlossyBrownBrickedWall61", "GlossyBrownBrickedWall62", "GlossyBrownBrickedWall63", "GlossyBrownBrickedWall64", "GlossyBrownBrickedWall65", "GlossyBrownBrickedWall66", "GlossyBrownBrickedWall67",
    "GlossyBrownBrickedWall68", "GlossyBrownBrickedWall69", "GlossyBrownBrickedWall70", "GlossyBrownBrickedWall71", "GoldBlackWallwithPillar", "GoldWithVines2", "GoldishWall1", "GoldishWall2", "GoldishWall3", "GoldishWall4", "GoldishWall5", "GoldishWall6",
    "Grass11", "Grass12", "Grass13", "Grass14", "Grass15", "Grass16", "Grass17", "Grass40", "Grass40", "GrassMeadow101", "GrassMeadow102", "GrassMeadow103",
    "GrayFloor23", "GreyBricks45", "GreyFloor21", "GreyFloor26", "GreyFloor27", "GreyFloor29", "GreyFloorWall30", "GreyRocks40", "GreyRocks41", "GreyRocks42", "GreyWall101", "HauntedForest01",
    "HauntedForest02", "HauntedForest03", "HauntedForest04", "HauntedForest05", "HauntedForest06", "HauntedForest07", "HauntedForest08", "HauntedForest09", "HauntedForest10", "HauntedForest11", "HauntedForest12", "HauntedForest13",
    "HauntedForest14", "HauntedForest15", "HauntedForest16", "Hills1", "Hills2", "Hills3", "Hills4", "Hills5", "IceFloor22", "IceFloor24", "IceFloor28", "IceFloor31",
    "IceFloor32", "IceFloor33", "IceFloor37", "IceWall11", "IceWall12", "IceWall13", "IceWall21", "IceWall22", "IceWall23", "IceWall27", "IceWall29", "IrregularTiledFloorCeil01",
    "IrregularTiledFloorCeil02", "IrregularTiledFloorCeil03", "IrregularTiledFloorCeil04", "IrregularTiledFloorCeil05", "IrregularTiledFloorCeil06", "IrregularTiledFloorCeil07", "IrregularTiledFloorCeil08", "IrregularTiledFloorCeil09", "IrregularTiledFloorCeil10", "IrregularTiledFloorCeil11", "IrregularTiledFloorCeil12", "IrregularTiledFloorCeil13",
    "IrregularTiledFloorCeil14", "IrregularTiledFloorCeil15", "IvyWall1", "IvyWall2", "IvyWall3", "IvyWall4", "LargeBlackBricks2", "LargeRocks1", "MarbleFloor101", "MarbleFloor102", "MarbleFloor103", "MarbleFloor104",
    "MarbleFloor105", "MarbleWall1", "MetalBrick", "MistyMeadow1", "MistyMeadow2", "MistyMeadow3", "MistyMeadow4", "MossFloor100", "MossFloor101", "MossFloor102", "MossFloor103", "MossFloor104",
    "MossFloor105", "MossFloor106", "MossyFloor107", "MossyFloor108", "MossyFloor109", "MossyFloor110", "MossyFloor111", "MossyFloor112", "MossyFloor211", "MossyFloor212", "MossyFloor401", "MossyRocks40",
    "MossyRocks41", "MossyRocks42", "MossyTiles666", "MossyWall105", "MossyWall110", "MossyWall111", "MossyWall112", "Mountains1", "Mountains2", "Mountains3", "Mountains4", "NightSky1",
    "NightSky2", "NightSky3", "Nook1", "OrnateFloor100", "OrnateFloor101", "OrnateFloor102", "OrnateFloor104", "OrnateFloor105", "OrnateFloor106", "OrnateFloor107", "OrnateFloor108", "OrnateFloor109",
    "OrnateWall2", "Overcast1", "Overcast2", "PebbleWall1", "PebbleWall2", "PebbleWall3", "PlainRockWall", "PrnateFloor107", "RedAndGreyBricks1", "RedBricks100", "RedBricks101", "RedBricks40",
    "RedBricks41", "RedBricks42", "RedBricks43", "RedBricks44", "RedBricks45", "RedMArbleFLoor10", "RedMArbleFloor12", "RedMArbleFloor2", "RedMArbleFloor3", "RedMArbleFloor5", "RedMArbleFloor9", "RedMarbleFloor1",
    "RedMarbleFloor13", "RedMarbleFloor4", "RedMarbleFloor7", "RedMarbleFloor8", "RedRockMossy3", "RedishBricks101", "RedishRocks11", "RedishRockyWall1", "RedishVinesWall1", "Relief01", "Relief02", "Relief03",
    "Relief04", "Relief05", "Relief06", "Relief07", "Relief08", "Relief09", "Relief10", "Relief11", "Relief12", "Relief13", "Relief14", "Relief15",
    "Relief16", "Relief17", "Relief18", "Relief19", "Relief20", "Relief21", "Relief22", "Relief23", "Relief24", "RockWAll202", "RockWall201", "RockWall40",
    "RockWall_SDXL_001", "RockWall_SDXL_002", "RockWall_SDXL_003", "RockWall_SDXL_004", "RockWall_SDXL_005", "RockWall_SDXL_006", "RockWall_SDXL_007", "RockWall_SDXL_008", "RockWall_SDXL_009", "RockWall_SDXL_010", "RockWall_SDXL_011", "RockWall_SDXL_012",
    "RockWall_SDXL_013", "RockWall_SDXL_014", "RockWall_SDXL_015", "RockWall_SDXL_016", "RockWall_SDXL_017", "RockWall_SDXL_018", "RockWall_SDXL_019", "RockWall_SDXL_020", "RockWall_SDXL_021", "RoughCave01", "RoughCave02", "RoughCave03",
    "RoughCave04", "RoughCave05", "RoughCave06", "RoughCave07", "RoughCave08", "RoughCave09", "RoughCave10", "RoughCave11", "RoughCave12", "RoughCave13", "RoughCave14", "RoughCave15",
    "RoughCave16", "RoughCave17", "RoughCave18", "RoughCave19", "RoughCave20", "RoughCave21", "RoughCave22", "RoughCave23", "SKullWall2", "Sand1", "Sand10", "Sand11",
    "Sand12", "Sand13", "Sand14", "Sand15", "Sand16", "Sand2", "Sand3", "Sand4", "Sand5", "Sand6", "Sand7", "Sand8",
    "Sand9", "SeaWater1", "SeaWater2", "SeaWaterWall", "SkullWall1", "SkullWall5", "SkullWall7", "SkullWall8", "SmallBlackBricks40", "SmallBlackBricks41", "SmallBlackBricks43", "SmallBlackBricks44",
    "SmallBlackBricks45", "SmallBlackBricks46", "SmallBlackBricks47", "SmallBlackBricks48", "SmallRocks", "SpiderWall13", "SpiderWeb10", "SpiderWeb12", "SpiderWeb15", "SpiderWeb22", "SpiderWeb31", "SpiderWeb334",
    "SpiderWeb6", "StoneWall40", "StoneWall41", "StrangeGoldy1", "StrangeWall3", "VaultedCeiling1", "Water11", "Water12", "Water30", "Water31", "Water32", "WebbedFloor1",
    "WebbedFloor2", "WebbedFloor4", "WebbedFloor5", "WebbedFloor9", "WetBlackWall35", "WetBlackWall36", "WhiteWall24", "WhiteWall25", "WhiteWall26", "WhiteWall28", "Wood1", "Wood10",
    "Wood11", "Wood12", "Wood13", "Wood21", "Wood3", "Wood4", "Wood5", "Wood6", "Wood7", "Wood8", "Wood9", "marbleFloor106"
].sort();

/** Decals */
const DECAL_PAINTINGS = [

].sort();

/** Crests */

const DECAL_CRESTS = [
    "BearRug02", "BearRug03", "BearRug04", "BloodPuddleDecal03", "BloodPuddleDecal08", "BloodPuddleDecal10", "BookShelf02", "BookShelf03", "BookShelf04", "BookShelf05", "BookShelf06", "BookShelf07",
    "BookShelf08", "BookShelf09", "BookShelf10", "BookShelf11", "BookShelf12", "BookShelf13", "BookShelf14", "BookShelf15", "CrawlingSkelly1", "CrawlingSkelly2", "DancingSkelies1", "DancingSkelies2",
    "DancingSkelies3", "DemonSkull1", "DemonSkull2", "DemonSkull3", "DevilStatue01", "DevilStatue02", "DevilStatue03", "DevilStatue04", "DevilStatue05", "DevilStatue06", "DevilStatue07", "DevilStatue08",
    "DevilStatue09", "DevilStatue10", "Drain2_96", "Drain64", "DungeonDoor_Blocked", "DungeonDoor_Blocked2", "DungeonDoor_Blocked3", "DungeonDoor_Blocked4", "FlatPond2", "FlatPond3", "FlatPond4", "FlatPond5",
    "FlatPond6", "FlatPond7", "FloorGrille101", "FloorGrille102", "FloorGrille103", "FloorGrille104", "FloorGrille105", "FloorGrille106", "FloorGrille107", "FloorGrille108", "FloorGrille109", "FloorGrille110",
    "FloorGrille111", "FloorGrille112", "FloorGrille113", "Fungus1", "Fungus2", "Grate1_128", "Ivy1", "Ivy11", "Ivy11a", "Ivy12", "Ivy12a", "Ivy14",
    "Ivy15", "Ivy16", "Ivy17", "Ivy2", "Ivy3", "Ivy4", "KnightStatue", "KnightStatue101", "KnightStatue102", "KnightStatue103", "KnightStatue104", "KnightStatue105",
    "KnightStatue106", "KnightStatue107", "KnightStatue108", "KnightStatue109", "KnightStatue110", "KnightStatue2", "LaughingSkeleton1", "LaughingSkeleton2", "LaughingSkeleton3", "LaughingSkeleton4", "LaughingSkeleton5", "LaughingSkeleton6",
    "LeopardRug02", "LeopardRug03", "LeopardRug04", "LeopardRug05", "LeopardRug06", "Moss01", "Moss02", "Moss03", "Moss04", "Moss05", "Moss06", "Moss07",
    "Moss08", "Moss09", "Moss10", "Moss11", "Moss12", "Moss13", "Moss14", "Moss15", "PersianRug02", "PersianRug03", "PersianRug04", "PersianRug05",
    "PersianRug06", "PrayingSkeleton10", "PuddleDecal01", "PuddleDecal02", "PuddleDecal04", "PuddleDecal05", "PuddleDecal06", "PuddleDecal07", "PuddleDecal09", "PuddleDecal11", "PuddleDecal12", "PuddleDecal13",
    "PuddleDecal14", "RoundGrille96", "RustyFloorGrille_01", "RustyFloorGrille_02", "RustyFloorGrille_03", "RustyFloorGrille_04", "RustyFloorGrille_05", "RustyFloorGrille_06", "RustyFloorGrille_07", "RustyFloorGrille_08", "RustyFloorGrille_09", "RustyFloorGrille_10",
    "SatanRam1", "SatanRam10", "SatanRam2", "SatanRam3", "SatanRam4", "SatanRam5", "SatanRam6", "SatanRam7", "SatanRam8", "SatanRam9", "ShieldDecal01", "ShieldDecal02",
    "ShieldDecal03", "ShieldDecal04", "ShieldDecal05", "ShieldDecal06", "ShieldDecal07", "ShieldDecal08", "SittingSkelly1", "SittingSkelly11", "SittingSkelly12", "SittingSkelly13", "SittingSkelly14", "SittingSkelly2",
    "SittingSkelly21", "SittingSkelly23", "Skeleton121", "Skeleton20", "Skeleton21", "Skeleton23", "Skull11", "Skull20", "Skull21", "Skull301", "Skull302", "Skull303",
    "Skull304", "Skull305", "Skull306", "Skull307", "Skull308", "Skull309", "Skull310", "Skull311", "Skull312", "Skull313", "Skull314", "Skull315",
    "Skull316", "Skull317", "Skull318", "Skull319", "Skull320", "Skull321", "Skull322", "Skull401", "Skull402", "Skull403", "Skull404", "Skull405",
    "Skull406", "Skull407", "Skull408", "TempleDecal", "TigerRug02", "TigerRug03", "TigerRug04", "WallSkelly101", "WallSkelly102", "WallSkelly103", "WallSkelly104"
].sort();

//lights
const LIGHT_DECALS = [
    "Candelabra01", "Candelabra02", "Candelabra03", "Candelabra04", "Candelabra05", "Candelabra06", "Candelabra07", "Candelabra08", "Candelabra09", "Candelabra10", "Candelabra11", "Candelabra12",
    "Candelabra14", "Candelabra15", "Candelabra16", "Candelabra17", "Candelabra18", "Candle50", "Candle51", "Candle52", "Candle53", "Candle54", "Candle55", "Candle56",
    "Candle57", "Candle58", "Candle59", "Candle60", "Candle61", "Candle62", "Candle63", "Candle64", "Candle65", "Candle66", "Candle67", "Candle68",
    "Candle69", "Candle70", "Candle71", "Candle72", "DuaLLantern_001", "DuaLLantern_002", "DuaLLantern_003", "DuaLLantern_004", "DuaLLantern_005", "DuaLLantern_006", "DuaLLantern_007", "DuaLLantern_008",
    "DuaLLantern_009", "DuaLLantern_010", "DuaLLantern_011", "DuaLLantern_012", "DuaLLantern_013", "DuaLLantern_014", "DuaLLantern_015", "DuaLLantern_016", "DuaLLantern_017", "DuaLLantern_018", "DuaLLantern_019", "DuaLLantern_020",
    "DuaLLantern_021", "DuaLLantern_022", "DuaLLantern_023", "DuaLLantern_024", "DuaLLantern_025", "DuaLLantern_026", "DuaLLantern_027", "DuaLLantern_028", "DuaLLantern_029", "DuaLLantern_030", "DuaLLantern_031", "Fireplace01",
    "Fireplace02", "Fireplace03", "Fireplace04", "Fireplace05", "Fireplace06", "Fireplace07", "Fireplace08", "Fireplace09", "Fireplace10", "Fireplace101", "Fireplace102", "Fireplace103",
    "Fireplace104", "Fireplace105", "Fireplace106", "Fireplace107", "Fireplace11", "Fireplace12", "Fireplace13", "Fireplace14", "Fireplace15", "Fireplace201", "Fireplace202", "Fireplace203",
    "Fireplace204", "Fireplace205", "Fireplace206", "Fireplace207", "Fireplace208", "Fireplace209", "Fireplace210", "Fireplace211", "Fireplace212", "FluxLight101", "FluxLight102", "FluxLight103",
    "FluxLight104", "FluxLight105", "FluxLight106", "FluxLight107", "FluxLight108", "FluxLight109", "FluxLight111", "FluxLight111c", "FluxLight112", "FluxLight113", "FluxLight114", "FluxLight115",
    "FluxLight116", "FluxLight117", "FluxLight118", "FluxLight119", "FluxLight120", "FluxLight121", "FluxLight122", "FluxLight123", "FluxLight124", "FluxLight125", "FluxLight126", "FluxLight127",
    "FluxLight128", "FluxLight129", "Lamp40", "Lamp41", "Lamp42", "Lamp43", "Lamp44", "Lamp45", "Lamp46", "Lamp47", "Lamp48", "Lamp49",
    "Lamp50", "Lamp51", "Lamp52", "Lamp53", "Lights102", "Lights103", "Lights104", "Lights105", "Lights106", "Lights107", "Lights108", "Lights109",
    "Lights110", "Lights111", "Lights112", "Lights113", "Lights114", "Lights115", "Moon50", "Moon51", "Moon52", "Moon54", "Moon55", "Moon56",
    "Moon58", "Moon59", "Moon60", "Moon62", "Moon63", "SkullLantern50", "SkullLantern51", "SkullLantern52", "SkullLantern53", "SkullLantern54", "SkullLantern55", "SkullLantern56",
    "SkullLantern57", "SkullLantern58", "Sun1", "Sun2", "WallLamp10", "WallLamp11", "WallLamp12", "WallLamp13", "WallLamp14", "WallLamp15", "WallLamp16", "WallLamp17",
    "WallLamp18", "WallLamp19", "WallLamp20", "WallLamp31", "WallLamp32", "WallLamp33", "WallLamp34", "WallLamp35", "WallLamp9"
].sort();

const TRIGGER_DECALS = ["SmoothWallButton", "RockTriggerButton", "MarbleTriggerButton", "PurpleTriggerButton"];
const LAIR_DECALS = [];

/** hardcoded maxlair! */
const MAX_LAIR_COUNT = 82;
for (let i = 1; i <= MAX_LAIR_COUNT; i++) {
    LAIR_DECALS.push(`Lair${i.toString().padStart(2, "0")}`);
}
//console.info("LAIR_DECALS", LAIR_DECALS);

const CONTAINER_LIST = [];
for (const container in CONTAINER_ITEM_TYPE) {
    CONTAINER_LIST.push(container);
}
console.log("%cMAP for MazEditor loaded.", "color: #888");