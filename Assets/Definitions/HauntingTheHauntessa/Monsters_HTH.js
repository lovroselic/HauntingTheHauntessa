/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

/**
 * definition of:
 *      monsters
 *      scrolls
 *      other item types
 */

"use strict";
console.log("%cMonsters for HTH loaded.", "color: #888");

const GATE_TYPES = ["Open", "Closed", "Gold", "Silver", "Red", "Green", "Blue", "Up", "Down", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TYPES = ["Gold", "Silver", "Red", "Green", "Blue", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TEXTURES = ["Gold", "Silver", "RedMetal", "GreenMetal", "BlueMetal", "EmeraldTexture", "PurpleMetal", "PearlTexture", "CyanMetal", "OrangeMetal", "PinkMetal"];
const KEY_MATERIAL = ["gold", "silver", "redShine", "greenShine", "blueShine", "standard", "standard", "whiteShine", "cyanShine", "orangeShine", "pinkShine"];
const KEY_TYPE = {};

for (let [index, key] of KEY_TYPES.entries()) {
    KEY_TYPE[key] = new KeyTypeDefinition(key, `${key}Key`, key, KEY_TEXTURES[index], MATERIAL[KEY_MATERIAL[index]]);
}

const SCROLL_TYPE = [
    "Invisibility", "Cripple", "HalfLife", "Explode", "Luck", "Flight", "BoostWeapon", "BoostArmor", "MagicBoost",
    "DestroyWeapon", "DestroyArmor", "DrainMana", "FeatherFall",
];

const SHRINE_TYPE = {
    ManaCook1: {
        name: "ManaCook1",
        sprite: "ManaCook1",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 999,
        level: 1,
        text: "My mana boosting potions are beyond any compare. Pray and pay, 999 gold.",
        introduce: true,
        voice: "Female",
    },
    OilyBarba: {
        name: "OilyBarba",
        sprite: "OilyBarba",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 999,
        level: 1,
        text: "I am proficient in drawing blood with a simple hug. Send me your prayer and 999 gold and you'll be too.",
        introduce: true,
        voice: "Female2",
    },
    RedRaincoat: {
        name: "RedRaincoat",
        sprite: "RedRaincoat",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 999,
        level: 1,
        text: "I am proficient in defending from the rain. Can you see? Add your prayer and 999 gold and you'll be too.",
        introduce: true,
        voice: "Female",
    },
};

const ORACLE_TYPE = {
    Vagyma: {
        name: "Vagyma",
        sprite: "Vagyma",
        category: 'crest',
        voice: "Female",
        text: "What? Are you afraid to jump?.",
        interactionCategory: "oracle",
    },
    Jumpy: {
        name: "Jumpy",
        sprite: "Jumpy",
        category: 'crest',
        voice: "FemaleLow2",
        text: "You can't fall off the ledge, but you can jump from it. Not that that's healthy.",
        interactionCategory: "oracle",
    },
    CuteDemon: {
        name: "CuteDemon",
        sprite: "CuteDemon",
        category: 'crest',
        voice: "FemaleLow",
        text: "Did you notice? Hauntessa opened her spawn lair portals in our castle. We are not safe. Help us, Princess",
        interactionCategory: "oracle",
    },
    StandingFashionGuard: {
        name: "StandingFashionGuard",
        sprite: "StandingFashionGuard",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Without certificates of readiness proving you're properly clad, a responsible ruler, and proficient in weapons, you're going nowhere.",
        interactionCategory: "oracle",
    },
    PrincessThrone: {
        name: "PrincessThrone",
        sprite: "PrincessThrone",
        category: 'crest',
        voice: "Princess",
        text: "This is my throne, yes. But I don't have time to sit. My ass yearns for adventure.",
        interactionCategory: "oracle",
    },
    Darksy: {
        name: "Darksy",
        sprite: "Darksy",
        category: 'crest',
        voice: "Female",
        text: "You can't expect to just run out towards adventure. You need to get ready first.",
        interactionCategory: "oracle",
    },
    PrincessBed: {
        name: "PrincessBed",
        sprite: "PrincessBed",
        category: 'crest',
        voice: "Princess",
        text: "This is my bed, yes. But I don't have time to sleep. Adventure awaits.",
        interactionCategory: "oracle",
    },
};

const GOLD_ITEM_TYPE = {
    GoldSphere: {
        name: "GoldSphere",
        category: "gold",
        element: "BALL",
        scale: 1.0 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        minVal: 100,
        maxVal: 150,
        value: 150,
        material: MATERIAL.gold,
    },
    GoldBar: {
        name: "GoldBar",
        category: "gold",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Gold",
        minVal: 50,
        maxVal: 100,
        value: 100,
        material: MATERIAL.gold,
    },
    SilverBar: {
        name: "SilverBar",
        category: "gold",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Silver",
        minVal: 25,
        maxVal: 50,
        value: 50,
        material: MATERIAL.silver,
    },
    GoldCube: {
        name: "GoldCube",
        category: "gold",
        element: "CUBE_CENTERED",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        minVal: 10,
        maxVal: 25,
        value: 25,
        material: MATERIAL.gold,
    },
    Coins: {
        name: "Coins",
        category: "gold",
        element: "COINS",
        scale: 1.5 / 2 ** 0,
        glueToFloor: true,
        texture: "Coins",
        minVal: 10,
        maxVal: 25,
        value: 10,
        material: MATERIAL.gold,
    },
    RedGem: {
        name: "RedGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "Red",
        minVal: 100,
        maxVal: 250,
        value: 250,
        material: MATERIAL.standard,
    },
    GreenGem: {
        name: "GreenGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "GreenMetal",
        minVal: 250,
        maxVal: 500,
        value: 500,
        material: MATERIAL.standard,
    },
    BlueGem: {
        name: "BlueGem",
        category: "gold",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "BlueMetal",
        minVal: 500,
        maxVal: 1000,
        value: 1000,
        material: MATERIAL.standard,
    },
};

const SKILL_ITEM_TYPE = {
    Magic: {
        name: "Magic",
        category: "skill",
        which: "magic",
        element: "PENTAGRAM",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Red2",
        inventorySprite: "SkillFireball",
        material: MATERIAL.redShine,
    },
    Attack: {
        name: "Attack",
        category: "skill",
        which: "attack",
        element: "STING",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Sting",
        inventorySprite: "SkillKick",
        material: MATERIAL.silver,
    },
    Heart: {
        name: "Heart",
        category: "status",
        which: "health",
        element: "HEART",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "Red",
        inventorySprite: "HeartSkill",
        material: MATERIAL.redShine,
    },
    Defense: {
        name: "Defense",
        category: "skill",
        which: "defense",
        element: "SHIELD",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "ScrapedMetal",
        inventorySprite: "SkillShield",
        material: MATERIAL.silver,
    },
    Mana: {
        name: "Mana",
        category: "status",
        which: "mana",
        element: "MAGIC_FLASK",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "MagicFlask",
        inventorySprite: "ManaIncSkill",
        material: MATERIAL.standard,
    },
};

const CONTAINER_ITEM_TYPE = {
    TreasureChest: {
        name: "TreasureChest",
        category: "chest",
        element: "TREASURE_CHEST",
        scale: 1.5 / 2 ** 3,
        glueToFloor: true,
        texture: "TreasureChest",
        material: MATERIAL.standard,
        rotateToNorth: 0,
    },
    Wardrobe: {
        name: "Wardrobe",
        category: "chest",
        element: "WARDROBE",
        scale: 1.23 / 2 ** 2,
        glueToFloor: true,
        texture: "Wardrobe",
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    Barrel: {
        name: "Barrel",
        category: "chest",
        element: "BARREL",
        scale: 1.15 / 2 ** 1,
        glueToFloor: true,
        texture: "Barrel",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Barrel_459: {
        name: "Barrel_459",
        category: "chest",
        element: "BARREL",
        scale: 1.04 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_459",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_460: {
        name: "Barrel_460",
        category: "chest",
        element: "BARREL",
        scale: 1.01 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_460",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_461: {
        name: "Barrel_461",
        category: "chest",
        element: "BARREL",
        scale: 0.89 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_461",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_462: {
        name: "Barrel_462",
        category: "chest",
        element: "BARREL",
        scale: 1.15 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_462",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_463: {
        name: "Barrel_463",
        category: "chest",
        element: "BARREL",
        scale: 1.0 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_463",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_464: {
        name: "Barrel_464",
        category: "chest",
        element: "BARREL",
        scale: 1.08 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_464",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_465: {
        name: "Barrel_465",
        category: "chest",
        element: "BARREL",
        scale: 1.03 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_465",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_466: {
        name: "Barrel_466",
        category: "chest",
        element: "BARREL",
        scale: 1.02 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_466",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_467: {
        name: "Barrel_467",
        category: "chest",
        element: "BARREL",
        scale: 1.04 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_467",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_468: {
        name: "Barrel_468",
        category: "chest",
        element: "BARREL",
        scale: 1.18 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_468",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_469: {
        name: "Barrel_469",
        category: "chest",
        element: "BARREL",
        scale: 1.06 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_469",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_470: {
        name: "Barrel_470",
        category: "chest",
        element: "BARREL",
        scale: 1.17 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_470",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_471: {
        name: "Barrel_471",
        category: "chest",
        element: "BARREL",
        scale: 1.05 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_471",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_472: {
        name: "Barrel_472",
        category: "chest",
        element: "BARREL",
        scale: 1.07 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_472",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_473: {
        name: "Barrel_473",
        category: "chest",
        element: "BARREL",
        scale: 0.8 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_473",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_474: {
        name: "Barrel_474",
        category: "chest",
        element: "BARREL",
        scale: 1.0 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_474",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_475: {
        name: "Barrel_475",
        category: "chest",
        element: "BARREL",
        scale: 0.95 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_475",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_476: {
        name: "Barrel_476",
        category: "chest",
        element: "BARREL",
        scale: 0.89 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_476",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_477: {
        name: "Barrel_477",
        category: "chest",
        element: "BARREL",
        scale: 1.15 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_477",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_478: {
        name: "Barrel_478",
        category: "chest",
        element: "BARREL",
        scale: 1.03 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_478",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_479: {
        name: "Barrel_479",
        category: "chest",
        element: "BARREL",
        scale: 0.89 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_479",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_480: {
        name: "Barrel_480",
        category: "chest",
        element: "BARREL",
        scale: 1.0 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_480",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_481: {
        name: "Barrel_481",
        category: "chest",
        element: "BARREL",
        scale: 1.16 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_481",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_482: {
        name: "Barrel_482",
        category: "chest",
        element: "BARREL",
        scale: 0.86 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_482",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_483: {
        name: "Barrel_483",
        category: "chest",
        element: "BARREL",
        scale: 1.06 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_483",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_484: {
        name: "Barrel_484",
        category: "chest",
        element: "BARREL",
        scale: 1.09 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_484",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_485: {
        name: "Barrel_485",
        category: "chest",
        element: "BARREL",
        scale: 0.86 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_485",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel_486: {
        name: "Barrel_486",
        category: "chest",
        element: "BARREL",
        scale: 0.8 / (2 ** 1),
        glueToFloor: true,
        texture: "BarrelTexture_486",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Barrel2: {
        name: "Barrel2",
        category: "chest",
        element: "BARREL2",
        scale: 1.8 / 2 ** 4,
        glueToFloor: true,
        texture: "Barell2",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Barell3: {
        name: "Barell3",
        category: "chest",
        element: "BARELL3",
        scale: 1.0 / 2 ** 8,
        glueToFloor: true,
        texture: "Barell3",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Crate: {
        name: "Crate",
        category: "chest",
        element: "CRATE",
        scale: 1.25 / 2 ** 3,
        glueToFloor: true,
        texture: "Crate",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Crate3: {
        name: "Crate3",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.45 / 2 ** 4,
        glueToFloor: true,
        texture: "Crate3",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    Closet: {
        name: "Closet",
        category: "chest",
        element: "CLOSET",
        scale: 1.75 / 2 ** 1,
        glueToFloor: true,
        texture: "closet_BaseColor",
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    BookShelf: {
        name: "BookShelf",
        category: "chest",
        element: "BOOKSHELF",
        scale: 1.4 / 2 ** 5,
        glueToFloor: true,
        texture: "BookShelf_baseColor",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    PirateChest: {
        name: "PirateChest",
        category: "chest",
        element: "PIRATE_CHEST",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "PirateChest_baseColor",
        material: MATERIAL.standardShine,
        rotateToNorth: Math.PI,
    },
    PlainCloset: {
        name: "PlainCloset",
        category: "chest",
        element: "CLOSET4",
        scale: 1.2 / 2 ** 2,
        glueToFloor: true,
        texture: "Closet4_baseColor",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
    },
    IronChest: {
        name: "IronChest",
        category: "chest",
        element: "IRON_CHEST",
        scale: 1.2 / 2 ** 2,
        glueToFloor: true,
        texture: "IronChest_base",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI,
    },
    MetalCrate50: {
        name: "MetalCrate50",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture50",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate51: {
        name: "MetalCrate51",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.13 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture51",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate52: {
        name: "MetalCrate52",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.3 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture52",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate53: {
        name: "MetalCrate53",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.15 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture53",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate54: {
        name: "MetalCrate54",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.29 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture54",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate50: {
        name: "WoodenCrate50",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.05 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture50",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate51: {
        name: "WoodenCrate51",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.22 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture51",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate52: {
        name: "WoodenCrate52",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.48 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture52",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate53: {
        name: "WoodenCrate53",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.18 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture53",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate54: {
        name: "WoodenCrate54",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.22 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture54",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate55: {
        name: "WoodenCrate55",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture55",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate56: {
        name: "WoodenCrate56",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.25 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture56",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate57: {
        name: "WoodenCrate57",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.26 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture57",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate58: {
        name: "WoodenCrate58",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.18 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture58",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate59: {
        name: "WoodenCrate59",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.37 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture59",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate60: {
        name: "WoodenCrate60",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.36 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture60",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate61: {
        name: "WoodenCrate61",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.05 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture61",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate421: {
        name: "MetalCrate421",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.34 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture421",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate422: {
        name: "MetalCrate422",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.42 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture422",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate423: {
        name: "MetalCrate423",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.47 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture423",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate424: {
        name: "MetalCrate424",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.39 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture424",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    MetalCrate425: {
        name: "MetalCrate425",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.03 / (2 ** 4),
        glueToFloor: true,
        texture: "MetalCrateTexture425",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate426: {
        name: "WoodenCrate426",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.12 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture426",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate427: {
        name: "WoodenCrate427",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.28 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture427",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate428: {
        name: "WoodenCrate428",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.16 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture428",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate429: {
        name: "WoodenCrate429",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.3 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture429",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate430: {
        name: "WoodenCrate430",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.04 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture430",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate431: {
        name: "WoodenCrate431",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.2 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture431",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate432: {
        name: "WoodenCrate432",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.29 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture432",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate433: {
        name: "WoodenCrate433",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.14 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture433",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate434: {
        name: "WoodenCrate434",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.23 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture434",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate435: {
        name: "WoodenCrate435",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.0 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture435",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate436: {
        name: "WoodenCrate436",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.12 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture436",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate437: {
        name: "WoodenCrate437",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.33 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture437",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate438: {
        name: "WoodenCrate438",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.15 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture438",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate439: {
        name: "WoodenCrate439",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.13 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture439",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate440: {
        name: "WoodenCrate440",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.04 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture440",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate441: {
        name: "WoodenCrate441",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.07 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture441",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    WoodenCrate442: {
        name: "WoodenCrate442",
        category: "chest",
        element: "FRAGILE_CRATE",
        scale: 1.48 / (2 ** 4),
        glueToFloor: true,
        texture: "WoodenCrateTexture442",
        material: MATERIAL.standardShine,
        rotateToNorth: 0
    },
    Chest10: {
        name: "Chest10",
        category: "chest",
        element: "CHEST10",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "Chest10",
        material: MATERIAL.standard,
        rotateToNorth: Math.PI,
    },

};

const DOOR_TYPE = {
    Common: {
        name: "Common",
        color: null,
        locked: false,
        texture: "WoodenGate1",
        element: "CUBE_SM",
        material: MATERIAL.standardShine,
    },
};

const COMMON_ITEM_TYPE = {
    BlueBounceball: {
        name: "BlueBounceball",
        category: 'missile',
        element: "BALL",
        scale: 1.5 / 2 ** 4,
        texture: "BluBallTexture",
        moveSpeed: 8.0,
        bounce3D: true,
        lightColor: "#5e9ae6", //#1155AA
        material: MATERIAL.blueFluence,
        explosionType: BlueExplosion,
        construct: Blue3D_Bouncer,
        collectible: false,
    },
    Bounceball: {
        name: "Bounceball",
        category: 'missile',
        element: "BALL",
        scale: 1.5 / 2 ** 4,
        texture: "GreenMetal",
        moveSpeed: 8.0,
        bounce3D: false,
        lightColor: "#006600",
        material: MATERIAL.greenFluence,
        explosionType: GreenMetalExplosion,
        construct: BouncingMissile,
        collectible: false,
    },
    RedFireball: {
        name: "RedFireball",
        category: 'missile',
        element: "BALL",
        scale: 1.5 / 2 ** 4,
        texture: "RedFireballTexture",
        moveSpeed: 8.0,
        bounce3D: false,
        lightColor: "#CC0000",
        material: MATERIAL.redShine,
        explosionType: ParticleExplosion,
        construct: Missile,
        collectible: false,
    },
    Orb: {
        name: "Orb",
        category: 'missile',
        element: "BALL",
        scale: 1.9 / 2 ** 5,
        texture: "FireballTexture",
        moveSpeed: 8.0,
        bounce3D: false,
        lightColor: "#FF7700",
        material: MATERIAL.fire,
        explosionType: ParticleExplosion,
        construct: BouncingMissile,
        collectible: true,
    },
    Scroll: {
        name: "Scroll",
        category: "scroll",
        element: "SCROLL",
        scale: 1.5 / 2 ** 4,
        glueToFloor: true,
        texture: "ScrollTexture",
        material: MATERIAL.paper,
    },
};

const MONSTER_TYPE = {
    Bat: {
        name: "Bat",
        model: "Bat",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 2,
        attack: 1,
        magic: 0,
        defense: 0,
        xp: 1,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    RedGoldBat: {
        name: "RedGoldBat",
        texture: "RedGoldBat",
        model: "Bat",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 4,
        attack: 2,
        magic: 0,
        defense: 0,
        xp: 2,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    DarkRedBat: {
        name: "DarkRedBat",
        texture: "DarkRedBat",
        model: "Bat",
        scale: 1.3 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 5,
        attack: 3,
        magic: 0,
        defense: 0,
        xp: 3,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.05,
        material: MATERIAL.standard,
    },
    Spider: {
        name: "Spider",
        model: "Spider",
        scale: 1.45 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.4,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 6,
        attack: 4,
        magic: 0,
        defense: 0,
        xp: 4,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["follower"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    SpiderGreen: {
        name: "SpiderGreen",
        texture: "SpiderGreen",
        model: "Spider",
        scale: 1.4 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.4,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 8,
        attack: 6,
        magic: 1,
        defense: 1,
        xp: 5,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    SpiderRed: {
        name: "SpiderRed",
        texture: "SpiderRed",
        model: "Spider",
        scale: 1.35 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.4,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 8,
        magic: 2,
        defense: 2,
        xp: 10,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.15,
        material: MATERIAL.standard,
    },
    /////////////
    MissGalaxy: {
        name: "MissGalaxy",
        model: "MissGalaxy",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        //
        mana: 31,
        health: 10,
        attack: 98,
        magic: 5,
        defense: 0,
        xp: 99,
        //
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [17, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    MissGalaxyGreen: {
        name: "MissGalaxyGreen",
        texture: "MissGalaxyGreen",
        model: "MissGalaxy",
        scale: 0.8 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        //
        mana: 31,
        health: 910,
        attack: 8,
        magic: 5,
        defense: 3,
        xp: 99,
        //
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [17, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.RedFireball,
    },

    Dragon: {
        name: "Dragon",
        model: "Dragon",
        scale: 1.9 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        //
        inventory: GOLD_ITEM_TYPE.GoldBar,

        //
        mana: 1,
        health: 1,
        attack: 920,
        magic: 20,
        defense: 5,
        xp: 99,
        //
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
    },

};

const HERO_TYPE = {
    ThePrincess: {
        name: "ThePrincess",
        model: "Princess",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        material: MATERIAL.standard,
        moveSpeed: 2.0
    }
};

/**
 * interaction entities, items and objects
 */

const INTERACTION_OBJECT = {
    Crown: {
        name: "Crown",
        category: "interaction_item",
        element: "CROWN",
        scale: 1.7 / 2 ** 2,
        glueToFloor: true,
        texture: "Gold",
        material: MATERIAL.gold,
        inventorySprite: "Crown",
        text: "This is my crown. I should not take it with me on adventure. Best someone keeps it safe for me."
    },
    Apple: {
        name: "Apple",
        category: "interaction_item",
        element: "APPLE",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Apple_BaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Apple",
        text: "Oh, it's an apple."
    },
    GoldCoin: {
        name: "GoldCoin",
        category: "interaction_item",
        element: "COIN",
        scale: 1.8 / 2 ** 8,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldCoin",
        material: MATERIAL.gold,
        text: "Face on the coin looks like my mother."
    },
    Cake: {
        name: "Cake",
        category: "action_item",
        which: "health",
        element: "CAKE",
        scale: 1 / 2 ** 2,
        glueToFloor: true,
        texture: "cake_basecolor",
        material: MATERIAL.standard,
        inventorySprite: "Cake",
        text: "Cake? Very healthy."
    },
    Steak: {
        name: "Steak",
        category: "action_item",
        which: "health",
        element: "STEAK",
        scale: 1.8 / 2 ** 3,
        glueToFloor: true,
        texture: "SteakTexture",
        material: MATERIAL.standard,
        inventorySprite: "Steak",
        text: "Steak? A yummy vegetarian meat."
    },
    BeerHealth: {
        name: "BeerHealth",
        category: "action_item",
        which: "health",
        element: "CAN",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "CanTexture",
        material: MATERIAL.standard,
        inventorySprite: "BeerHealth",
        text: "Beer always helps me."
    },
    Champagne: {
        name: "Champagne",
        category: "action_item",
        which: "health",
        element: "WINE",
        scale: 1.5 / 2 ** 7,
        glueToFloor: true,
        texture: "WineBottle",
        material: MATERIAL.standard,
        rotateToNorth: 0,
        inventorySprite: "Champagne",
        text: "Expensive champagne. This will improve my spirits."
    },
    HealthBox: {
        name: "HealthBox",
        category: "action_item",
        which: "health",
        element: "FRAGILE_CRATE",
        scale: 1.5 / 2 ** 5,
        glueToFloor: true,
        texture: "HealthBoxtexture",
        material: MATERIAL.standardShine,
        rotateToNorth: 0,
        inventorySprite: "HealthBox",
        text: "A full box of healing. I should save it for dark times."
    },
    Orb: {
        name: "Orb-FireBall",
        category: "action_item",
        which: "mana",
        element: "BALL",
        scale: 1.5 / 2 ** 5,
        glueToFloor: true,
        texture: "FireballTexture",
        material: MATERIAL.fire,
        inventorySprite: "FireBall",
        text: "Spent missile. Maybe I can squeeze some magic out."
    },
    Sword: {
        name: "Sword",
        category: "interaction_item",
        element: "STING",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Sting",
        material: MATERIAL.silver,
        inventorySprite: "Sword",
        text: "I'll put that sword in the bag."
    },
    Dagger: {
        name: "Dagger",
        category: "interaction_item",
        element: "DAGGER",
        scale: 1.25 / 2 ** 5,
        glueToFloor: true,
        texture: "Dagger_Base_Color",
        material: MATERIAL.silver,
        inventorySprite: "Dagger",
        text: "It looks very sharp."
    },
};

const MOVABLE_INTERACTION_OBJECT = {
    RoastChicken: {
        /** health */
        name: "RoastChicken",
        category: "action_item",
        which: "health",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RoastChicken",
        text: "Yummy chick. Store for later."
    },
    RoastPig: {
        /** health */
        name: "RoastPig",
        category: "action_item",
        which: "health",
        model: "Pig",
        scale: 1 / 2 ** 3,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RoastPig",
        text: "Here piggy piggy piggy.",
    },
    GreenBat: {
        /** mana */
        name: "GreenBat",
        category: "action_item",
        which: "mana",
        model: "Bat",
        scale: 1.15 / 2 ** 4,
        rotateToNorth: Math.PI,
        fly: 0.5,
        midHeight: 0.0,
        moveSpeed: 1.25,
        texture: "GreenBat",
        material: MATERIAL.greenShine,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "GreenBat",
        text: "Reeks with magic. Let's nibble.",
    },
};

const INTERACTION_ITEM = {
    //skillitems
    Attack: {
        name: "Attack",
        category: "skill",
        inventorySprite: "SkillKick",
        which: "attack",
        level: 1,
    },
    Defense: {
        name: "Defense",
        category: "skill",
        inventorySprite: "SkillShield",
        which: "defense",
        level: 1,
    },
    Magic: {
        name: "Magic",
        category: "skill",
        inventorySprite: "SkillFireball",
        which: "magic",
        level: 1,
    },
    HeartSkill: {
        name: "HeartSkill",
        category: "status",
        inventorySprite: "HeartSkill",
        which: "health",
        level: 1,
    },
    ManaSkill: {
        name: "ManaSkill",
        category: "status",
        inventorySprite: "ManaSkill",
        which: "mana",
        level: 1,
    },

    //keys
    GoldKey: {
        name: "GoldKey",
        category: "key",
        inventorySprite: "GoldKey",
        color: "Gold"
    },
    SilverKey: {
        name: "SilverKey",
        category: "key",
        inventorySprite: "SilverKey",
        color: "Silver"
    },
    EmeraldKey: {
        name: "EmeraldKey",
        category: "key",
        inventorySprite: "EmeraldKey",
        color: "Emerald"
    },
    PearlKey: {
        name: "PearlKey",
        category: "key",
        inventorySprite: "PearlKey",
        color: "Pearl"
    },
    PurpleKey: {
        name: "PurpleKey",
        category: "key",
        inventorySprite: "PurpleKey",
        color: "Purple"
    },
    GreenKey: {
        name: "GreenKey",
        category: "key",
        inventorySprite: "GreenKey",
        color: "Green"
    },
    BlueKey: {
        name: "BlueKey",
        category: "key",
        inventorySprite: "BlueKey",
        color: "Blue"
    },
    RedKey: {
        name: "RedKey",
        category: "key",
        inventorySprite: "RedKey",
        color: "Red"
    },
    HeartSkill: {
        name: "HeartSkill",
        category: "status",
        inventorySprite: "HeartSkill",
        which: "health",
        level: 1,
    },
    GoldCoin: {
        name: "GoldCoin",
        category: "interaction_item",
        inventorySprite: "GoldCoin",
        text: "Face on the coin looks like my mother."
    },

    //items
    Apple: {
        name: "Apple",
        category: "interaction_item",
        inventorySprite: "Apple",
        text: "Oh, it's an apple.",
    },
    BrownLatexBootyShorts: {
        name: "BrownLatexBootyShorts",
        category: "interaction_item",
        inventorySprite: "BrownLatexBootyShorts",
        text: "My tight shorts.",
    },
    BlueLatexTop: {
        name: "BlueLatexTop",
        category: "interaction_item",
        inventorySprite: "BlueLatexTop",
        text: "I look fabolous in this. As always.",
    },
    BrownLeatherBoots: {
        name: "BrownLeatherBoots",
        category: "interaction_item",
        inventorySprite: "BrownLeatherBoots",
        text: "My boots. Sharp heels.",
    },
    PinkDuster: {
        name: "PinkDuster",
        category: "interaction_item",
        inventorySprite: "PinkDuster",
        text: "A duster. For cleaning dust. That is not my job.",
    },
    Rose: {
        name: "Rose",
        category: "interaction_item",
        inventorySprite: "Rose",
        text: "Beautiful red rose.",
    },
    BlackLatexGloves: {
        name: "BlackLatexGloves",
        category: "interaction_item",
        inventorySprite: "BlackLatexGloves",
        text: "Sexy gloves.",
    },
    Crown: {
        name: "Crown",
        category: "interaction_item",
        inventorySprite: "Crown",
        text: "This is my drown. My! Crown!",
    },
    GoldenScepter: {
        name: "GoldenScepter",
        category: "interaction_item",
        inventorySprite: "GoldenScepter",
        text: "My specter. A symbol of my power. Or is that the heels?",
    },
    Document: {
        name: "Document",
        category: "interaction_item",
        inventorySprite: "Document",
        text: "This proves I am able.",
    },
    Sword: {
        name: "Sword",
        category: "interaction_item",
        inventorySprite: "Sword",
        text: "Very good balance. But I prefer my heels."
    },
    BattleAxe: {
        name: "BattleAxe",
        category: "interaction_item",
        inventorySprite: "BattleAxe",
        text: "Oooh. Head chopping utility."
    },
    Mace: {
        name: "Mace",
        category: "interaction_item",
        inventorySprite: "Mace",
        text: "For bashing heads."
    },
    DumbBell: {
        name: "DumbBell",
        category: "interaction_item",
        inventorySprite: "DumbBell",
        text: "Heavy. I am building muscles as we speak."
    },
    GlassOfWine: {
        name: "GlassOfWine",
        category: "interaction_item",
        inventorySprite: "GlassOfWine",
        text: "Great vintage. But I must not indulge."
    },
    Wine: {
        name: "Wine",
        category: "interaction_item",
        inventorySprite: "Wine",
        text: "Red wine. Fancy a sip?"
    },
    Dagger: {
        name: "Dagger",
        category: "interaction_item",
        inventorySprite: "Dagger",
        text: "Sharp?"
    },
    BlackLeatherBoot: {
        name: "BlackLeatherBoot",
        category: "interaction_item",
        inventorySprite: "BlackLeatherBoot",
        text: "Sexy boot, missing a pair. But last year's fashion."
    },
    GlassOfBeer: {
        name: "GlassOfBeer",
        category: "interaction_item",
        inventorySprite: "GlassOfBeer",
        text: "Cheers mates. To victory!"
    },
    Beer: {
        name: "Beer",
        category: "interaction_item",
        inventorySprite: "Beer",
        text: "A cold one."
    },
};

const INTERACTION_ENTITY = {
    Axxa: {
        name: "Axxa",
        sprite: "Axxa",
        category: 'crest',
        voice: "Female2",
        wants: ["GlassOfBeer", "GlassOfBeer", "GlassOfBeer"],
        gives: "BattleAxe",
        text: {
            intro: "The battle fierce, my throat's on fire! Three beers will quench my fierce desire!",
            progress: "Not enough! I still thirst for more. Fetch another, maybe four!",
            conclusion: "At last relieved, refreshed and free! Take my axe, you've earned this fee."
        }
    },
    DumbBelle: {
        name: "DumbBelle",
        sprite: "DumbBelle",
        category: 'crest',
        voice: "Female",
        wants: ["Beer", "Beer"],
        gives: "DumbBell",
        text: {
            intro: "Training hard and feeling dry! Two cold beers would ease my sigh.",
            progress: "One beer down, I'm still quite parched. Bring another, quickly march!",
            conclusion: "Refreshing sips, oh, that's swell! Now, here's your prize, a fine dumbbell."
        }
    },
    Cousin: {
        name: "Cousin",
        sprite: "Cousin",
        category: 'crest',
        voice: "Princess",
        wants: ["BlackLeatherBoot", "BlackLeatherBoot"],
        gives: "BlueLatexTop",
        text: {
            intro: "My cute, mute young cousin. She is stealling my famous outfit again. Maybe I can bribe her with some fashionable boots.",
            progress: "We are going in the right direction, but she has two legs, don't you see?",
            conclusion: "My famous blue latex top is finally with me. I am almost ready to go out on the adventure."
        }
    },
    MissRose: {
        name: "MissRose",
        sprite: "MissRose",
        category: 'crest',
        voice: "Female",
        wants: ["Rose", "Rose", "Rose"],
        gives: "GlassOfWine",
        text: {
            intro: "Slow down, dear, and join me here. Roses bloom, let's share some cheer!",
            progress: "A lovely start, but roses few. Bring some more, and I'll toast with you!",
            conclusion: "Ah, fragrant roses, joy divine! Sit with me, let's share some wine."
        }
    },
    Drinker: {
        name: "Drinker",
        sprite: "Drinker",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Wine", "GlassOfWine"],
        gives: "BlackLeatherBoot",
        text: {
            intro: "My glass runs dry, my spirits low! Bring me drinks, and off you'll go!",
            progress: "That's quite nice, but still too few. Another drink will get me through!",
            conclusion: "Oh, delightful, you've saved the day! Take this boot, the other's gone astray."
        }
    },

    TheMaid: {
        name: "TheMaid",
        sprite: "TheMaid",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["BlackLatexGloves", "PinkDuster"],
        gives: "BrownLatexBootyShorts",
        text: {
            intro: "Oh dear me, my gear's astray. Find my gloves and duster today! Do help me tidy up this mess, I'll help you find your shorts, no less!",
            progress: "One item's found, that's quite the start, find the rest to ease my heart!",
            conclusion: "At last, all clean, oh what delight! Here are your shorts, they're yours by right!"
        }
    },
    GateKeeper: {
        name: "GateKeeper",
        sprite: "GateKeeper",
        category: 'crest',
        voice: "Female2",
        wants: ["Document", "Document", "Document"],
        gives: "GoldKey",
        text: {
            intro: "Princess brave, your path awaits, but first your papers seal your fate. Three proofs I'll see, three tests to pass, without them here you'll never pass!",
            progress: "One step closer, that's the way. Yet you need more proof today!",
            conclusion: "You've passed each test, proven true. Take this key, adventure awaits you!"
        }
    },
    CuteTank: {
        name: "CuteTank",
        sprite: "CuteTank",
        category: 'crest',
        voice: "Female2",
        wants: ["Sword", "BattleAxe", "Mace"],
        gives: "Document",
        text: {
            intro: "Greetings Princess, brave and true, show your skill, what weapons do! Steel in hand and courage high, prove your worth, let blades fly!",
            progress: "Impressive swing, but hold your stance. Another weapon, another chance!",
            conclusion: "Your strength is proven, bold and steady, for your adventure you are ready."
        }
    },
    FashionGuard: {
        name: "FashionGuard",
        sprite: "FashionGuard",
        category: 'crest',
        voice: "Female",
        wants: ["BrownLatexBootyShorts", "BlueLatexTop", "BrownLeatherBoots"],
        gives: "Document",
        text: {
            intro: "Hold it there. You can't go adventuring dressed like that. Bring me a proper adventuring outfit, then we'll talk.",
            progress: "Better, better, almost there. You're still missing something to wear!",
            conclusion: "Now that's what I'm talking about. Cute yet fierce. Here's your certificate of adventure readiness."
        }
    },
    QueenMother: {
        name: "QueenMother",
        sprite: "QueenMother",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Crown", "GoldenScepter"],
        gives: "Document",
        text: {
            intro: "Oh dear daughter, adventure's sweet, but royal gear you must retreat! Your crown and scepter I'll safely guard, adventure waits beyond the yard.",
            progress: "Well begun, my little dove, yet one more treasure's still above!",
            conclusion: "Perfectly done, adventure calls! This royal note unlocks the walls."
        }
    },
};

const INTERACTION_SHRINE = {
    Muscula: {
        name: "Muscula",
        sprite: "Muscula",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["DumbBell", "DumbBell"],
        gives: "Attack",
        level: 2,
        text: {
            intro: "Princess, dare you train with me? Prove your strength, bring dumbbells, let's see!",
            progress: "Good start, Princess, muscles in sight! But one more dumbbell sets you right.",
            conclusion: "Impressive strength, Princess, fierce and bright! Now go and conquer every fight!"
        }
    }

};

const INTERACTOR = {

};

//container content
const CONTAINER_CONTENT_TYPES = { GOLD_ITEM_TYPE, SKILL_ITEM_TYPE, INTERACTION_ITEM };
const CONTAINER_CONTENT_LIST = stringifyObjectList(CONTAINER_CONTENT_TYPES);
const TRIGGER_ACTIONS = ["HOLE->toEmpty", "WALL->toEmpty", "EMPTY->toWall"];
const TRAP_ACTIONS = {
    Missile: [
        "RedFireball",
        "Bounceball"
    ],
    Spawn: listObjectKeys(MONSTER_TYPE)
};
const TRAP_ACTION_LIST = listObjectKeys(TRAP_ACTIONS);