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
    "Invisibility", "Cripple", "HalfLife", "Explode", "Luck", "Flight", "BoostWeapon", "BoostArmor", "MagicBoost",
    "DestroyWeapon", "DestroyArmor", "DrainMana",

];

const SHRINE_TYPE = {
    CuteDemon: {
        name: "CuteDemon",
        sprite: "CuteDemon",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 1,
        level: 3,
        text: "1 gold for magic upgrade. I can't afford not to buy it. My life is at stake.",
        introduce: true,
        voice: "Princess",
    },
};

const ORACLE_TYPE = {
    DarkPriestess1: {
        name: "DarkPriestess1",
        sprite: "DarkPriestess1",
        category: 'crest',
        voice: "Female",
        text: "This is just a tesst. Do you hear me?",
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
        lightColor: "#AA2200",
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
        material: MATERIAL.redShine,
    },
    /////////////

    Spider: {
        name: "Spider",
        model: "Spider",
        scale: 1.4 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.35,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 5,
        attack: 4,
        magic: 0,
        defense: 0,
        xp: 1,
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
        scale: 1.5 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.35,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 5,
        attack: 12,
        magic: 0,
        defense: 0,
        xp: 1,
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
        scale: 1.25 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.35,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 5,
        attack: 12,
        magic: 0,
        defense: 0,
        xp: 1,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },

    MissGalaxy: {
        name: "MissGalaxy",
        model: "MissGalaxy",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        //
        mana: 1,
        health: 10,
        attack: 8,
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
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        //
        mana: 3,
        health: 10,
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
        mana: 5,
        health: 10,
        attack: 20,
        magic: 10,
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
    Apple: {
        name: "Apple",
        category: "interaction_item",
        inventorySprite: "Apple",
        text: "Oh, it's an apple.",
    },
};

const INTERACTION_ENTITY = {
    Darksy: {
        name: "Darksy",
        sprite: "Darksy",
        category: 'crest',
        voice: "Female",
        wants: ["Apple"],
        gives: "GoldCoin",
        text: {
            intro: "This is intro.",
            progress: null,
            conclusion: "This is conclusion"
        }
    },
};

const INTERACTION_SHRINE = {
    Darksy: {
        name: "Darksy",
        sprite: "Darksy",
        category: 'crest',
        voice: "Female2",
        wants: ["Apple"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "I tell what i want.",
            progress: "This is not triggered.",
            conclusion: "Finally, a resolution."
        }
    },
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