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
console.log("%cMonsters for CastleHaunt2 loaded.", "color: #888");

const GATE_TYPES = ["Open", "Closed", "Gold", "Silver", "Red", "Green", "Blue", "Up", "Down", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TYPES = ["Gold", "Silver", "Red", "Green", "Blue", "Emerald", "Purple", "Pearl", "Cyan", "Orange", "Pink"];
const KEY_TEXTURES = ["Gold", "Silver", "RedMetal", "GreenMetal", "BlueMetal", "EmeraldTexture", "PurpleMetal", "PearlTexture", "CyanMetal", "OrangeMetal", "PinkMetal"];
const KEY_MATERIAL = ["gold", "silver", "redShine", "greenShine", "blueShine", "standard", "standard", "whiteShine", "cyanShine", "orangeShine", "pinkShine"];
const KEY_TYPE = {};

for (let [index, key] of KEY_TYPES.entries()) {
    KEY_TYPE[key] = new KeyTypeDefinition(key, `${key}Key`, key, KEY_TEXTURES[index], MATERIAL[KEY_MATERIAL[index]]);
}

const SCROLL_TYPE = [
    "Invisibility", "Cripple", "HalfLife", "Explode",
];

const SHRINE_TYPE = {
};

const ORACLE_TYPE = {

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
        material: MATERIAL.silver,
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
    }

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
    Bounceball: {
        name: "Bounceball",
        category: 'missile',
        element: "BALL",
        scale: 1.5 / 2 ** 4,
        texture: "GreenMetal",
        moveSpeed: 8.0,
        lightColor: "#006600",
        material: MATERIAL.greenFluence,
        construct: BouncingMissile,
        collectible: false,
    },
    Orb: {
        name: "Orb",
        category: 'missile',
        element: "BALL",
        scale: 1.9 / 2 ** 5,
        texture: "FireballTexture",
        moveSpeed: 8.0,
        lightColor: "#FF7700",
        material: MATERIAL.fire,
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
        texture: "Cake_BaseColor",
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
        texture: "Steak_Texture",
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
};

const INTERACTION_ITEM = {
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
    GoldCoin: {
        name: "GoldCoin",
        category: "interaction_item",
        inventorySprite: "GoldCoin",
        text: "Face on the coin looks like my mother."
    },
    Apple: {
        name: "Apple",
        category: "interaction_item",
        inventorySprite: "Apple",
        text: "Oh, it's an apple.",
    },
};

const INTERACTION_ENTITY = {
    
};

const INTERACTION_SHRINE = {
   
};

const INTERACTOR = {
   
};

//container content
const CONTAINER_CONTENT_TYPES = { GOLD_ITEM_TYPE, SKILL_ITEM_TYPE, INTERACTION_ITEM };
const CONTAINER_CONTENT_LIST = stringifyObjectList(CONTAINER_CONTENT_TYPES);
const TRIGGER_ACTIONS = ["HOLE->toEmpty", "WALL->toEmpty", "EMPTY->toWall"];
const TRAP_ACTIONS = {
    Missile: [
        //"Fireball", 
        "Bounceball"
    ],
    Spawn: listObjectKeys(MONSTER_TYPE)
};
const TRAP_ACTION_LIST = listObjectKeys(TRAP_ACTIONS);