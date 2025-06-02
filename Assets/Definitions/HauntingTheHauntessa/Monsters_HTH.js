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
    "DestroyWeapon", "DestroyArmor", "DrainMana", "FeatherFall", "Radar", "VeryLucky"
];

const SHRINE_TYPE = {
    CyBorgessia: {
        name: "CyBorgessia",
        sprite: "CyBorgessia",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 2500,
        level: 1,
        text: "Magic is just science not understood. For 2500 gold I will teach you.",
        introduce: true,
        voice: "GlaDOSHigh",
    },
    RedHeadForestWariorr: {
        name: "RedHeadForestWariorr",
        sprite: "RedHeadForestWariorr",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 2500,
        level: 1,
        text: "Wanna kick some balls? For 2500 gold I will let you win.",
        introduce: true,
        voice: "FemaleLow6",
    },
    ForestShield: {
        name: "ForestShield",
        sprite: "ForestShield",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 2500,
        level: 1,
        text: "Chain mail is good protection from penetration. With sharp objects. Do you want to learn it? 2500 gold. Just today.",
        introduce: true,
        voice: "FemaleLow5",
    },
    ForestHeart: {
        name: "ForestHeart",
        sprite: "ForestHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 2500,
        level: 1,
        text: "Forest's fresh air is not enough for a health boost? 2500 gold and you will be as new. Seventeen again.",
        introduce: true,
        voice: "FemaleLow2",
    },
    ForestManaWitch: {
        name: "ForestManaWitch",
        sprite: "ForestManaWitch",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 2500,
        level: 1,
        text: "Want to taste this brew? For 2500 gold it will make you spit fire.",
        introduce: true,
        voice: "Female4",
    },
    LadyGreenHeart: {
        name: "LadyGreenHeart",
        sprite: "LadyGreenHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 2000,
        level: 1,
        text: "Do you need some health boost, love? 2000 gold.",
        introduce: true,
        voice: "Female3",
    },
    PurpleManaBabe: {
        name: "PurpleManaBabe",
        sprite: "PurpleManaBabe",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 2000,
        level: 1,
        text: "Don't be ridiculous, honey. Of course it's not poison. For 2000 gold it's yours.",
        introduce: true,
        voice: "Female6",
    },
    DaggerEtte: {
        name: "DaggerEtte",
        sprite: "DaggerEtte",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 1500,
        level: 1,
        text: "A kick or a stab solves a lot of problems. Sometimes violence is the answer, for 1500 gold, that is.",
        introduce: true,
        voice: "FemaleHigh3",
    },
    YellowJacketDefense: {
        name: "YellowJacketDefense",
        sprite: "YellowJacketDefense",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 1500,
        level: 1,
        text: "Protection from elements is crucial, 1500 gold and you will be better protected.",
        introduce: true,
        voice: "FemaleLow6",
    },
    TransMana: {
        name: "TransMana",
        sprite: "TransMana",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 1500,
        level: 1,
        text: "Drink this honey, 1500 gold and your mana will increase. The taste suck, though.",
        introduce: true,
        voice: "Female6",
    },
    CrossFire: {
        name: "CrossFire",
        sprite: "CrossFire",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 1500,
        level: 1,
        text: "I am sharing my inner fire with you, 1500 gold.",
        introduce: true,
        voice: "Female4",
    },
    CrossHeart: {
        name: "CrossHeart",
        sprite: "CrossHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 1500,
        level: 1,
        text: "I am sharing my heart with you, 1500 gold.",
        introduce: true,
        voice: "Female3",
    },
    DrainManaScrollSeller: {
        name: "DrainManaScrollSeller",
        sprite: "DrainManaScrollSeller",
        which: "DrainMana",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 666,
        voice: "FemaleLow",
        text: "Drain Mana scroll - 666 gold"
    },
    ScrollSellerBoostArmor: {
        name: "ScrollSellerBoostArmor",
        sprite: "ScrollSellerBoostArmor",
        which: "BoostArmor",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 499,
        voice: "FemaleLow",
        text: "Boost armor scroll - 499 gold"
    },
    GreenScrollSellerWeapon: {
        name: "GreenScrollSellerWeapon",
        sprite: "GreenScrollSellerWeapon",
        which: "BoostWeapon",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 499,
        voice: "FemaleLow",
        text: "Boost weapon scroll - 499 gold"
    },
    FlyScrollSellerFlux: {
        name: "FlyScrollSellerFlux",
        sprite: "FlyScrollSellerFlux",
        which: "Flight",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 250,
        voice: "Female2",
        text: "Flight scroll - 250 gold"
    },
    FlyScrollSellerID: {
        name: "FlyScrollSellerID",
        sprite: "FlyScrollSellerID",
        which: "Flight",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 250,
        voice: "Female",
        text: "Flight scroll - 250 gold"
    },
    BlueScrollSellerFluxCripple: {
        name: "BlueScrollSellerFluxCripple",
        sprite: "BlueScrollSellerFluxCripple",
        which: "Cripple",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 499,
        voice: "FemaleLow2",
        text: "Cripple scroll - 499 gold"
    },
    OrangeScrollSellerFluxInvisibility: {
        name: "OrangeScrollSellerFluxInvisibility",
        sprite: "OrangeScrollSellerFluxInvisibility",
        which: "Invisibility",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 999,
        voice: "FemaleLow",
        text: "Invisibility scroll - 999 gold"
    },
    GreenScrollSellerHalfLife: {
        name: "GreenScrollSellerHalfLife",
        sprite: "GreenScrollSellerHalfLife",
        which: "HalfLife",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 999,
        voice: "Female2",
        text: "HalfLife scroll - 999 gold"
    },
    HeartAttack: {
        name: "HeartAttack",
        sprite: "HeartAttack",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 999,
        level: 1,
        text: "My looks make hearts beat faster. Pray and pay, 999 gold.",
        introduce: true,
        voice: "FemaleLow2",
    },
    BulletTina: {
        name: "BulletTina",
        sprite: "BulletTina",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 999,
        level: 1,
        text: "Casting fireballs is similar to shooting. Pray for aim, and pay, 999 gold.",
        introduce: true,
        voice: "FemaleLow",
    },
    ManaCook: {
        name: "ManaCook",
        sprite: "ManaCook",
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
    Navigator: {
        name: "Navigator",
        sprite: "Navigator",
        category: 'crest',
        voice: "FemaleHigh6",
        text: "To find Hauntessa, go south from here, pass over the bridge, and open the passage to the underworld to the south. Pity all the doors are locked tgough, isn't it?",
        interactionCategory: "oracle",
    },
    CousinInTheForest: {
        name: "CousinInTheForest",
        sprite: "CousinInTheForest",
        category: 'crest',
        voice: "Princess",
        text: "My cute mute cousin has come to wave goodbye? But why she keeps copying my famous outfit? Does she wants to owerthrown me when I am not here? Bitch!",
        interactionCategory: "oracle",
    },
    YellowCouchDomme: {
        name: "YellowCouchDomme",
        sprite: "YellowCouchDomme",
        category: 'crest',
        voice: "FemaleHigh3",
        text: "If you engage in every single fight and try to win it, you might not survive long. But sure, you will be very experienced. How about balance?",
        interactionCategory: "oracle",
    },
    CrissCross: {
        name: "CrissCross",
        sprite: "CrissCross",
        category: 'crest',
        voice: "FemaleHigh4",
        text: "Isn't an amazing coincidence that the convention of gem buyers is taking place in our guest capacities? Also one of the most dangerous places in the castle?",
        interactionCategory: "oracle",
    },
    Painter: {
        name: "Painter",
        sprite: "Painter",
        category: 'crest',
        voice: "FemaleHigh4",
        text: "The paintings on the wall are not just there because they are pretty. The will help with your orientation.",
        interactionCategory: "oracle",
    },
    SaveGameBabe: {
        name: "SaveGameBabe",
        sprite: "SaveGameBabe",
        category: 'crest',
        voice: "FemaleLow4",
        text: "You can run out of dungeon any time. This will save your game. And maybe your life. Don't forget to store your safe saved games. Reading instructions is not a shame.",
        interactionCategory: "oracle",
    },
    DonWasteFireball: {
        name: "DonWasteFireball",
        sprite: "DonWasteFireball",
        category: 'crest',
        voice: "FemaleLow6",
        text: "Don't waste a fireball when a simple kick will solve the problem.",
        interactionCategory: "oracle",
    },
    FireballShutHiny: {
        name: "FireballShutHiny",
        sprite: "FireballShutHiny",
        category: 'crest',
        voice: "FemaleLow3",
        text: "Did your realize that you can use your fireballs to shot down enemy's missiles? This can save your life.",
        interactionCategory: "oracle",
    },
    Completist: {
        name: "Completist",
        sprite: "Completist",
        category: 'crest',
        voice: "Female5",
        text: "Those who search every nook and cranny is rewarded. Those who don't, usually just die.",
        interactionCategory: "oracle",
    },
    GrayCutie: {
        name: "GrayCutie",
        sprite: "GrayCutie",
        category: 'crest',
        voice: "Female2",
        text: "A lot of wall pictures comes from the legendary 80's computer games. And even more from the unused art from this and previous LaughingSkull games. Praised be.",
        interactionCategory: "oracle",
    },
    GreenDungeonie: {
        name: "GreenDungeonie",
        sprite: "GreenDungeonie",
        category: 'crest',
        voice: "Female",
        text: "If you find a dungeon too dangerous, then you better leave and return when you are stronger.",
        interactionCategory: "oracle",
    },
    StackOracle: {
        name: "StackOracle",
        sprite: "StackOracle",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Some scroll magic stack by effect, some by duration.",
        interactionCategory: "oracle",
    },
    BarefootPinka: {
        name: "BarefootPinka",
        sprite: "BarefootPinka",
        category: 'crest',
        voice: "FemaleLow",
        text: "Did you notice that the monsters who can cast magic, are probably more resistant to magic? No? Think ...",
        interactionCategory: "oracle",
    },
    ManaBabe: {
        name: "ManaBabe",
        sprite: "ManaBabe",
        category: 'crest',
        voice: "Female2",
        text: "The more powerful you magic is, the longer it will bounce around, and more mana is required to cast it.",
        interactionCategory: "oracle",
    },
    InventoryBabe: {
        name: "InventoryBabe",
        sprite: "InventoryBabe",
        category: 'crest',
        voice: "FemaleLow",
        text: "Be mindful of your inventory. If it get's full, you won't be able to pick anything.",
        interactionCategory: "oracle",
    },
    Drunka: {
        name: "Drunka",
        sprite: "Drunka",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Go on dear. Let me drink in peace. Nothing to do here.",
        interactionCategory: "oracle",
    },
    PrayPayNun: {
        name: "PrayPayNun",
        sprite: "PrayPayNun",
        category: 'crest',
        voice: "Female2",
        text: "Figured out our shrines yet? You pray, you pay, then you may play. Just bring coins, sinner. Miracles don't come cheap.",
        interactionCategory: "oracle",
    },
    ApparitiaHurt: {
        name: "ApparitiaHurt",
        sprite: "ApparitiaHurt",
        category: 'crest',
        voice: "Apparitia",
        text: "Remember me? Remeber how you hurt us? Do you dare come into the Hauntessa's castle? You bitch?.",
        interactionCategory: "oracle",
    },
    RedHeadMaid: {
        name: "RedHeadMaid",
        sprite: "RedHeadMaid",
        category: 'crest',
        voice: "Female2",
        text: "I wonder where does all those violent mad naked handmaids coming from? Hauntessa again? Do something about it, Princess.",
        interactionCategory: "oracle",
    },
    HeelTransa: {
        name: "HeelTransa",
        sprite: "HeelTransa",
        category: 'crest',
        voice: "Female2",
        text: "Our trans community is famous for the inclusion. Everyone is welcome. But if you don't wear high heels then you better fuck off.",
        interactionCategory: "oracle",
    },
    BlackTransaOracle: {
        name: "BlackTransaOracle",
        sprite: "BlackTransaOracle",
        category: 'crest',
        voice: "Female2",
        text: "True, our trans quest is not mandatory. Think about that when you will be lying in the pool of your own blood somewhere.",
        interactionCategory: "oracle",
    },
    ClearTransa: {
        name: "ClearTransa",
        sprite: "ClearTransa",
        category: 'crest',
        voice: "FemaleLow2",
        text: "Welcome to out inclusive trans community. We are all trans here. Lovers of trans parent outfits. Hahahaha.",
        interactionCategory: "oracle",
    },
    MC_Transa: {
        name: "MC_Transa",
        sprite: "MC_Transa",
        category: 'crest',
        voice: "FemaleLow",
        text: "Any color you like. We accept all. As long as it is shiny.",
        interactionCategory: "oracle",
    },
    WindowSitter: {
        name: "WindowSitter",
        sprite: "WindowSitter",
        category: 'crest',
        voice: "Female2",
        text: "Will you jump or do you need to be pushed? Just make sure you jump far enough.",
        interactionCategory: "oracle",
    },
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
    BarrelMedieval: {
        name: "Barrel",
        category: "chest",
        element: "BarrelMedieval",
        scale: 0.9 / 2 ** 3,
        glueToFloor: true,
        texture: "BarrelMedieval",
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
    BarrelX: {
        name: "BarrelX",
        category: "chest",
        element: "BarrelX",
        scale: 1.7 / 2 ** 2,
        glueToFloor: true,
        texture: "x_barrel_BaseColor",
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
        directMagicDamage: false,
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
        directMagicDamage: false,
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
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.15,
        material: MATERIAL.standard,
    },
    Dragon: {
        name: "Dragon",
        model: "Dragon",
        scale: 1.9 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.SilverBar,
        mana: 5,
        health: 15,
        attack: 10,
        magic: 6,
        defense: 3,
        xp: 20,
        caster: true,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 7,
        stalkDistance: 6,
        material: MATERIAL.gold,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
        shoot3D: true,
    },
    MadHandy: {
        name: "MadHandy",
        model: "MadHandy",
        scale: 1.6 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldCube,
        inventory: null,
        mana: 0,
        health: 12,
        attack: 10,
        magic: 1,
        defense: 3,
        xp: 15,
        caster: false,
        directMagicDamage: false,
        attackSound: "FemaleAttack1",
        hurtSound: "HurtScream",
        behaviourArguments: [7, ["wanderer"], 5, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
    },
    MissGalaxy: {
        name: "MissGalaxy",
        texture: "MissGalaxyBrighter",
        model: "MissGalaxy",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 5,
        health: 15,
        attack: 12,
        magic: 7,
        defense: 1,
        xp: 20,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [10, ["wanderer"], 5, ["shoot"]],
        shootDistance: 5,
        stalkDistance: 6,
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    DarkMadHandy: {
        name: "DarkMadHandy",
        texture: "DarkMandy",
        model: "MadHandy",
        scale: 1.65 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldCube,
        inventory: null,
        mana: 0,
        health: 16,
        attack: 15,
        magic: 1,
        defense: 4,
        xp: 20,
        caster: false,
        directMagicDamage: false,
        attackSound: "FemaleAttack2",
        hurtSound: "HurtScream",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
    },
    BigBat: {
        name: "BigBat",
        model: "BigBat",
        scale: 0.55 / 2 ** 1,
        rotateToNorth: Math.PI / 2,
        midHeight: 0.0,
        fly: 0.5,
        deathType: "SmokeExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 7,
        magic: 5,
        defense: 2,
        xp: 10,
        attackSound: "BatAttack",
        hurtSound: "BatAttack",
        behaviourArguments: [Infinity, ["wanderer"], -1],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
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
        mana: 10,
        health: 30,
        attack: 18,
        magic: 20,
        defense: 2,
        xp: 30,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        attackSound: "FemaleAttack3",
        hurtSound: "Ow2",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        shootDistance: 7,
        stalkDistance: 6,
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
        missile: Missile,
        missileType: COMMON_ITEM_TYPE.RedFireball,
    },
    MissGalaxyGreenBouncer: {
        name: "MissGalaxyGreenBouncer",
        texture: "MissGalaxyGreen",
        model: "MissGalaxy",
        scale: 0.85 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 8,
        health: 25,
        attack: 15,
        magic: 10,
        defense: 3,
        xp: 25,
        caster: true,
        shootDistance: 5,
        stalkDistance: 6,
        attackSound: "FemaleAttack3",
        hurtSound: "Ow2",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        shootDistance: 7,
        stalkDistance: 6,
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    WolfSpider: {
        name: "WolfSpider",
        model: "WolfSpider",
        scale: 1.0 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.4,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 16,
        attack: 20,
        magic: 0,
        defense: 5,
        xp: 25,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.15,
        material: MATERIAL.standard,
    },
    WolfSpideGreen: {
        name: "WolfSpideGreen",
        texture: "WolfSpideGreen",
        model: "WolfSpider",
        scale: 1.1 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.4,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 20,
        attack: 25,
        magic: 0,
        defense: 8,
        xp: 30,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [15, ["wanderer"], 11, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    Viking: {
        name: "Viking",
        model: "Viking",
        scale: 1.1 / 2 ** 8,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 25,
        attack: 30,
        magic: 0,
        defense: 10,
        xp: 40,
        directMagicDamage: false,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    RedDragon: {
        name: "RedDragon",
        texture: "RedDragon",
        model: "Dragon",
        scale: 1.92 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.25,
        fly: 0.25,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldBar,
        mana: 6,
        health: 30,
        attack: 35,
        magic: 10,
        defense: 5,
        xp: 50,
        directMagicDamage: false,
        caster: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 8,
        stalkDistance: 6,
        material: MATERIAL.gold,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
        shoot3D: true,
    },
    Wolf: {
        name: "Wolf",
        model: "Wolf",
        scale: 1.7 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 30,
        attack: 35,
        magic: 0,
        defense: 12,
        xp: 50,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [6, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standard,
    },
    PurpleGalaxy: {
        name: "PurpleGalaxy",
        texture: "PurpleGalaxy",
        model: "MissGhostFace",
        scale: 1 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.6,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldBar,
        mana: 8,
        health: 35,
        attack: 40,
        magic: 15,
        defense: 6,
        xp: 60,
        directMagicDamage: false,
        caster: true,
        attackSound: "Banshee",
        hurtSound: "PiercingScream",
        behaviourArguments: [Infinity, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.2,
        shootDistance: 15,
        stalkDistance: 17,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
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
    //mana
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
    Amanita: {
        name: "Amanita",
        category: "action_item",
        which: "mana",
        element: "AMANITA",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "AmanitaBaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Amanita",
        text: "Poisonous mushroom. I should definitely eat that, right?"
    },
    Snail: {
        name: "Snail",
        category: "action_item",
        which: "mana",
        element: "SNAIL",
        scale: 1.0 / 2 ** 3,
        glueToFloor: true,
        texture: "SnailColor",
        material: MATERIAL.standard,
        inventorySprite: "Snail",
        text: "Slimy snail, full of magic. Nam, nam."
    },
    ManaFrog: {
        name: "ManaFrog",
        category: "action_item",
        which: "mana",
        element: "FROG",
        scale: 1.0 / 2 ** 6,
        glueToFloor: true,
        texture: "FrogColor",
        material: MATERIAL.standard,
        inventorySprite: "ManaFrog",
        text: "Ribbit."
    },


    //health
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

    //items
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
    Pear: {
        name: "Pear",
        category: "interaction_item",
        element: "PEAR",
        scale: 1 / 2 ** 7,
        glueToFloor: true,
        texture: "Pear_baseColor",
        material: MATERIAL.standard,
        inventorySprite: "Pear",
        text: "Juicy pear? How nice."
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
    Mushroom: {
        name: "Mushroom",
        category: "interaction_item",
        element: "MUSHROOM",
        scale: 1.4 / 2 ** 7,
        glueToFloor: true,
        texture: "MushroomTexture",
        inventorySprite: "Mushroom",
        material: MATERIAL.standard,
        text: "Poisonous. Don't eat."
    },
    Skull: {
        name: "Skull",
        category: "interaction_item",
        element: "SKULL",
        scale: 1 / 2 ** 1,
        glueToFloor: true,
        texture: "Skull_texture",
        inventorySprite: "Skull",
        material: MATERIAL.standard,
        text: "Creeepy?"
    },
    Candle: {
        name: "Candle",
        category: "interaction_item",
        element: "CANDLE",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "CandleWax",
        material: MATERIAL.standard,
        inventorySprite: "Candle",
        text: "Simple wax candle. I can light it. Or not."
    },
    HornedHelmet: {
        name: "HornedHelmet",
        category: "interaction_item",
        element: "HornedHelmet",
        scale: 1.0 / 2 ** 6,
        glueToFloor: true,
        texture: "HornedHelmetColor",
        material: MATERIAL.steel,
        inventorySprite: "HornedHelmet",
        text: ""
    },
    SmallBarrel: {
        name: "SmallBarrel",
        category: "interaction_item",
        element: "BARREL",
        scale: 1.75 / 2 ** 3,
        glueToFloor: true,
        texture: "Barrel",
        material: MATERIAL.standard,
        inventorySprite: "SmallBarrel",
        text: "Such a small barrel. Not a lot of drink."
    },

    //metals
    GoldSphere: {
        name: "GoldSphere",
        category: "interaction_item",
        element: "BALL",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldSphere",
        material: MATERIAL.gold,
        text: "This one goes in the bag. Who knows ..."
    },
    GoldBar: {
        name: "GoldBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Gold",
        inventorySprite: "GoldBar",
        material: MATERIAL.gold,
        text: "I should store some gold in the bag. Who knows ..."
    },
    SilverBar: {
        name: "SilverBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Silver",
        inventorySprite: "SilverBar",
        material: MATERIAL.silver,
        text: "Silver. Malleable."
    },
    IronBar: {
        name: "IronBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "IronTexture",
        inventorySprite: "IronBar",
        material: MATERIAL.standard,
        text: "Iron? I can make something from it."
    },
    RedBar: {
        name: "RedBar",
        category: "interaction_item",
        element: "BAR",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "RedMetal",
        inventorySprite: "RedBar",
        material: MATERIAL.standard,
        text: "Wow. Infernal red metal.."
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
    RedWolfSpider: {
        /** mana */
        name: "RedWolfSpider",
        category: "action_item",
        which: "mana",
        model: "WolfSpider",
        scale: 1.0 / 2 ** 4,
        rotateToNorth: Math.PI,
        moveSpeed: 1.25,
        texture: "WolfSpiderRed",
        material: MATERIAL.standardShine,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RedSpider",
        text: "Reeks with magic. Let's nibble.",
    },
    BabyGreenSpider: {
        name: "BabyGreenSpider",
        category: "interaction_item",
        model: "Spider",
        scale: 1 / 2 ** 8,
        rotateToNorth: Math.PI,
        texture: "SpiderGreen",
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabyGreenSpider",
        text: "Eight hairy legs? Creepy spider."
    },
    BabyDragon: {
        name: "BabyDragon",
        category: "interaction_item",
        model: "Dragon",
        scale: 1 / 2 ** 5,
        fly: 0.5,
        midHeight: 0.0,
        rotateToNorth: Math.PI,
        moveSpeed: 1.75,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabyDragon",
        text: "Come to mamma."
    },
    Life: {
        name: "Life",
        model: "Princess",
        scale: 1 / 2 ** 3,
        rotateToNorth: Math.PI,
        material: MATERIAL.standard,
        static: true,
        category: "life",
        inventorySprite: "Lives",
        text: "A backup life. We all need this, right?",
    },
    BabySheep: {
        name: "BabySheep",
        category: "interaction_item",
        model: "Sheep",
        scale: 1.1 / 2 ** 10,
        rotateToNorth: Math.PI,
        moveSpeed: 1.25,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "BabySheep",
        text: "Poor lamb. Are you hurt?",
    },
    Chicken: {
        /** alive */
        name: "Chicken",
        category: "interaction_item",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Chicken",
        text: "Blonde chick. Not yet fried."
    },
    LittlePiggy: {
        name: "LittlePiggy",
        category: "interaction_item",
        model: "Pig",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.6,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "LittlePiggy",
        text: "Try not to huff and puff.",
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
    PinkKey: {
        name: "PinkKey",
        category: "key",
        inventorySprite: "PinkKey",
        color: "Pink"
    },

    //items
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
    Pear: {
        name: "Pear",
        category: "interaction_item",
        inventorySprite: "Pear",
        text: "Ripe juicy pear.",
    },
    Orange: {
        name: "Orange",
        category: "interaction_item",
        inventorySprite: "Orange",
        text: "Ripe juicy orange.",
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
    Shuriken: {
        name: "Shuriken",
        category: "interaction_item",
        inventorySprite: "Shuriken",
        text: "A deadly throwing star."
    },
    Mushroom: {
        name: "Mushroom",
        category: "interaction_item",
        inventorySprite: "Mushroom",
        text: "Poisonous. Don't eat."
    },
    ArcadeToken: {
        name: "ArcadeToken",
        category: "interaction_item",
        inventorySprite: "ArcadeToken",
        text: "Token for arcade cabinet. Let's play some Pac Man."
    },
    GoldOre: {
        name: "GoldOre",
        category: "interaction_item",
        inventorySprite: "GoldOre",
        text: "I should smelt this gold ore into a bar."
    },
    BlackLatexpanties: {
        name: "BlackLatexpanties",
        category: "interaction_item",
        inventorySprite: "BlackLatexpanties",
        text: "Wow, that's hot."
    },
    BlackLatexBra: {
        name: "BlackLatexBra",
        category: "interaction_item",
        inventorySprite: "BlackLatexBra",
        text: "Smouldering hot. Maybe he'll let me wear it in the next game."
    },
    YellowLatexPanties: {
        name: "YellowLatexPanties",
        category: "interaction_item",
        inventorySprite: "YellowLatexPanties",
        text: "Wow, that's hot."
    },
    WhiteLatexPanties: {
        name: "WhiteLatexPanties",
        category: "interaction_item",
        inventorySprite: "WhiteLatexPanties",
        text: "Wow, that's hot."
    },
    GreyLatexPanties: {
        name: "GreyLatexPanties",
        category: "interaction_item",
        inventorySprite: "GreyLatexPanties",
        text: "Wow, that's hot."
    },
    TransRedLatexPanties: {
        name: "TransRedLatexPanties",
        category: "interaction_item",
        inventorySprite: "TransRedLatexPanties",
        text: "Wow, that's hot."
    },
    TransBlackLatexPanties: {
        name: "TransBlackLatexPanties",
        category: "interaction_item",
        inventorySprite: "TransBlackLatexPanties",
        text: "Wow, that's hot."
    },
    YellowCertificate: {
        name: "YellowCertificate",
        category: "interaction_item",
        inventorySprite: "YellowCertificate",
    },
    GreyCertificate: {
        name: "GreyCertificate",
        category: "interaction_item",
        inventorySprite: "GreyCertificate",
    },
    BlackCertificate: {
        name: "BlackCertificate",
        category: "interaction_item",
        inventorySprite: "BlackCertificate",
    },
    WhiteCertificate: {
        name: "WhiteCertificate",
        category: "interaction_item",
        inventorySprite: "WhiteCertificate",
    },
    RedCertificate: {
        name: "RedCertificate",
        category: "interaction_item",
        inventorySprite: "RedCertificate",
    },
    Whip: {
        name: "Whip",
        category: "interaction_item",
        inventorySprite: "Whip",
        text: "I can punish someone."
    },
    Handcuffs: {
        name: "Handcuffs",
        category: "interaction_item",
        inventorySprite: "Handcuffs",
        text: "Should I arrest someone?"
    },
    BlackLeatherBoots: {
        name: "BlackLeatherBoots",
        category: "interaction_item",
        inventorySprite: "BlackLeatherBoots",
        text: "This boots look amazing. Did you see those heels?"
    },
    Ammo: {
        name: "Ammo",
        category: "interaction_item",
        inventorySprite: "Ammo",
        text: "Ammunition for a revolver."
    },
    Revolver: {
        name: "Revolver",
        category: "interaction_item",
        inventorySprite: "Revolver",
        text: "Small handgun. I am more of a fireball girl myself."
    },
    Mirror: {
        name: "Mirror",
        category: "interaction_item",
        inventorySprite: "Mirror",
        text: "Who is the fairest? Me."
    },
    Spectacles: {
        name: "Spectacles",
        category: "interaction_item",
        inventorySprite: "Spectacles",
        text: "Spectacles with round rims. This is a fashion hit of the Castle Creep."
    },
    Lipstick: {
        name: "Lipstick",
        category: "interaction_item",
        inventorySprite: "Lipstick",
        text: "Sexy red color. Suits me fine."
    },
    StarDestroyer: {
        name: "StarDestroyer",
        category: "interaction_item",
        inventorySprite: "StarDestroyer",
        text: "A pocket sized star destroyer."
    },
    Banknote10: {
        name: "Banknote10",
        category: "interaction_item",
        inventorySprite: "Banknote10",
        text: "That is a lot of money. 10 Castle Marks."
    },
    Emerald: {
        name: "Emerald",
        category: "interaction_item",
        inventorySprite: "Emerald",
        text: "Emerald? I can make something from it."
    },
    Ruby: {
        name: "Ruby",
        category: "interaction_item",
        inventorySprite: "Ruby",
        text: "Nice shiny blood red ruby."
    },
    Diamond: {
        name: "Diamond",
        category: "interaction_item",
        inventorySprite: "Diamond",
        text: "Diamond? My best friend."
    },
    Postcard: {
        name: "Postcard",
        category: "interaction_item",
        inventorySprite: "Postcard",
        text: "Postcard from my journey."
    },
    Pie: {
        name: "Pie",
        category: "interaction_item",
        inventorySprite: "Pie",
        text: "Yummy pie."
    },
    OrangeJuice: {
        name: "OrangeJuice",
        category: "interaction_item",
        inventorySprite: "OrangeJuice",
        text: "Fresh orange juice. No vodka though?"
    },
    Ring: {
        name: "Ring",
        category: "interaction_item",
        inventorySprite: "Ring",
        text: "Will it make me invisible, precious?"
    },
    ArmorBlueprint: {
        name: "ArmorBlueprint",
        category: "interaction_item",
        inventorySprite: "ArmorBlueprint",
        text: "Looks like some kind of blueprint for armor."
    },
    GoldenNecklace: {
        name: "GoldenNecklace",
        category: "interaction_item",
        inventorySprite: "GoldenNecklace",
        text: "Very valuable golden necklace."
    },
    GoldenBracelet: {
        name: "GoldenBracelet",
        category: "interaction_item",
        inventorySprite: "GoldenBracelet",
        text: "Very valuable golden bracelet."
    },
    RedLatexBra: {
        name: "RedLatexBra",
        category: "interaction_item",
        inventorySprite: "RedLatexBra",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    RedLatexPanties: {
        name: "RedLatexPanties",
        category: "interaction_item",
        inventorySprite: "RedLatexPanties",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    RedLeatherBoots: {
        name: "RedLeatherBoots",
        category: "interaction_item",
        inventorySprite: "RedLeatherBoots",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    Pearl: {
        name: "Pearl",
        category: "interaction_item",
        inventorySprite: "Pearl",
        text: "Pearl looks like moon's tear."
    },
    Amethyst: {
        name: "Amethyst",
        category: "interaction_item",
        inventorySprite: "Amethyst",
    },
    Moonstone: {
        name: "Moonstone",
        category: "interaction_item",
        inventorySprite: "Moonstone",
    },
    PurpleTear: {
        name: "PurpleTear",
        category: "interaction_item",
        inventorySprite: "PurpleTear",
        text: "Beautiful and precious gem."
    },
    Shell: {
        name: "Shell",
        category: "interaction_item",
        inventorySprite: "Shell",
        text: "Pretty shell."
    },
    Moon: {
        name: "Moon",
        category: "interaction_item",
        inventorySprite: "Moon",
        text: "Moon? Really? What's next."
    },
    InfernalArmor: {
        name: "InfernalArmor",
        category: "interaction_item",
        inventorySprite: "InfernalArmor",
    },
    Butterfly: {
        name: "Butterfly",
        category: "interaction_item",
        inventorySprite: "Butterfly",
        text: "Fly made of butter? So funny."
    },
    SunScreen: {
        name: "SunScreen",
        category: "interaction_item",
        inventorySprite: "SunScreen",
        text: "Sun screen factor 50."
    },
    Towel: {
        name: "Towel",
        category: "interaction_item",
        inventorySprite: "Towel",
        text: "A towel. Pity I am not wet."
    },
    RedSandals: {
        name: "RedSandals",
        category: "interaction_item",
        inventorySprite: "RedSandals",
        text: "Beatchwear. Bitchwear?"
    },
    RedLeatherHat: {
        name: "RedLeatherHat",
        category: "interaction_item",
        inventorySprite: "RedLeatherHat",
        text: "Too big for my cute small head."
    },
    Fins: {
        name: "Fins",
        category: "interaction_item",
        inventorySprite: "Fins",
        text: "Fins. For scuba diving."
    },
    ScubaMask: {
        name: "ScubaMask",
        category: "interaction_item",
        inventorySprite: "ScubaMask",
        text: "Mask. For scuba diving."
    },


    //books
    YoniBook: {
        name: "YoniBook",
        category: "interaction_item",
        inventorySprite: "YoniBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TaoBook: {
        name: "TaoBook",
        category: "interaction_item",
        inventorySprite: "TaoBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    YinYangBook: {
        name: "YinYangBook",
        category: "interaction_item",
        inventorySprite: "YinYangBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    PentagramBook: {
        name: "PentagramBook",
        category: "interaction_item",
        inventorySprite: "PentagramBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    HexagramBook: {
        name: "HexagramBook",
        category: "interaction_item",
        inventorySprite: "HexagramBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TripleMoonBook: {
        name: "TripleMoonBook",
        category: "interaction_item",
        inventorySprite: "TripleMoonBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    TriquetraBook: {
        name: "TriquetraBook",
        category: "interaction_item",
        inventorySprite: "TriquetraBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    VenusBook: {
        name: "VenusBook",
        category: "interaction_item",
        inventorySprite: "VenusBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    AnkhBook: {
        name: "AnkhBook",
        category: "interaction_item",
        inventorySprite: "AnkhBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    FireballBook: {
        name: "FireballBook",
        category: "interaction_item",
        inventorySprite: "FireballBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    OwlBook: {
        name: "OwlBook",
        category: "interaction_item",
        inventorySprite: "OwlBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    PrincessBook: {
        name: "PrincessBook",
        category: "interaction_item",
        inventorySprite: "PrincessBook",
        text: "Amazing story about my adventures. Everybody should read this."
    },
    TreeOfLifeBook: {
        name: "TreeOfLifeBook",
        category: "interaction_item",
        inventorySprite: "TreeOfLifeBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },
    RavenBook: {
        name: "RavenBook",
        category: "interaction_item",
        inventorySprite: "RavenBook",
        text: "It seems like an interesting book, full of ancient knowledge."
    },

    //metals
    GoldBar: {
        name: "GoldBar",
        category: "interaction_item",
        inventorySprite: "GoldBar",
    },
    GoldSteel: {
        name: "GoldSteel",
        category: "interaction_item",
        inventorySprite: "GoldSteel",
    },
    SilverBar: {
        name: "SilverBar",
        category: "interaction_item",
        inventorySprite: "SilverBar",
        text: "Silver. Malleable."
    },
    UraniumBar: {
        name: "UraniumBar",
        category: "interaction_item",
        inventorySprite: "UraniumBar",
    },
    IronBar: {
        name: "IronBar",
        category: "interaction_item",
        inventorySprite: "IronBar",
        text: "Iron? I can make something from it."
    },
};

const INTERACTION_ENTITY = {
    ScubaBabe: {
        name: "ScubaBabe",
        sprite: "ScubaBabe",
        category: 'crest',
        voice: "FemaleHigh2",
        wants: ["Fins","ScubaMask"],
        gives: "PurpleTear",
        text: {
            intro: "intro",
            progress: "progress",
            conclusion: "conclusion"
        }
    },
    GreenBikiniRedVenus: {
        name: "GreenBikiniRedVenus",
        sprite: "GreenBikiniRedVenus",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["RedSandals", "RedLeatherHat"],
        gives: "Shell",
        text: {
            intro: "intro",
            progress: "progress",
            conclusion: "conclusion"
        }
    },
    BlackBikiniVenus: {
        name: "BlackBikiniVenus",
        sprite: "BlackBikiniVenus",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["SunScreen", "Towel"],
        gives: "Shell",
        text: {
            intro: "intro",
            progress: "progress",
            conclusion: "conclusion"
        }
    },
    RedBikiniVenus: {
        name: "RedBikiniVenus",
        sprite: "RedBikiniVenus",
        category: 'crest',
        voice: "FemaleHigh4",
        wants: ["Shell", "Shell", "Shell"],
        gives: "Pearl",
        text: {
            intro: "intro",
            progress: "progress",
            conclusion: "conclusion"
        }
    },
    Inferna: {
        name: "Inferna",
        sprite: "Inferna",
        category: 'crest',
        voice: "FemaleVeryLow6",
        wants: ["HornedHelmet", "InfernalArmor"],
        gives: "BlueKey",
        text: {
            intro: "I burn with wrath, the fight draws near. Bring my armor, lose your fear!",
            progress: "Steel me up, I'm halfway clad. One more piece to make me glad.",
            conclusion: "Fully forged and flaming true. Take this key, the path is blue."
        }
    },
    RedRidingHood: {
        name: "RedRidingHood",
        sprite: "RedRidingHood",
        category: 'crest',
        voice: "Female2",
        wants: ["RedLeatherBoots", "RedLatexBra", "RedLatexPanties"],
        gives: "RedKey",
        text: {
            intro: "My outfit's fire but not complete. Bring me red and make it heat!",
            progress: "Getting steamy, piece by piece. Don't stop now, my look must feast!",
            conclusion: "Now I'm dressed to turn a head. Take this key, it's bold and red!"
        }
    },
    SilverSpacy: {
        name: "SilverSpacy",
        sprite: "SilverSpacy",
        category: 'crest',
        voice: "Female6",
        wants: ["Moon", "Moon", "Moon"],
        gives: "GoldenNecklace",
        text: {
            intro: "I'm decorating space with moons so bright. Bring me some to get it right!",
            progress: "Moons are floating, space looks fine. A few more, and the stars align!",
            conclusion: "Three moons launched, what a sight. Here's my necklace, glowing bright!"
        }
    },
    LeonaPard: {
        name: "LeonaPard",
        sprite: "LeonaPard",
        category: 'crest',
        voice: "FemaleVeryLow3",
        wants: ["LittlePiggy", "LittlePiggy", "LittlePiggy"],
        gives: "RedLatexPanties",
        text: {
            intro: "Piggies are tender, with a squeal so fine. Fetch me some, and the prize is mine!",
            progress: "Snouts and squeaks, I smell the trail. Bring me more, and you won't fail.",
            conclusion: "Three little piggies, juicy and neat. Here's my friend's panties, she made a tasty treat."
        }
    },
    Foxie: {
        name: "Foxie",
        sprite: "Foxie",
        category: 'crest',
        voice: "FemaleVeryLow4",
        wants: ["Chicken", "Chicken", "Chicken"],
        gives: "RedLeatherBoots",
        text: {
            intro: "Chicks are my weakness, soft and sweet. Bring me three, a tasty treat!",
            progress: "Mmm, feathers in the air. Keep 'em coming, we're almost there!",
            conclusion: "Three fine birds, what a catch. Here's my friend's boots, she had great taste..."
        }
    },
    Wolfie: {
        name: "Wolfie",
        sprite: "Wolfie",
        category: 'crest',
        voice: "FemaleVeryLow6",
        wants: ["BabySheep", "BabySheep", "BabySheep"],
        gives: "RedLatexBra",
        text: {
            intro: "I just love sheep, they're such sweet snacks, I mean friends! Bring me three, for snuggles and ends.",
            progress: "How cute. But I need the set. Bring me more, don't make me fret.",
            conclusion: "Three little lambs, how divine. Here's some lingerie, ex snack, I mean friend of mine."
        }
    },
    HungryMaid: {
        name: "HungryMaid",
        sprite: "HungryMaid",
        category: 'crest',
        voice: "Female5",
        wants: ["Pie", "Pie", "OrangeJuice"],
        gives: "GoldenBracelet",
        text: {
            intro: "Found a bracelet, or maybe I swiped it... But I'm too hungry to be hyped yet.",
            progress: "A bite, but not the meal. Bring more goodies to seal the deal!",
            conclusion: "Full and happy, no complaints. Here's the bracelet, don't tell the saints."
        }
    },
    DutchessaNylonessa: {
        name: "DutchessaNylonessa",
        sprite: "DutchessaNylonessa",
        category: 'crest',
        voice: "FemaleHigh4",
        wants: ["GoldenNecklace", "Ring", "GoldenBracelet"],
        gives: "GoldKey",
        text: {
            intro: "My jewels are gone, it is quite a mess. Find them now, or face my stress!",
            progress: "That shines a bit, but not enough. Bring the rest, I've lost my stuff!",
            conclusion: "All returned, my wrath at bay. Here's your key, now go away."
        }
    },
    OrangePicker: {
        name: "OrangePicker",
        sprite: "OrangePicker",
        category: 'crest',
        voice: "Female",
        wants: ["Orange", "Orange", "Orange"],
        gives: "OrangeJuice",
        text: {
            intro: "Wanna squeeze something sweet and bold? I've got oranges begging to be rolled.",
            progress: "You're getting close, the zest is right. A few more fruits to squeeze real tight!",
            conclusion: "Juice is flowing, what a treat. Here's your glass, fresh and neat."
        }
    },
    PearPicker: {
        name: "PearPicker",
        sprite: "PearPicker",
        category: 'crest',
        voice: "Female6",
        wants: ["Pear", "Pear", "Pear"],
        gives: "Pie",
        text: {
            intro: "Looking for something firm and round? I've got pears all over the ground.",
            progress: "Mmm, juicy start, but not quite there. Bring me more, if you dare!",
            conclusion: "That basket's full and so am I. Here's your pear pie perfectly sly."
        }
    },
    ApplePicker: {
        name: "ApplePicker",
        sprite: "ApplePicker",
        category: 'crest',
        voice: "Female4",
        wants: ["Apple", "Apple", "Apple"],
        gives: "Pie",
        text: {
            intro: "Care to help me fill my sack? I'm picking apples round the back.",
            progress: "You're halfway there, don't make me pout. A few more apples, then we make out... the pie, I mean.",
            conclusion: "You filled my basket, oh what a thrill! Here's your pie, hot and ready. Fresh from the still."
        }
    },
    TheTourist: {
        name: "TheTourist",
        sprite: "TheTourist",
        category: 'crest',
        voice: "Female3",
        wants: ["Postcard", "Postcard", "Postcard"],
        gives: "PinkKey",
        text: {
            intro: "Oh, the world beyond, so vast! Show me postcards from your past!",
            progress: "What a view, but not the set. I'm sure there's more I haven't met!",
            conclusion: "All three sights? You've seen the scene! Here's a key to lands unseen."
        }
    },
    DiamondBuyer: {
        name: "DiamondBuyer",
        sprite: "DiamondBuyer",
        category: 'crest',
        voice: "FemaleHigh4",
        wants: ["Diamond", "Diamond"],
        gives: "Banknote10",
        text: {
            intro: "Diamonds sparkle, cold and grand. Two for ten, just as planned!",
            progress: "That one's bright, but I need more. Bring the second, then we're sure.",
            conclusion: "Brilliant pair, the deal is done. Ten castle marks, now go have fun."
        }
    },
    RubyBuyer: {
        name: "RubyBuyer",
        sprite: "RubyBuyer",
        category: 'crest',
        voice: "Female6",
        wants: ["Ruby", "Ruby"],
        gives: "Banknote10",
        text: {
            intro: "Red as fire and twice as rare. Two rubies, and you'll get your share!",
            progress: "That one's lovely, but I need two. Bring the next, and we'll be through.",
            conclusion: "Gems complete, a flawless score. Ten castle marks, now out the door!"
        }
    },
    EmeraldBuyer: {
        name: "EmeraldBuyer",
        sprite: "EmeraldBuyer",
        category: 'crest',
        voice: "Female4",
        wants: ["Emerald", "Emerald"],
        gives: "Banknote10",
        text: {
            intro: "Shiny green and oh so bright. Two of those, and the price is right!",
            progress: "One's a start, but don't be slow. I need a pair before I show.",
            conclusion: "Two gems in hand? You've got the flair. Ten castle marks, a tidy affair."
        }
    },
    TaxCollectress: {
        name: "TaxCollectress",
        sprite: "TaxCollectress",
        category: 'crest',
        voice: "GlaDOS",
        wants: ["Banknote10", "Banknote10", "Banknote10"],
        gives: "Document",
        text: {
            intro: "Before you venture out for glory, pay what's due. That's the story.",
            progress: "Still in debt, that will not do. I need the full sum, not just a few.",
            conclusion: "Taxes paid, your path is clear. Here's your paper, now disappear."
        }
    },
    AuntieHauntie: {
        name: "AuntieHauntie",
        sprite: "AuntieHauntie",
        category: 'crest',
        voice: "Princess",
        wants: ["Mirror", "Lipstick"],
        gives: "BlackLeatherBoots",
        text: {
            intro: "Hey Auntie Hauntie, I'll bring you the mirror so you will see I am the prettiest of them all. And some better lipstick will not hurt your appearance.",
            progress: "I have more stuff for you. Just wait a minute.",
            conclusion: "Thanks for the boots, Auntie Hauntie. You are hot enough even without them."
        }
    },
    TaoLibrarian: {
        name: "TaoLibrarian",
        sprite: "TaoLibrarian",
        category: 'crest',
        voice: "Female2",
        wants: ["Spectacles"],
        gives: "TaoBook",
        text: {
            intro: "Wisdom fades without the look. Fetch my specs, then get your book!",
            progress: null,
            conclusion: "The frames fit nice, the style is sleek. Here's your book, ancient and chic."
        }
    },
    SpaceMajor: {
        name: "SpaceMajor",
        sprite: "SpaceMajor",
        category: 'crest',
        voice: "Female",
        wants: ["StarDestroyer", "StarDestroyer", "StarDestroyer"],
        gives: "Revolver",
        text: {
            intro: "The galaxy burns and I need more boom. Fetch me power to seal their doom!",
            progress: "A mighty ship, but more to go. I need the fleet to strike the blow!",
            conclusion: "The fleet is set, the stars align. Here's an old relic, its kick is fine."
        }
    },
    PoLice: {
        name: "PoLice",
        sprite: "PoLice",
        category: 'crest',
        voice: "Female2",
        wants: ["Ammo", "Revolver"],
        gives: "Handcuffs",
        text: {
            intro: "I don't need cuffs when I've got a gun. You bring the firepower, I'll bring the fun.",
            progress: "That's a start, but I need both. Don't keep me waiting, bring the full load.",
            conclusion: "Locked and loaded, justice served. These cuffs are yours, if you've got the nerve."
        }
    },
    BeerMaid: {
        name: "BeerMaid",
        sprite: "BeerMaid",
        category: 'crest',
        voice: "Female",
        wants: ["SmallBarrel", "SmallBarrel", "SmallBarrel"],
        gives: "GlassOfBeer",
        text: {
            intro: "How's a maid to pour a brew, with all my barrels lost from view?",
            progress: "One keg found, but that's too few. I need more to serve the crew!",
            conclusion: "The barrels are back, the beer is near! Take this glass and spread some cheer!"
        }
    },
    PlayfulDominatrix: {
        name: "PlayfulDominatrix",
        sprite: "PlayfulDominatrix",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Handcuffs", "Whip", "BlackLeatherBoots"],
        gives: "BlackLatexpanties",
        text: {
            intro: "In the mood and feelin' bold? Bring my toys! I like control.",
            progress: "One toy's nice, but I'm not through. I need the rest to play with you!",
            conclusion: "You brought them all, what a tease. Here's something shiny, just to please."
        }
    },
    Saddie: {
        name: "Saddie",
        sprite: "Saddie",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Candle", "Candle", "Candle"],
        gives: "GoldCoin",
        text: {
            intro: "Darkness fills this ghostly place, candles please to light my space!",
            progress: "One small flame, yet shadows loom. More candles please, dispel this gloom!",
            conclusion: "Candles burn, the shadows flee! Take this gold, no use to me."
        }
    },
    TransGrey: {
        name: "TransGrey",
        sprite: "TransGrey",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GreyLatexPanties"],
        gives: "GreyCertificate",
        text: {
            intro: "Transparent panties, grey and sleek! Lost somewhere, please take a peek!",
            progress: null,
            conclusion: "Panties retrieved, you've made my day! Grey certificate, yours today."
        }
    },
    YellowTransa: {
        name: "YellowTransa",
        sprite: "YellowTransa",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["YellowLatexPanties"],
        gives: "YellowCertificate",
        text: {
            intro: "Transparent panties, golden glow! Find them quick, they're lost, you know!",
            progress: null,
            conclusion: "Panties returned, what a thrill! Yellow certificate, yours to fulfill."
        }
    },
    TransRed: {
        name: "TransRed",
        sprite: "TransRed",
        category: 'crest',
        voice: "Female2",
        wants: ["TransRedLatexPanties"],
        gives: "RedCertificate",
        text: {
            intro: "Transparent panties, burning red! Find them fast, I need them to wear tonight, in bed.",
            progress: null,
            conclusion: "Panties secured, style's reclaimed! Red certificate, proudly named."
        }
    },
    TransWhite: {
        name: "TransWhite",
        sprite: "TransWhite",
        category: 'crest',
        voice: "Female",
        wants: ["WhiteLatexPanties"],
        gives: "WhiteCertificate",
        text: {
            intro: "Transparent panties, pure and white! Lost somewhere, find them tonight!",
            progress: null,
            conclusion: "Panties found, you've done just right! A certificate yours, shining bright!"
        }
    },
    BlackTransa: {
        name: "BlackTransa",
        sprite: "BlackTransa",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["TransBlackLatexPanties"],
        gives: "BlackCertificate",
        text: {
            intro: "My transparent panties, lost and black! Find them quickly, bring them back!",
            progress: null,
            conclusion: "You've saved my style, you've served me right! Here's a certificate for your delight."
        }
    },
    TransBossa: {
        name: "TransBossa",
        sprite: "TransBossa",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["RedCertificate", "WhiteCertificate", "BlackCertificate", "GreyCertificate", "YellowCertificate"],
        gives: "EmeraldKey",
        text: {
            intro: "Trans parent sisters need your aid, show your certificates, debts repaid!",
            progress: "Certificates seen, but more I ask. Complete the set, fulfill your task!",
            conclusion: "All certified, transparent cheer! Take this key, your path is clear, like my outfit."
        }
    },
    GoldMelta: {
        name: "GoldMelta",
        sprite: "GoldMelta",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldOre", "GoldOre", "GoldOre"],
        gives: "GoldBar",
        text: {
            intro: "Hot as fire, gold I mold! Bring me ore, the purest gold!",
            progress: "That's good ore, but I need more. Keep on digging, gold's in store!",
            conclusion: "Ore complete, melted fine! Take this gold bar, gleaming shine!"
        }
    },
    BarGuest: {
        name: "BarGuest",
        sprite: "BarGuest",
        category: 'crest',
        voice: "Female2",
        wants: ["BlackLatexpanties", "BlackLatexBra"],
        gives: "Wine",
        text: {
            intro: "I've got a date that's hot tonight, fetch lingerie that's sleek and tight!",
            progress: "That's one piece, sizzling and sweet. Find the rest, my look's incomplete!",
            conclusion: "Perfect lingerie, style divine! Now take this bottle, share my wine!"
        }
    },
    Arcadia: {
        name: "Arcadia",
        sprite: "Arcadia",
        category: 'crest',
        voice: "Female",
        wants: ["ArcadeToken", "ArcadeToken", "ArcadeToken"],
        gives: "TreeOfLifeBook",
        text: {
            intro: "I'm close to beating GalactiX's high score! Fetch me tokens, just a few more!",
            progress: "That's great, honey, but not quite there. Find more tokens if you care!",
            conclusion: "High score conquered, glory mine! Here's a book that's wise and fine."
        }
    },
    Treasuress: {
        name: "Treasuress",
        sprite: "Treasuress",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "BlackLeatherBoot",
        text: {
            intro: "Gold bars missing, treasures lost! Find them now at any cost!",
            progress: "Some gold returned, yet not all found. Keep searching, look around!",
            conclusion: "Gold restored, my joy acute! Here's your long lost leather boot."
        }
    },
    EmoTina: {
        name: "EmoTina",
        sprite: "EmoTina",
        category: 'crest',
        voice: "Female2",
        wants: ["TaoBook", "YinYangBook", "TreeOfLifeBook"],
        gives: "Rose",
        text: {
            intro: "At graveside quiet, time to spare. Bring me books, I read with care.",
            progress: "One good book, but I need more. Wisdom waits, bring two or four!",
            conclusion: "Books in hand, my mind set free. A rose from graveside blooms for thee!"
        }
    },
    SpyedHer: {
        name: "SpyedHer",
        sprite: "SpyedHer",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["BabyGreenSpider", "BabyGreenSpider", "BabyGreenSpider", "BabyGreenSpider", "BabyGreenSpider"],
        gives: "Dagger",
        text: {
            intro: "My spiderlings lost, oh what a plight! Find them quick, they're out of sight within this maze, my poor heart aches, return them now, for all our sakes!",
            progress: "You've found some babies, but don't rest. Find the others, that's your test!",
            conclusion: "My babies safe, I'm filled with glee! A dagger found, it's yours from me!"
        }
    },
    NeenJay: {
        name: "NeenJay",
        sprite: "NeenJay",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Dagger", "Dagger", "Dagger"],
        gives: "Mace",
        text: {
            intro: "Silent blades, sleek and bright. Daggers three complete my night!",
            progress: "One dagger sharp, but not enough. More blades needed, swift and tough!",
            conclusion: "Daggers received, my stealth secure. Take this mace, fierce strikes assured!",
        }
    },
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
        wants: ["Document", "Document", "Document", "Document"],
        gives: "GoldKey",
        text: {
            intro: "Princess brave, your path awaits, but first your papers seal your fate. Four proofs I'll see, four tests to pass, without them here you'll never pass!",
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
    Poola: {
        name: "Poola",
        sprite: "Poola",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "ManaSkill",
        text: {
            intro: "Wanna boost that mana pool? Toss a coin and join me in the cool!",
            progress: null,
            conclusion: "Splash and sparkle, magic's rule! Your mana's deep like this bikini pool."
        }
    },
    DaFensa: {
        name: "DaFensa",
        sprite: "DaFensa",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "Defense",
        text: {
            intro: "Defense is the best defense, I always say. One small coin, and you're on your way!",
            progress: null,
            conclusion: "You paid the price, the shield is yours. Stand your ground, hold your course!"
        }
    },
    MoonPriestess: {
        name: "MoonPriestess",
        sprite: "MoonPriestess",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Fire and water, magic's art. One gold coin, lessons start!",
            progress: null,
            conclusion: "The coin is yours no longer mine. Your power grows, your sparks align."
        }
    },
    Axees: {
        name: "Axees",
        sprite: "Axees",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Learn to strike with mighty hacks! Just one coin to wield your axe!",
            progress: null,
            conclusion: "Coin well spent, your skills are prime! Now axe your foes every time!"
        }
    },
    LatexNurse: {
        name: "LatexNurse",
        sprite: "LatexNurse",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "For a special price, your health I'll raise. A gold coin here will earn my praise!",
            progress: null,
            conclusion: "Coin received, your health enhanced! Feel the strength as life advanced."
        }
    },
    CemetaryPet: {
        name: "CemetaryPet",
        sprite: "CemetaryPet",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Skull", "Skull", "Skull", "Skull", "Skull"],
        gives: "HeartSkill",
        level: 2,
        text: {
            intro: "Bring me skulls, the bones of fate. Death I gather, life I create!",
            progress: "Good skulls gathered, more I seek. Find the rest, no time to speak!",
            conclusion: "Skulls complete, their power mine! Health now yours, your heart divine!"
        }
    },
    DragonMotha: {
        name: "DragonMotha",
        sprite: "DragonMotha",
        category: 'crest',
        voice: "Female",
        wants: ["BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon"],
        gives: "Magic",
        level: 2,
        text: {
            intro: "My dragonlings scattered, what a maze! Find them fast, they're lost for days!",
            progress: "You're doing well, but more to find. Keep searching, dragons left behind!",
            conclusion: "All dragons safe, my joy immense! Dragon magic, your recompense!"
        }
    },
    ManaCookTrainer: {
        name: "ManaCookTrainer",
        sprite: "ManaCookTrainer",
        category: 'crest',
        voice: "Female2",
        wants: ["Mushroom", "Mushroom", "Mushroom"],
        gives: "ManaSkill",
        level: 2,
        text: {
            intro: "Magic mushrooms, dark and bright. Poisonous fungi, my delight!",
            progress: "These mushrooms thrill, but still too few. Fetch some more, their magic true!",
            conclusion: "Poison gathered, potent brew! More mana now, bestowed to you."
        }
    },
    MeanJah: {
        name: "MeanJah",
        sprite: "MeanJah",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Shuriken", "Shuriken", "Shuriken"],
        gives: "Attack",
        level: 2,
        text: {
            intro: "Deadly stars, sharp and true. Three shurikens, that's your cue!",
            progress: "Good throw, Princess, still need more! Fetch more stars, your aim will soar!",
            conclusion: "Stars complete, your strikes precise! Now learn to attack swift and nice."
        }
    },
    Muscula: {
        name: "Muscula",
        sprite: "Muscula",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["DumbBell", "DumbBell"],
        gives: "Defense",
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