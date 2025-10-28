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
    "DestroyWeapon", "DestroyArmor", "DrainMana", "FeatherFall", "Radar", "VeryLucky", "Death",
    "ReduceMana", "ReduceManaMore",
];

const SHRINE_TYPE = {
    WhichWitch: {
        name: "WhichWitch",
        sprite: "WhichWitch",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 5000,
        level: 3,
        text: "Kneel at the circle and count true. Pay 5000 gold, and I will teach you magic, starting with Fireball. No refunds, sizzling is normal.",
        introduce: true,
        voice: "Female4",
    },
    TankaDaFensa: {
        name: "TankaDaFensa",
        sprite: "TankaDaFensa",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 5000,
        level: 3,
        text: "Best defense is offense. And being armored as a tank. For 5000 gold I will show you details.",
        introduce: true,
        voice: "Female",
    },
    SnakeDagger: {
        name: "SnakeDagger",
        sprite: "SnakeDagger",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 5000,
        level: 3,
        text: "Learn to use fangs. 5000 gold.",
        introduce: true,
        voice: "FemaleVeryLow4",
    },
    ManaHeels: {
        name: "ManaHeels",
        sprite: "ManaHeels",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 5000,
        level: 3,
        text: "Do you want to taste my juice? 5000 gold only.",
        introduce: true,
        voice: "FemaleVeryLow6",
    },
    HealingHeels: {
        name: "HealingHeels",
        sprite: "HealingHeels",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 5000,
        level: 3,
        text: "Just looking at my heels wil heal you, 5000 gold.",
        introduce: true,
        voice: "Female4",
    },
    CrouchingHeart: {
        name: "CrouchingHeart",
        sprite: "CrouchingHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 5000,
        level: 2,
        text: "Black or read heart? As long as it beats. It beats for 5000 gold.",
        introduce: true,
        voice: "Female4",
    },
    RedScubaDefenseless: {
        name: "RedScubaDefenseless",
        sprite: "RedScubaDefenseless",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 5000,
        level: 2,
        text: "Do I look defenseless to you? While you were staring at my tits, I could put a knife in your guts. I'll show you how for 5000 gold.",
        introduce: true,
        voice: "Female",
    },
    SpyedHerAttack: {
        name: "SpyedHerAttack",
        sprite: "SpyedHerAttack",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 5000,
        level: 2,
        text: "Attack from behind, from darkness, from cover, never play fair. 5000 gold only.",
        introduce: true,
        voice: "FemaleVeryLow4",
    },
    RedWitchMana: {
        name: "RedWitchMana",
        sprite: "RedWitchMana",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 5000,
        level: 2,
        text: "Do you want to taste my cooking? 5000 gold only.",
        introduce: true,
        voice: "FemaleVeryLow6",
    },
    KnowledgeIsPower: {
        name: "KnowledgeIsPower",
        sprite: "KnowledgeIsPower",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 5000,
        level: 2,
        text: "Knowledge is power. Knowledge costs 5000 gold.",
        introduce: true,
        voice: "Female4",
    },
    HeartPendantCorset: {
        name: "HeartPendantCorset",
        sprite: "HeartPendantCorset",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 5000,
        level: 1,
        text: "I am a faith healer. My faith is worth 5000 gold.",
        introduce: true,
        voice: "Female4",
    },
    BlueHeartMountainHealer: {
        name: "BlueHeartMountainHealer",
        sprite: "BlueHeartMountainHealer",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 4500,
        level: 1,
        text: "I hold a blue heart but you can have a true heart, for 4500 gold.",
        introduce: true,
        voice: "Female3",
    },
    MountainGreenHeart: {
        name: "MountainGreenHeart",
        sprite: "MountainGreenHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 4000,
        level: 1,
        text: "Better to have a green heart, than no heart, 4000 gold.",
        introduce: true,
        voice: "Female3",
    },
    HalfLifeScrollSeller: {
        name: "HalfLifeScrollSeller",
        sprite: "HalfLifeScrollSeller",
        which: "HalfLife",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 1999,
        voice: "FemaleLow3",
        text: "Siphon their health away? HalfLife scroll - 1999 gold"
    },
    VeryLuckyScrollSeller2: {
        name: "VeryLuckyScrollSeller2",
        sprite: "VeryLuckyScrollSeller2",
        which: "VeryLucky",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 777,
        voice: "FemaleHigh3",
        text: "Do you want to get lucky? Very Lucky scroll - 777 gold"
    },
    VeryLuckyScrollSeller1: {
        name: "VeryLuckyScrollSeller1",
        sprite: "VeryLuckyScrollSeller1",
        which: "VeryLucky",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 777,
        voice: "FemaleHigh4",
        text: "Do you want to get lucky? Very Lucky scroll - 777 gold"
    },
    DeathScrollSeller: {
        name: "DeathScrollSeller",
        sprite: "DeathScrollSeller",
        which: "Death",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 2999,
        voice: "FemaleVeryLow6",
        text: "The art of mass destruction. Death scroll - 2999 gold"
    },
    ArmorScrollSeller2: {
        name: "ArmorScrollSeller2",
        sprite: "ArmorScrollSeller2",
        which: "BoostArmor",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 666,
        voice: "Female6",
        text: "Penetration protection. Boost Armor scroll - 666 gold"
    },
    ArmorScrollSeller1: {
        name: "ArmorScrollSeller1",
        sprite: "ArmorScrollSeller1",
        which: "BoostArmor",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 666,
        voice: "Female4",
        text: "Make yourself hard to penetrate. Boost Armor scroll - 666 gold"
    },
    InvisibilityScrollSeller2: {
        name: "InvisibilityScrollSeller2",
        sprite: "InvisibilityScrollSeller2",
        which: "Invisibility",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 999,
        voice: "FemaleLow3",
        text: "Do you see how nobody notices me? Invisibility scroll - 999 gold"
    },
    InvisibilityScrollSeller1: {
        name: "InvisibilityScrollSeller1",
        sprite: "InvisibilityScrollSeller1",
        which: "Invisibility",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 999,
        voice: "FemaleVeryLow3",
        text: "Want to be as invisible as me? Invisibility scroll - 999 gold"
    },
    BlackWeaponScrollSeller: {
        name: "BlackWeaponScrollSeller",
        sprite: "BlackWeaponScrollSeller",
        which: "BoostWeapon",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 666,
        voice: "FemaleHigh4",
        text: "Boost weapon scroll - 666 gold"
    },
    BoostWeaponScrollSeller: {
        name: "BoostWeaponScrollSeller",
        sprite: "BoostWeaponScrollSeller",
        which: "BoostWeapon",
        category: 'crest',
        interactionCategory: 'scrollshop',
        introduce: true,
        price: 666,
        voice: "FemaleHigh3",
        text: "Boost weapon scroll - 666 gold"
    },
    LatexHeart: {
        name: "LatexHeart",
        sprite: "LatexHeart",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 3500,
        level: 1,
        text: "I am sharing my metal heart with you, 3500 gold.",
        introduce: true,
        voice: "Female3",
    },
    MaskedDefense: {
        name: "MaskedDefense",
        sprite: "MaskedDefense",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 3500,
        level: 1,
        text: "Best defense is don't be seen. For 3500 gold I will show you some tricks.",
        introduce: true,
        voice: "Female",
    },
    ThornPriestess: {
        name: "ThornPriestess",
        sprite: "ThornPriestess",
        which: "magic",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillFireball",
        price: 3500,
        level: 1,
        text: "Follow me for more magic. 3500 gold.",
        introduce: true,
        voice: "StrangeFemale",
    },
    ThornMana: {
        name: "ThornMana",
        sprite: "ThornMana",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 3500,
        level: 1,
        text: "Drink this cute pinky brew to spit more fire? Dirt cheap. 3500 gold only.",
        introduce: true,
        voice: "FemaleVeryLow6",
    },
    DeathWarder: {
        name: "DeathWarder",
        sprite: "DeathWarder",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 3500,
        level: 1,
        text: "Murder and death. 3500 gold.",
        introduce: true,
        voice: "FemaleVeryLow4",
    },
    TransManaRedLast: {
        name: "TransManaRedLast",
        sprite: "TransManaRedLast",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 3000,
        level: 1,
        text: "Last chance to buy mana upgrade before Underworld? Cheap. 3000 gold only.",
        introduce: true,
        voice: "FemaleLow3",
    },
    GlassGirl: {
        name: "GlassGirl",
        sprite: "GlassGirl",
        which: "defense",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillShield",
        price: 3000,
        level: 1,
        text: "I am so fragile. For 3000 gold I will teach you to be more careful. Like me.",
        introduce: true,
        voice: "FemaleLow5",
    },
    ProfAttacka: {
        name: "ProfAttacka",
        sprite: "ProfAttacka",
        which: "attack",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "SkillKick",
        price: 3000,
        level: 1,
        text: "Stick them with the pointy end. For 3000 gold I will show you where and how.",
        introduce: true,
        voice: "FemaleHigh3",
    },
    ChampagneMana: {
        name: "ChampagneMana",
        sprite: "ChampagneMana",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 3000,
        level: 1,
        text: "Wanna take a sip of bubbly? 3000 gold and your mana pool will bubble up.",
        introduce: true,
        voice: "Female5",
    },
    CyanManaRedhead: {
        name: "CyanManaRedhead",
        sprite: "CyanManaRedhead",
        which: "mana",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "ManaSkill",
        price: 3000,
        level: 1,
        text: "Do you have dry mouth? 3000 gold and I will let you taste my brew.",
        introduce: true,
        voice: "Female4",
    },
    AlpineClimber: {
        name: "AlpineClimber",
        sprite: "AlpineClimber",
        which: "health",
        category: 'crest',
        interactionCategory: 'shrine',
        inventorySprite: "HeartSkill",
        price: 3000,
        level: 1,
        text: "Climbing is good for your health? 3000 gold and I will guide you to become more robust.",
        introduce: true,
        voice: "FemaleLow2",
    },
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
    HiddenEntrance: {
        name: "HiddenEntrance",
        sprite: "HiddenEntrance",
        category: 'crest',
        voice: "FemaleLow4",
        text: "If you can't fin the hidden entrance, then you are hopeless. You will die here.",
        interactionCategory: "oracle",
    },
    DemolitionWhite: {
        name: "DemolitionWhite",
        sprite: "DemolitionWhite",
        category: 'crest',
        voice: "FemaleLow6",
        text: "Be careful with bombs. They are in limited supply. There are no spares.",
        interactionCategory: "oracle",
    },
    MetalDressWalking: {
        name: "MetalDressWalking",
        sprite: "MetalDressWalking",
        category: 'crest',
        voice: "FemaleLow5",
        text: "I am walking, but you should maybe be jumping.",
        interactionCategory: "oracle",
    },
    BoredGame: {
        name: "BoredGame",
        sprite: "BoredGame",
        category: 'crest',
        voice: "FemaleLow3",
        text: "Are you bored of this game yet? No? Good. Because it's not over.",
        interactionCategory: "oracle",
    },
    ClosedCastleGate: {
        name: "ClosedCastleGate",
        sprite: "ClosedCastleGate",
        category: 'crest',
        voice: "Princess",
        text: "Main gate is shut. I need to find another entrance to the Hauntessa's castle. Let's explore.",
        interactionCategory: "oracle",
    },
    DarthSkulla: {
        name: "DarthSkulla",
        sprite: "DarthSkulla",
        category: 'crest',
        voice: "FemaleLow4",
        text: "This is a one way descent, love. So think before you go on. No turning back from here.",
        interactionCategory: "oracle",
    },
    BlackCatsuitDarkaSanctuary: {
        name: "BlackCatsuitDarkaSanctuary",
        sprite: "BlackCatsuitDarkaSanctuary",
        category: 'crest',
        voice: "Female2",
        text: "You came a long way, honey. But it's far from over yet.",
        interactionCategory: "oracle",
    },
    Pigtails: {
        name: "Pigtails",
        sprite: "Pigtails",
        category: 'crest',
        voice: "Female4",
        text: "Thanks for being my hairdresser. Good job.",
        interactionCategory: "oracle",
    },
    FashionDomme: {
        name: "FashionDomme",
        sprite: "FashionDomme",
        category: 'crest',
        voice: "Female3",
        text: "Did you internalize the skill of hiding behind the pillar yet? A lifesaver, really. You should try it.",
        interactionCategory: "oracle",
    },
    EquestrienneOracle: {
        name: "EquestrienneOracle",
        sprite: "EquestrienneOracle",
        category: 'crest',
        voice: "Female6",
        text: "Magic users are mor susceptible to brute force, and violent creatures more vulnerable to magic. Good to know, right?",
        interactionCategory: "oracle",
    },
    OldEnoughToUseScrolls: {
        name: "OldEnoughToUseScrolls",
        sprite: "OldEnoughToUseScrolls",
        category: 'crest',
        voice: "Female6",
        text: "Are you old enough to use scrolls?",
        interactionCategory: "oracle",
    },
    StackedScroll: {
        name: "StackedScroll",
        sprite: "StackedScroll",
        category: 'crest',
        voice: "Female4",
        text: "Some scrolls stack nicely to make you extremelly powerfull.",
        interactionCategory: "oracle",
    },
    ScrollCombo: {
        name: "ScrollCombo",
        sprite: "ScrollCombo",
        category: 'crest',
        voice: "Female3",
        text: "Some scrolls are more powerful in combination with other scrolls.",
        interactionCategory: "oracle",
    },
    NotAllScrollsBlackCatsuitDarka: {
        name: "NotAllScrollsBlackCatsuitDarka",
        sprite: "NotAllScrollsBlackCatsuitDarka",
        category: 'crest',
        voice: "Female5",
        text: "You can't afford to buy all scrolls. Plan carefully. Play to your strengths. Patch your weaknesses. Hide.",
        interactionCategory: "oracle",
    },
    BlackBikiniPool: {
        name: "BlackBikiniPool",
        sprite: "BlackBikiniPool",
        category: 'crest',
        voice: "FemaleHigh",
        text: "I was deceived. There is no sun here. Where are the beaches? I want my money back.",
        interactionCategory: "oracle",
    },
    ApparitiaLessEvil: {
        name: "ApparitiaLessEvil",
        sprite: "ApparitiaLessEvil",
        category: 'crest',
        voice: "Apparitia",
        text: "Hauntessa exiled us from the Hauntosphere, because we were not evil enough. Help us, Princess.",
        interactionCategory: "oracle",
    },
    StaircaseTransa: {
        name: "StaircaseTransa",
        sprite: "StaircaseTransa",
        category: 'crest',
        voice: "FemaleHigh",
        text: "You realized you can't be followed on the staircase by monsters who cannot fly? Right?",
        interactionCategory: "oracle",
    },
    ExtraBabe: {
        name: "ExtraBabe",
        sprite: "ExtraBabe",
        category: 'crest',
        voice: "FemaleLow6",
        text: "You survived! How cute. Go on now, further adventure awaits.",
        interactionCategory: "oracle",
    },
    JumpHiny: {
        name: "JumpHiny",
        sprite: "JumpHiny",
        category: 'crest',
        voice: "FemaleLow4",
        text: "Conclude your business. Once you jump, there will be no way back.",
        interactionCategory: "oracle",
    },
    GhostOracle: {
        name: "GhostOracle",
        sprite: "GhostOracle",
        category: 'crest',
        voice: "FemaleHigh4",
        text: "Only one way forward. Jump!.",
        interactionCategory: "oracle",
    },
    FaceDragon: {
        name: "FaceDragon",
        sprite: "FaceDragon",
        category: 'crest',
        voice: "FemaleHigh3",
        text: "Only those who defeat the dragon may proceed.",
        interactionCategory: "oracle",
    },
    MissRoseDescent: {
        name: "MissRoseDescent",
        sprite: "MissRoseDescent",
        category: 'crest',
        voice: "FemaleHigh6",
        text: "Once you descent into the Underworld you will not be able to return to the castle.",
        interactionCategory: "oracle",
    },
    SlowCousin: {
        name: "SlowCousin",
        sprite: "SlowCousin",
        category: 'crest',
        voice: "Female5",
        text: "You are progressing slowly, dear cousin.",
        interactionCategory: "oracle",
    },
    SternDomme: {
        name: "SternDomme",
        sprite: "SternDomme",
        category: 'crest',
        voice: "Female3",
        text: "Some spells affect only the monsters which are close by. Lure them close to you then cast it.",
        interactionCategory: "oracle",
    },
    PinkBalance: {
        name: "PinkBalance",
        sprite: "PinkBalance",
        category: 'crest',
        voice: "Female2",
        text: "Magic seems alluring, but then it runs out. And you are all alone in a corner with a deadly beast in front of you.",
        interactionCategory: "oracle",
    },
    CorneredBabe: {
        name: "CorneredBabe",
        sprite: "CorneredBabe",
        category: 'crest',
        voice: "Female",
        text: "Don't get cornered. Save some mana for the hard times.",
        interactionCategory: "oracle",
    },
    ButterFlyLadyOracle: {
        name: "ButterFlyLadyOracle",
        sprite: "ButterFlyLadyOracle",
        category: 'crest',
        voice: "Female6",
        text: "I think I saw a butterfly in this maze? Keep an eye out.",
        interactionCategory: "oracle",
    },
    CaveDomme: {
        name: "CaveDomme",
        sprite: "CaveDomme",
        category: 'crest',
        voice: "FemaleHigh6",
        text: "You know you can still return to your castle, right?",
        interactionCategory: "oracle",
    },
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
        behaviourArguments: [10, ["wanderer"], 8, ["follower"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    SpiderGreen: {
        name: "SpiderGreen",
        texture: "SpiderGreen",
        model: "Spider",
        scale: 1.4 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.44,
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
        behaviourArguments: [10, ["wanderer"], 8, ["advancer"]],
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
        behaviourArguments: [10, ["wanderer"], 8, ["advancer"]],
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
        behaviourArguments: [10, ["wanderer"], 8, ["advancer"]],
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
        behaviourArguments: [10, ["wanderer"], 8, ["advancer"]],
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
    GreenWolf: {
        name: "Wolf",
        texture: "GreenWolf",
        model: "Wolf",
        scale: 1.6 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 40,
        attack: 40,
        magic: 0,
        defense: 15,
        xp: 60,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [8, ["wanderer"], 5, ["advancer"]],
        moveSpeed: 1.3,
        material: MATERIAL.greenFluence,
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
    CyGirl: {
        name: "CyGirl",
        model: "CyGirl",
        scale: 1.5 / 2 ** 5,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 10,
        health: 40,
        attack: 45,
        magic: 20,
        defense: 8,
        xp: 75,
        directMagicDamage: false,
        caster: true,
        attackSound: "FemaleAttack3",
        hurtSound: "Ow",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 0.8,
        shootDistance: 8,
        stalkDistance: 5,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    AngrySheep: {
        name: "AngrySheep",
        model: "Sheep",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 100,
        magic: 0,
        defense: 0,
        xp: 50,
        directMagicDamage: false,
        attackSound: "Sheep",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
    },
    GreatChick: {
        name: "GreatChick",
        model: "Chicken",
        scale: 1 / 2 ** 5,
        rotateToNorth: -Math.PI / 2,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 125,
        magic: 0,
        defense: 0,
        xp: 65,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    GreatCat: {
        name: "GreatCat",
        model: "Cat",
        scale: 1.5 / 2 ** 7,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 150,
        magic: 0,
        defense: 0,
        xp: 75,
        directMagicDamage: false,
        attackSound: "AngryCat",
        hurtSound: "PainSqueek",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    GreatPig: {
        name: "GreatPig",
        model: "Pig",
        scale: 0.9 / 2 ** 1,
        rotateToNorth: -Math.PI / 2,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: null,
        mana: 0,
        health: 10,
        attack: 150,
        magic: 0,
        defense: 0,
        xp: 75,
        directMagicDamage: false,
        attackSound: "PigAttack",
        hurtSound: "PigSqueal",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standard,
    },
    Goblin: {
        name: "Goblin",
        model: "Goblin",
        scale: 1.01 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.SilverBar,
        mana: 11,
        health: 45,
        attack: 50,
        magic: 25,
        defense: 15,
        xp: 90,
        directMagicDamage: false,
        caster: true,
        shootDistance: 8,
        stalkDistance: 6,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    BigDragon: {
        name: "BigDragon",
        model: "Dragon2",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.15,
        fly: 0.50,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldBar,
        mana: 12,
        health: 50,
        attack: 50,
        magic: 30,
        defense: 20,
        xp: 100,
        caster: true,
        directMagicDamage: false,
        attackSound: "DragonRoar",
        hurtSound: "MonsterHurt",
        behaviourArguments: [12, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 10,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
    },
    SkeleDwarf: {
        name: "SkeleDwarf",
        model: "SkeleDwarf",
        scale: 1.2 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 50,
        attack: 60,
        magic: 0,
        defense: 20,
        xp: 100,
        directMagicDamage: false,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt3",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.2,
        material: MATERIAL.standardShine,
    },
    Astro: {
        name: "Astro",
        model: "Astro",
        scale: 1.5 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 5,
        health: 50,
        attack: 50,
        magic: 30,
        defense: 0,
        xp: 100,
        directMagicDamage: false,
        caster: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [7, ["wanderer"], 5, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 5,
        stalkDistance: 6,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    BigDragonBoss: {
        name: "BigDragon",
        model: "Dragon2",
        scale: 0.9 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.15,
        fly: 0.50,
        deathType: "BloodExplosion",
        boss: true,
        inventory: KEY_TYPE.Pearl,
        mana: 12,
        health: 50,
        attack: 50,
        magic: 30,
        defense: 20,
        xp: 100,
        caster: true,
        directMagicDamage: false,
        attackSound: "DragonRoar",
        hurtSound: "MonsterHurt",
        behaviourArguments: [12, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 10,
        stalkDistance: 8,
        material: MATERIAL.gold,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
    },
    NeverBlink: {
        name: "NeverBlink",
        model: "NeverBlink",
        scale: 1.25 / 2 ** 8,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.SilverBar,
        mana: 12,
        health: 48,
        attack: 61,
        magic: 25,
        defense: 10,
        xp: 120,
        caster: true,
        shootDistance: 8,
        stalkDistance: 6,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    EvilNun: {
        name: "EvilNun",
        model: "EvilNun",
        scale: 1.0 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldBar,
        mana: 13,
        health: 50,
        attack: 65,
        magic: 26,
        defense: 9,
        xp: 130,
        caster: true,
        shootDistance: 9,
        stalkDistance: 6,
        attackSound: "FemaleAttack2",
        hurtSound: "Ow",
        behaviourArguments: [11, ["wanderer"], 9, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Basilisk: {
        name: "Basilisk",
        model: "Basilisk",
        scale: 1.8 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 60,
        attack: 70,
        magic: 0,
        defense: 20,
        xp: 150,
        caster: false,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.9,
        material: MATERIAL.standardShine,
    },
    GreenBasilisk: {
        name: "GreenBasilisk",
        texture: "GreenBasilisk",
        model: "Basilisk",
        scale: 1.7 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 65,
        attack: 75,
        magic: 0,
        defense: 20,
        xp: 175,
        caster: false,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 0.99,
        material: MATERIAL.greenFluence,
    },
    Raptor: {
        name: "Raptor",
        model: "RAPTOR",
        scale: 1.8 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 0,
        health: 65,
        attack: 75,
        magic: 0,
        defense: 22,
        xp: 175,
        caster: false,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [8, ["wanderer"], 6, ["advancer"]],
        moveSpeed: 1.1,
        material: MATERIAL.standardShine,
    },
    DinoAir: {
        name: "DinoAir",
        model: "DinoAir",
        scale: 1.15 / 2 ** 2,
        rotateToNorth: 0,
        midHeight: 0.15,
        fly: 0.50,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldSphere,
        mana: 13,
        health: 65,
        attack: 70,
        magic: 32,
        defense: 20,
        xp: 200,
        caster: true,
        directMagicDamage: false,
        attackSound: "BirdScreech",
        hurtSound: "MonsterHurt",
        behaviourArguments: [12, ["wanderer"], 10, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 10,
        stalkDistance: 8,
        material: MATERIAL.standardShine,
        missile: Blue3D_Bouncer,
        missileType: COMMON_ITEM_TYPE.BlueBounceball,
    },
    NecroMorph: {
        name: "NecroMorph",
        model: "NecroMorph",
        scale: 0.85 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldSphere,
        mana: 13,
        health: 70,
        attack: 100,
        magic: 35,
        defense: 0,
        xp: 250,
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [17, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 0.8,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Hunteress: {
        name: "Hunteress",
        model: "Hunter",
        scale: 0.8 / 2 ** 1,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldSphere,
        mana: 11,
        health: 72,
        attack: 110,
        magic: 32,
        defense: 0,
        xp: 250,
        caster: true,
        shootDistance: 15,
        stalkDistance: 17,
        attackSound: "FemaleAttack1",
        hurtSound: "Ow",
        behaviourArguments: [17, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 0.8,
        material: MATERIAL.standardShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    GhostMinion: {
        name: "GhostMinion",
        model: "GhostFace",
        scale: 1.82 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.SilverBar,
        mana: 10,
        health: 75,
        attack: 100,
        magic: 35,
        defense: 20,
        xp: 250,
        shootDistance: 7,
        stalkDistance: 8,
        caster: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [10, ["wanderer"], 7, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.standard,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    Hulk: {
        name: "Hulk",
        model: "Hulk",
        scale: 1.5 / 2 ** 6,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.GoldSphere,
        mana: 0,
        health: 80,
        attack: 120,
        magic: 0,
        defense: 25,
        xp: 250,
        caster: false,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 4, ["advancer"]],
        moveSpeed: 1.0,
        material: MATERIAL.greenShine,
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
    ManaGoat: {
        name: "ManaGoat",
        category: "action_item",
        which: "mana",
        element: "Goat",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "Goat_baseColor",
        material: MATERIAL.standard,
        inventorySprite: "ManaGoat",
        text: "Let's sacrifice it for magic."
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
    RedCandle: {
        name: "RedCandle",
        category: "interaction_item",
        element: "CANDLE",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "RedCandleWax",
        material: MATERIAL.standard,
        inventorySprite: "RedCandle",
        text: "Simple red wax candle. I can light it. Or not."
    },
    BlueCandle: {
        name: "BlueCandle",
        category: "interaction_item",
        element: "CANDLE",
        scale: 1.0 / 2 ** 2,
        glueToFloor: true,
        texture: "BlueCandleWax",
        material: MATERIAL.standard,
        inventorySprite: "BlueCandle",
        text: "Simple blue wax candle. I can light it. Or not."
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
        text: "Wow. I would wear that but it would ruin my hairdo."
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
    Scroll: {
        name: "Scroll",
        category: "interaction_item",
        element: "SCROLL",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "ScrollTexture",
        material: MATERIAL.paper,
        inventorySprite: "Scroll",
        text: "It's empty? I should write a poem."
    },
    Blood: {
        name: "Blood",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "BloodTexture",
        inventorySprite: "Blood",
        material: MATERIAL.redShine,
        text: "Disgusting. Give it to someone else."
    },
    Bone: {
        name: "Bone",
        category: "interaction_item",
        element: "BONE",
        scale: 1.0 / 2 ** 4,
        glueToFloor: true,
        texture: "Marble",
        material: MATERIAL.standard,
        inventorySprite: "Bone",
        text: "Bone. Human? Or animal? I don't know. Does it matter to you?"
    },
    TropicalFish: {
        name: "TropicalFish",
        category: "interaction_item",
        element: "FISH",
        scale: 1.5 / 2 ** 4,
        glueToFloor: true,
        texture: "FishTexture",
        material: MATERIAL.standard,
        inventorySprite: "TropicalFish",
        text: "Also smelly, but more colors."
    },
    Shield: {
        name: "Shield",
        category: "interaction_item",
        element: "SHIELD",
        scale: 1 / 2 ** 5,
        glueToFloor: true,
        texture: "ScrapedMetal",
        inventorySprite: "Shield",
        material: MATERIAL.silver,
        text: "I'll put that shield in the bag."
    },
    Poison: {
        name: "Poison",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "GreenMetal",
        inventorySprite: "Poison",
        material: MATERIAL.greenFluence,
        text: "Yikes. Don't drink this. It's deadly."
    },
    IceCube: {
        name: "IceCube",
        category: "interaction_item",
        element: "CUBE_CENTERED",
        scale: 1.99 / 2 ** 5,
        glueToFloor: true,
        texture: "IceTexture",
        inventorySprite: "IceCube",
        material: MATERIAL.standardShine,
        text: "Ice cube. Cold?"
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
    GreenLiquid: {
        name: "GreenLiquid",
        category: "interaction_item",
        element: "ErlenFlask",
        scale: 1 / 2 ** 6,
        glueToFloor: true,
        texture: "GreenLiquid",
        inventorySprite: "GreenLiquid",
        material: MATERIAL.greenShine,
        text: "A flask of vile looking green liquid."
    },
    RedLiquid: {
        name: "RedLiquid",
        category: "interaction_item",
        element: "ErlenFlask",
        scale: 1 / 2 ** 6,
        glueToFloor: true,
        texture: "RedLiquid2",
        inventorySprite: "RedLiquid",
        material: MATERIAL.redShine,
        text: "A flask of vile looking red liquid."
    },
    BlueLiquid: {
        name: "BlueLiquid",
        category: "interaction_item",
        element: "ErlenFlask",
        scale: 1 / 2 ** 6,
        glueToFloor: true,
        texture: "BlueLiquid2",
        inventorySprite: "BlueLiquid",
        material: MATERIAL.blueShine,
        text: "A flask of vile looking blue liquid."
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
    Butterfly: {
        /** mana */
        name: "Butterfly",
        category: "interaction_item",
        model: "Butterfly",
        scale: 1.4 / 2 ** 6,
        fly: 0.5,
        midHeight: 0.0,
        rotateToNorth: Math.PI,
        moveSpeed: 1.25,

        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Butterfly",
        text: "Very cute butterfly.",
    },
    RedButterfly: {
        name: "RedButterfly",
        category: "action_item",
        which: "mana",
        model: "Butterfly",
        scale: 1.4 / 2 ** 6,
        fly: 0.52,
        midHeight: 0.0,
        rotateToNorth: Math.PI,
        moveSpeed: 1.65,
        texture: "RedButterFly_BaseColor",
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "RedButterfly",
        text: "The flutter of its tiny wings feels magical. Let's taste it.",
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
    OrangeKey: {
        name: "OrangeKey",
        category: "key",
        inventorySprite: "OrangeKey",
        color: "Orange"
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
    Banknote20: {
        name: "Banknote20",
        category: "interaction_item",
        inventorySprite: "Banknote20",
        text: "That is a lot of money. 20 Castle Marks."
    },
    Banknote50: {
        name: "Banknote50",
        category: "interaction_item",
        inventorySprite: "Banknote50",
        text: "That is a lot of money. 50 Castle Marks."
    },
    Banknote100: {
        name: "Banknote100",
        category: "interaction_item",
        inventorySprite: "Banknote100",
        text: "That is a lot of money. 100 Castle Marks."
    },
    Banknote200: {
        name: "Banknote200",
        category: "interaction_item",
        inventorySprite: "Banknote200",
        text: "That is a lot of money. 200 Castle Marks."
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
        text: "Beautiful and precious Amethyst."
    },
    Moonstone: {
        name: "Moonstone",
        category: "interaction_item",
        inventorySprite: "Moonstone",
        text: "Beautiful and precious Moonstone."
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
        text: "Beatchwear. Bitchwear? Bitch. Where?"
    },
    RedLeatherHat: {
        name: "RedLeatherHat",
        category: "interaction_item",
        inventorySprite: "RedLeatherHat",
        text: "Too big for my cute small head."
    },
    RedFin: {
        name: "RedFin",
        category: "interaction_item",
        inventorySprite: "RedFin",
        text: "A red fin. For scuba diving. But noth without the pair."
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
    Quill: {
        name: "Quill",
        category: "interaction_item",
        inventorySprite: "Quill",
        text: "Quill? For writing, I guess?."
    },
    Blood: {
        name: "Blood",
        category: "interaction_item",
        inventorySprite: "Blood",
        text: "Blood? Yuck."
    },
    JeweledCrown: {
        name: "JeweledCrown",
        category: "interaction_item",
        inventorySprite: "JeweledCrown",
        text: "Jeweled Crown. Expensive."
    },
    Painting: {
        name: "Painting",
        category: "interaction_item",
        inventorySprite: "Painting",
        text: "Greate painting of a nude woman."
    },
    EmptyPainting: {
        name: "EmptyPainting",
        category: "interaction_item",
        inventorySprite: "EmptyPainting",
        text: "Empty canvas. Pity I don't paint."
    },
    PaintBrush: {
        name: "PaintBrush",
        category: "interaction_item",
        inventorySprite: "PaintBrush",
        text: "PaintBrush? Painter's friend."
    },
    Palette: {
        name: "Palette",
        category: "interaction_item",
        inventorySprite: "Palette",
        text: "Palette? Painter's friend."
    },
    Trident: {
        name: "Trident",
        category: "interaction_item",
        inventorySprite: "Trident",
        text: "Trident? Very strange weapon. For specialists."
    },
    GoldenGoblet: {
        name: "GoldenGoblet",
        category: "interaction_item",
        inventorySprite: "GoldenGoblet",
        text: "Golden goblet? For expensive drinks."
    },
    RedThighHighBoots: {
        name: "RedThighHighBoots",
        category: "interaction_item",
        inventorySprite: "RedThighHighBoots",
        text: "This boots are so hot."
    },
    SkeletonDoll: {
        name: "SkeletonDoll",
        category: "interaction_item",
        inventorySprite: "SkeletonDoll",
        text: "Cute skeleton doll for little skeleton children."
    },
    Floppy: {
        name: "Floppy",
        category: "interaction_item",
        inventorySprite: "Floppy",
        text: "Floppy disk? I can store my memoirs on it."
    },
    Fish: {
        name: "Fish",
        category: "interaction_item",
        inventorySprite: "Fish",
        text: "Smelly little swimmer."
    },
    YellowWellies: {
        name: "YellowWellies",
        category: "interaction_item",
        inventorySprite: "YellowWellies",
        text: "Shiny yellow wellies. I can jump in the puddles. Yeah!"
    },
    YellowUmbrella: {
        name: "YellowUmbrella",
        category: "interaction_item",
        inventorySprite: "YellowUmbrella",
        text: "Nice umbrella. But it doesn rain in this game."
    },
    Computer: {
        name: "Computer",
        category: "interaction_item",
        inventorySprite: "Computer",
        text: "Wow, 8 bit computer. Thats so much more than 4."
    },
    MicroProcessor: {
        name: "MicroProcessor",
        category: "interaction_item",
        inventorySprite: "MicroProcessor",
        text: "8 bit processor. But does it run Castle Haunt?"
    },
    OldFloppy: {
        name: "OldFloppy",
        category: "interaction_item",
        inventorySprite: "OldFloppy",
        text: "Very old 5 and 25 inch floppy, containing Princess Wants Everything game. So rare."
    },
    Joystick: {
        name: "Joystick",
        category: "interaction_item",
        inventorySprite: "Joystick",
        text: "With this joystick I can probably play Galactix."
    },
    PurpleLatexBra: {
        name: "PurpleLatexBra",
        category: "interaction_item",
        inventorySprite: "PurpleLatexBra",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    PinkPanties: {
        name: "PinkPanties",
        category: "interaction_item",
        inventorySprite: "PinkPanties",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    PinkBra: {
        name: "PinkBra",
        category: "interaction_item",
        inventorySprite: "PinkBra",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    PinkHighBoots: {
        name: "PinkHighBoots",
        category: "interaction_item",
        inventorySprite: "PinkHighBoots",
        text: "Sexy stuff. I should wear these. Maybe in the next game?"
    },
    Spear: {
        name: "Spear",
        category: "interaction_item",
        inventorySprite: "Spear",
        text: "Pointy spear. Let's poke someone."
    },
    Dagger: {
        name: "Dagger",
        category: "interaction_item",
        inventorySprite: "Dagger",
        text: "Sharp dagger."
    },
    RedSneaker: {
        name: "RedSneaker",
        category: "interaction_item",
        inventorySprite: "RedSneaker",
        text: "Red sneaker without pair."
    },
    GreenLiquid: {
        name: "GreenLiquid",
        category: "interaction_item",
        inventorySprite: "GreenLiquid",
        text: "A flask of vile looking green liquid."
    },
    RedLiquid: {
        name: "RedLiquid",
        category: "interaction_item",
        inventorySprite: "RedLiquid",
        text: "A flask of vile looking red liquid."
    },
    BlueLiquid: {
        name: "BlueLiquid",
        category: "interaction_item",
        inventorySprite: "BlueLiquid",
        text: "A flask of vile looking blue liquid."
    },
    OrangeLeggings: {
        name: "OrangeLeggings",
        category: "interaction_item",
        inventorySprite: "OrangeLeggings",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    OrangeBra: {
        name: "OrangeBra",
        category: "interaction_item",
        inventorySprite: "OrangeBra",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    OrangeBoots: {
        name: "OrangeBoots",
        category: "interaction_item",
        inventorySprite: "OrangeBoots",
        text: "Cute stuff. Befitting a princess. But not my style."
    },

    OrangeThongs: {
        name: "OrangeThongs",
        category: "interaction_item",
        inventorySprite: "OrangeThongs",
        text: "Cute stuff. Befitting a princess. But not my style."
    },
    PurpleRose: {
        name: "PurpleRose",
        category: "interaction_item",
        inventorySprite: "PurpleRose",
        text: "Beautiful purple rose."
    },
    RedRose: {
        name: "RedRose",
        category: "interaction_item",
        inventorySprite: "RedRose",
        text: "Beautiful red rose. "
    },
    BlueRose: {
        name: "BlueRose",
        category: "interaction_item",
        inventorySprite: "BlueRose",
        text: "Beautiful blue rose."
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

    //other
    GreenPanties: {
        name: "GreenPanties",
        category: "interaction_item",
        inventorySprite: "GreenPanties",
        text: "Wow, that's hot."
    },
    GreenDress: {
        name: "GreenDress",
        category: "interaction_item",
        inventorySprite: "GreenDress",
        text: "Wow, that's hot."
    },
    GreenBoots: {
        name: "GreenBoots",
        category: "interaction_item",
        inventorySprite: "GreenBoots",
        text: "Wow, that's hot."
    },
    WhitePanties: {
        name: "WhitePanties",
        category: "interaction_item",
        inventorySprite: "WhitePanties",
        text: "Wow, that's hot."
    },
    WhiteDress: {
        name: "WhiteDress",
        category: "interaction_item",
        inventorySprite: "WhiteDress",
        text: "Wow, that's hot."
    },
    WhiteBoots: {
        name: "WhiteBoots",
        category: "interaction_item",
        inventorySprite: "WhiteBoots",
        text: "Wow, that's hot."
    },
    SkeletonDoll: {
        name: "SkeletonDoll",
        category: "interaction_item",
        inventorySprite: "SkeletonDoll",
        text: "Creepy skeleton toy."
    },
    SkeletonCat: {
        name: "SkeletonCat",
        category: "interaction_item",
        inventorySprite: "SkeletonCat",
        text: "Creepy skeleton toy."
    },
    SkeletonBird: {
        name: "SkeletonBird",
        category: "interaction_item",
        inventorySprite: "SkeletonBird",
        text: "Creepy skeleton toy."
    },
    YellowLatexThongs: {
        name: "YellowLatexThongs",
        category: "interaction_item",
        inventorySprite: "YellowLatexThongs",
        text: "Wow, that's hot."
    },
    YellowDress: {
        name: "YellowDress",
        category: "interaction_item",
        inventorySprite: "YellowDress",
        text: "Wow, that's hot."
    },
    YellowBoots: {
        name: "YellowBoots",
        category: "interaction_item",
        inventorySprite: "YellowBoots",
        text: "Wow, that's hot."
    },
    SunGlasses: {
        name: "SunGlasses",
        category: "interaction_item",
        inventorySprite: "SunGlasses",
        text: "Fashionable sun glasses."
    },
    Cap: {
        name: "Cap",
        category: "interaction_item",
        inventorySprite: "Cap",
        text: "Baseball cap. I'll go undercover."
    },
    Comb: {
        name: "Comb",
        category: "interaction_item",
        inventorySprite: "Comb",
        text: "A comb for my messy hair."
    },
    HairBrush: {
        name: "HairBrush",
        category: "interaction_item",
        inventorySprite: "HairBrush",
        text: "A hair brush for my messy hair."
    },
    PinkRibbon: {
        name: "PinkRibbon",
        category: "interaction_item",
        inventorySprite: "PinkRibbon",
        text: "A pink bow ribbon. I could have pigtails. No. Absolutely not."
    },
    WhiteFeather: {
        name: "WhiteFeather",
        category: "interaction_item",
        inventorySprite: "WhiteFeather",
        text: "A feather. White."
    },
    RedFeather: {
        name: "RedFeather",
        category: "interaction_item",
        inventorySprite: "RedFeather",
        text: "A feather. Red."
    },
    GreenFeather: {
        name: "GreenFeather",
        category: "interaction_item",
        inventorySprite: "GreenFeather",
        text: "A feather. Green."
    },
    BlueFeather: {
        name: "BlueFeather",
        category: "interaction_item",
        inventorySprite: "BlueFeather",
        text: "A feather. Blue."
    },
    Sponge: {
        name: "Sponge",
        category: "interaction_item",
        inventorySprite: "Sponge",
        text: "Maybe I should take a bath?"
    },
    Skeleton: {
        name: "Skeleton",
        category: "interaction_item",
        inventorySprite: "Skeleton",
        text: "A full human skeleton. Why am I picking that?"
    },
    Brush: {
        name: "Brush",
        category: "interaction_item",
        inventorySprite: "Brush",
        text: "A brush for polishing boots."
    },
    Candle: {
        name: "Candle",
        category: "interaction_item",
        inventorySprite: "Candle",
        text: "Simple wax candle. I can light it. Or not."
    },
    RubberDuck: {
        name: "RubberDuck",
        category: "interaction_item",
        inventorySprite: "RubberDuck",
        text: "One should never bath alone."
    },
    Hammer: {
        name: "Hammer",
        category: "interaction_item",
        inventorySprite: "Hammer",
        text: "Hammer. I could hammer someone."
    },
    Anvil: {
        name: "Anvil",
        category: "interaction_item",
        inventorySprite: "Anvil",
        text: "Anvil. Blacksmistress might want it."
    },
    Kiss: {
        name: "Kiss",
        category: "interaction_item",
        inventorySprite: "Kiss",
        text: "This looks like a portable kiss voucher. What a fascinating concept."
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
        text: "Uranium. Active radio, or something like that. Right?."
    },
    IronBar: {
        name: "IronBar",
        category: "interaction_item",
        inventorySprite: "IronBar",
        text: "Iron? I can make something from it."
    },

    //scrolls
    SCROLL_Explode: {
        name: "SCROLL_Explode",
        category: "scrollshop",
        which: "Explode"
    }
};

const INTERACTION_ENTITY = {
    GhostFaceJR: {
        name: "GhostFaceJR",
        sprite: "GhostFaceJR",
        category: 'crest',
        voice: "FemaleVeryHigh5",
        wants: ["Kiss", "Kiss", "Kiss"],
        gives: "SilverKey",
        text: {
            intro: "I love to love, and locks love me. Bring me kisses, sweet and free, and maybe the SilverKey will agree.",
            progress: "Mmm, tasty, but the vault stays shy. A few more pecks and it might sigh.",
            conclusion: "Smooch quota met, my heart says whee. Take this SilverKey, mind the lipstick, it's on me.",
        },
    },
    DemolitionBlack: {
        name: "DemolitionBlack",
        sprite: "DemolitionBlack",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["Banknote200", "Banknote50", "Banknote100"],
        gives: "SCROLL_Explode",
        text: {
            intro: "Black powder manners and elegant booms. Explode scroll training, 350 Castle marks exact. Pay up and I teach you to whisper boom.",
            progress: "Closer, but not to explosion. Your purse is light, bring the rest and we will send these stones in flight.",
            conclusion: "Payment cleared, 350 Castle marks. Here is your Explode scroll, light the fuse and blame the physics.",
        },
    },
    DemolitionBlack: {
        name: "DemolitionBlack",
        sprite: "DemolitionBlack",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["Banknote200", "Banknote50", "Banknote100"],
        gives: "SCROLL_Explode",
        text: {
            intro: "Black powder manners and elegant booms. Explode scroll training, 350 Castle marks exact. Pay up and I teach you to whisper boom.",
            progress: "Closer, but not to explosion. Your purse is light, bring the rest and we will send these stones in flight.",
            conclusion: "Payment cleared, 350 Castle marks. Here is your Explode scroll, light the fuse and blame the physics.",
        },
    },
    DemolitionRed: {
        name: "DemolitionRed",
        sprite: "DemolitionRed",
        category: 'crest',
        voice: "FemaleHigh4",
        wants: ["Banknote20", "Banknote10", "Banknote100"],
        gives: "SCROLL_Explode",
        text: {
            intro: "Red wire, blue wire, I teach both. Explode scroll training, 130 Castle marks exact. Pay up and we paint the air with fireworks.",
            progress: "Close but not kaboom close. Your purse is shy, bring the rest and we will redecorate the walls.",
            conclusion: "Payment cleared, 130 Castle marks. Here is your Explode scroll, point at obstacles and let fate handle customer service.",
        },
    },
    DemolitionBlonde: {
        name: "DemolitionBlonde",
        sprite: "DemolitionBlonde",
        category: 'crest',
        voice: "FemaleHigh4",
        wants: ["Banknote20", "Banknote50", "Banknote200"],
        gives: "SCROLL_Explode",
        text: {
            intro: "Booms for the bold, darling. Heavy ordnance coaching, 270 Castle marks exact. Pay up and I hand you the Explode scroll, safety not included.",
            progress: "Close, sugar, but my blastometer says nope. Jingle back with more and we will turn walls into confetti.",
            conclusion: "Transaction confirmed, 270 Castle marks. Here is your Explode scroll, now go make stonework rethink its life choices.",
        },
    },
    BitchLiar: {
        name: "BitchLiar",
        sprite: "BitchLiar",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["Banknote20", "Banknote50"],
        gives: "Towel",
        text: {
            intro: "Yes, this white towel, pure and rare, can be yours, for the right affair of cash and care. 70 Castle Marks. Bring exact change.",
            progress: "Not quite enough, you're short, I fear. Come back when the sum is clear.",
            conclusion: "Well, look at you with perfect pay! Take the towel, don't sniff it, okay?",
        }
    },
    PinkyBinky: {
        name: "PinkyBinky",
        sprite: "PinkyBinky",
        category: 'crest',
        voice: "FemaleVeryLow4",
        wants: ["PinkPanties", "PinkBra", "PinkHighBoots"],
        gives: "RedRose",
        text: {
            intro: "Pink is life, pink is divine, bring me lace and leather fine.",
            progress: "Mmm, getting closer, but not quite yet. I need more pink to complete my set.",
            conclusion: "Perfect shade, my closet's blessed. Take this red rose, it matches best."
        }
    },
    AnvillaDeHammer: {
        name: "AnvillaDeHammer",
        sprite: "AnvillaDeHammer",
        category: 'crest',
        voice: "Female6",
        wants: ["Anvil", "Hammer"],
        gives: "IronBar",
        text: {
            intro: "No forge, no flame, no swing, no spark. Bring my tools to light the dark.",
            progress: "Half my gear won't heat the steel. I need it all to make the deal.",
            conclusion: "Now my forge sings, the metal's aglow. Take this iron bar, mind your toe."
        }
    },
    FuturaUranus: {
        name: "FuturaUranus",
        sprite: "FuturaUranus",
        category: 'crest',
        voice: "FemaleHigh5",
        wants: ["UraniumBar", "UraniumBar", "UraniumBar"],
        gives: "IronBar",
        text: {
            intro: "From centuries ahead I stride, my suit runs hot, needs nuclear fuel inside.",
            progress: "You've brought some glow, but not enough. I need more juice to power my stuff.",
            conclusion: "Perfect charge, I'm radiant again. Take this iron; so passé, so plain."
        }
    },
    OrangeBathy: {
        name: "OrangeBathy",
        sprite: "OrangeBathy",
        category: 'crest',
        voice: "Female5",
        wants: ["RubberDuck"],
        gives: "Sponge",
        text: {
            intro: "Bath time's lonely, need a toy. Bring me something or just join the joy.",
            progress: null,
            conclusion: "My tub's complete, you're such a dear. Take this sponge, go scrub your rear."
        }
    },
    GhostBride: {
        name: "GhostBride",
        sprite: "GhostBride",
        category: 'crest',
        voice: "Female6",
        wants: ["Skeleton"],
        gives: "Candle",
        text: {
            intro: "I search and sigh through endless night, my groom has vanished out of sight.",
            progress: null,
            conclusion: "So kind of you to share my pain, take this candle to light in his name."
        }
    },
    SheparDess3: {
        name: "SheparDess3",
        sprite: "SheparDess3",
        category: 'crest',
        voice: "Female4",
        wants: ["BabySheep", "BabySheep", "BabySheep"],
        gives: "PurpleRose",
        text: {
            intro: "My flock has strayed, those naughty sheep. Help me find them, the hills are steep.",
            progress: "One or two, but not the herd. Keep lookin', love, don't be deterred.",
            conclusion: "All my darlings safe and close, take this rare and purple rose."
        }
    },
    BootShina: {
        name: "BootShina",
        sprite: "BootShina",
        category: 'crest',
        voice: "Female3",
        wants: ["Brush"],
        gives: "GoldCoin",
        text: {
            intro: "Whether you brush or lick, make my boots shiny to earn the gold coin.",
            progress: null,
            conclusion: "My boots are glossy, coin is earned. But think wisely where you will spend it. They are getting scarce."
        }
    },
    SpringyBather: {
        name: "SpringyBather",
        sprite: "SpringyBather",
        category: 'crest',
        voice: "Female2",
        wants: ["Sponge", "Towel"],
        gives: "OrangeBra",
        text: {
            intro: "Och, the spring is cold and I'm in a plight. Bring me a sponge and a towel tae make it right.",
            progress: "A wee bit warmer, but still I freeze. Fetch the rest, laddie, if ye please.",
            conclusion: "All fresh and clean, nae shame, nae flaw. Take this bra, I dinnae need it for a thaw."
        }
    },
    MetallicaDress: {
        name: "MetallicaDress",
        sprite: "MetallicaDress",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["IronBar", "IronBar", "IronBar"],
        gives: "OrangeLeggings",
        text: {
            intro: "A true metal queen must shimmer and shine. Bring me iron bars to make this dress mine.",
            progress: "A bar or two gives shimmer slight, but still it lacks that heavy bite.",
            conclusion: "Forged in fashion, I shine no less. Take these orange leggings, they don't match this dress."
        }
    },
    TangerineLingerie: {
        name: "TangerineLingerie",
        sprite: "TangerineLingerie",
        category: 'crest',
        voice: "FemaleVeryLow4",
        wants: ["OrangeBoots", "OrangeLeggings", "OrangeBra", "OrangeThongs"],
        gives: "OrangeKey",
        text: {
            intro: "Orange is passion, orange is fire. Dress me in it, fulfill my desire.",
            progress: "One piece glows, but not the set. Bring me more, I'm not done yet.",
            conclusion: "Now I'm clad in tangerine tight delight. Take this key, go face Hauntessa's might."
        }
    },
    RedCemeteria: {
        name: "RedCemeteria",
        sprite: "RedCemeteria",
        category: 'crest',
        voice: "FemaleLow6",
        wants: ["Candle", "RedCandle", "BlueCandle"],
        gives: "OrangeBoots",
        text: {
            intro: "Light my crypt with three true flames. White for vigil, red for passion, blue for dreams.",
            progress: "The glow begins, but darkness lingers. Bring the rest and hush these shivers.",
            conclusion: "Now the crypt sighs in candlelight. Take these orange boots. They never fit my midnight."
        }
    },
    BlackCemeteria: {
        name: "BlackCemeteria",
        sprite: "BlackCemeteria",
        category: 'crest',
        voice: "Female6",
        wants: ["RedRose", "BlueRose", "PurpleRose"],
        gives: "OrangeThongs",
        text: {
            intro: "Bring me roses, dark and deep, red for lust, blue for sleep, purple for secrets I still keep.",
            progress: "A flower or two, but my bouquet is bare. I crave more petals to perfume the air.",
            conclusion: "The roses are mine, their scent divine. Take these orange thongs, too sinful to rest with the shrine."
        }
    },
    GreenDommeGuard: {
        name: "GreenDommeGuard",
        sprite: "GreenDommeGuard",
        category: 'crest',
        voice: "Female5",
        wants: ["Revolver", "Ammo"],
        gives: "PurpleLatexBra",
        text: {
            intro: "A guard with no gun? That won't do. Fetch me a revolver and bullets too.",
            progress: "One piece alone won't make me hot. I need the full set to take my shot.",
            conclusion: "Locked and loaded, I'm ready to spar. Take this bra, it offered less support than you are."
        }
    },
    RedDommeGuard: {
        name: "RedDommeGuard",
        sprite: "RedDommeGuard",
        category: 'crest',
        voice: "Female3",
        wants: ["Sword", "Shield"],
        gives: "PinkPanties",
        text: {
            intro: "Standing guard without sword or shield? I need some steel before I yield.",
            progress: "Half armed now, but still not right. Bring the rest to guard the night.",
            conclusion: "With sword in hand and shield held tight, take these pink panties, my tribute tonight."
        }
    },
    BlackDommeGuard: {
        name: "BlackDommeGuard",
        sprite: "BlackDommeGuard",
        category: 'crest',
        voice: "FemaleLow4",
        wants: ["Mace", "Shield"],
        gives: "YellowLatexThongs",
        text: {
            intro: "A guard without weapons? What a disgrace. Bring me protection, a shield and a mace.",
            progress: "One piece helps, but I'm still not set. Bring the rest, I'm not safe yet.",
            conclusion: "Armed at last, I stand so strong. Take these hot yellow thongs, where they belong."
        }
    },
    Libranelle: {
        name: "Libranelle",
        sprite: "Libranelle",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["RavenBook", "TreeOfLifeBook", "PrincessBook", "OwlBook", "AnkhBook"],
        gives: "GreenPanties",
        text: {
            intro: "Shhh... the library's a holy ground. Return my books that can't be found.",
            progress: "One tome is back, but shelves still lack. Keep searching, I want the stack.",
            conclusion: "All my books are safe, you are done . Take my green panties, I never wore one."
        }
    },
    IceWhiskyPrincess: {
        name: "IceWhiskyPrincess",
        sprite: "IceWhiskyPrincess",
        category: 'crest',
        voice: "FemaleHigh2",
        wants: ["IceCube", "IceCube", "IceCube"],
        gives: "YellowUmbrella",
        text: {
            intro: "My whisky burns, it's far too hot. Fetch me some ice to cool the shot.",
            progress: "A cube or two brings slight relief, but I need more to chill my grief.",
            conclusion: "Finally chilled, my drink's just right. Take this umbrella, I won't need it tonight ... It's too cold to rain."
        }
    },
    MessyHair: {
        name: "MessyHair",
        sprite: "MessyHair",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Comb", "HairBrush", "PinkRibbon"],
        gives: "Banknote10",
        text: {
            intro: "You're my hairdresser now, so don't you slip. Fetch the tools and start the trip.",
            progress: "Better, but not quite there. Keep working those hands through my hair.",
            conclusion: "Styled to perfection, ribbons in place. Here's your pay, now give me some space."
        }
    },
    ScubaDiveress: {
        name: "ScubaDiveress",
        sprite: "ScubaDiveress",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["RedFin", "RedFin"],
        gives: "SunGlasses",
        text: {
            intro: "Only Fins. You know the deal. Bring me two, let's make it real.",
            progress: "One fin is cute, but I won't dive yet. Keep swimming, darling, I'm not wet.",
            conclusion: "Two fins in place, my show is done. Take these shades, I've no need for sun."
        }
    },
    Brushelle: {
        name: "Brushelle",
        sprite: "Brushelle",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["RedLeatherBoots", "PurpleLatexBra", "PinkPanties"],
        gives: "PaintBrush",
        text: {
            intro: "I'm done with canvas, bored of the hue. Fashion is brighter, I want something new!",
            progress: "One shade's nice, but I need the spree. Bring more colors to dazzle me!",
            conclusion: "Now I'm dressed in a rainbow's crush. Take my old tool, this paintbrush."
        }
    },
    Goldini: {
        name: "Goldini",
        sprite: "Goldini",
        category: 'crest',
        voice: "FemaleLow5",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "GreenBoots",
        text: {
            intro: "Gold is my pleasure, gold is my flame. Bars of it feed my lingerie game.",
            progress: "A shimmer of wealth, but not enough shine. I need more bars to make it divine.",
            conclusion: "My golden passion is satisfied at last. These green boots? Too drab for my class. Take them and pass."
        }
    },
    GothicProgrammer: {
        name: "GothicProgrammer",
        sprite: "GothicProgrammer",
        category: 'crest',
        voice: "FemaleVeryLow6",
        wants: ["OldFloppy", "Joystick"],
        gives: "Floppy",
        text: {
            intro: "I dwell in shadows, coding in gloom. Yet I long to play old LaughingSkull tunes. Bring me a creaky joystick and a five and a quarter inch disk, so I may summon pixels from the crypt.",
            progress: "Half the past is here, but I need the full rite. Without both relics, the game stays in night.",
            conclusion: "Ah  the old game breathes again. Take this floppy, within lies a fragment of Castle Haunt's reign."
        }
    },
    PythonProgrammer: {
        name: "PythonProgrammer",
        sprite: "PythonProgrammer",
        category: 'crest',
        voice: "Female6",
        wants: ["Computer", "MicroProcessor"],
        gives: "Floppy",
        text: {
            intro: "I code in Python, not just the snake. This skin is fashion, make no mistake. I need a retro box, eight bit and sleek, plus a chip upgrade to fix the leak.",
            progress: "Hmm... part's arrived but still won't boot. Bring the rest to run the loot.",
            conclusion: "System ready! Here's a floppy from my stash. It's got Castle Haunt, well, part of the flash."
        }
    },
    YellowasWitness: {
        name: "YellowasWitness",
        sprite: "YellowasWitness",
        category: 'crest',
        voice: "Female5",
        wants: ["YellowUmbrella", "YellowWellies"],
        gives: "YellowDress",
        text: {
            intro: "The rain is sin, a wicked mess, no steps outside without my dress! Bring boots and brolly, head to toe, or to the storm I will not go.",
            progress: "Dry up, dear. I still feel exposed. My look needs more to stay composed.",
            conclusion: "Now I can preach in style and grace. Take this dress, but mind your pace."
        }
    },
    PoisonDrinker: {
        name: "PoisonDrinker",
        sprite: "PoisonDrinker",
        category: 'crest',
        voice: "FemaleLow4",
        wants: ["Poison", "Poison", "Poison"],
        gives: "SkeletonBird",
        text: {
            intro: "Poison's my drink, I sip with glee. Skeletons pop out, as you will see.",
            progress: "A dose delivered, but I crave the thrill. More poison, darling, to get my fill.",
            conclusion: "You've brought the batch, how very absurd. Here's your reward, a bony bird."
        }
    },
    Ghostessa: {
        name: "Ghostessa",
        sprite: "Ghostessa",
        category: 'crest',
        voice: "GhostFace",
        wants: ["Candle", "Candle", "Candle"],
        gives: "SkeletonCat",
        text: {
            intro: "This crypt's too dark, it's such a strain. More candles please, to light this domain.",
            progress: "A flicker helps, but I need the glow. Keep them coming to banish shadow.",
            conclusion: "Now I can see, how quaint is that. Take my dear pet, the Skeleton Cat."
        }
    },
    Fisherinne: {
        name: "Fisherinne",
        sprite: "Fisherinne",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Trident"],
        gives: "Fish",
        text: {
            intro: "Get a girl a trident, so she can catch some fish.",
            progress: null,
            conclusion: "See? Told you. Here you go, have one."
        }
    },
    ApparitiaPanties: {
        name: "ApparitiaPanties",
        sprite: "ApparitiaPanties",
        category: 'crest',
        voice: "Apparitia",
        wants: ["Banknote10", "Banknote10", "Banknote10"],
        gives: "WhitePanties",
        text: {
            intro: "Exiled and broke in the mortal zone, I'll part with my panties, latex and alone.",
            progress: "Some bank notes has come, but not enough. I need the full sum, times are tough.",
            conclusion: "Thirty castle marks for spectral lace. Take these panties, vanishing with grace."
        }
    },
    ApparitiaHide: {
        name: "ApparitiaHide",
        sprite: "ApparitiaHide",
        category: 'crest',
        voice: "Apparitia",
        wants: ["SunGlasses", "Cap"],
        gives: "WhiteBoots",
        text: {
            intro: "The light betrays, my eyes too red. I need a cap to shield my head, and shades to fade into the crowd instead. And the hide from Hauntessa ...",
            progress: "Part of the look, but not quite complete. I need the full disguise before I retreat.",
            conclusion: "With cap and glasses, I'm safely unseen. Take these white boots, they're ghostly clean."
        }
    },
    Vampyra: {
        name: "Vampyra",
        sprite: "Vampyra",
        category: 'crest',
        voice: "FemaleLow6",
        wants: ["Blood", "Blood", "Blood"],
        gives: "RedThighHighBoots",
        text: {
            intro: "Thirsty again, what a fright. Bring me blood to sip tonight.",
            progress: "Mmm, a taste... but I need more. I'm not quite ready to part with couture.",
            conclusion: "Your offering pleased my crimson soul. These boots are yours, now strut and stroll."
        }
    },
    Tridenta: {
        name: "Tridenta",
        sprite: "Tridenta",
        category: 'crest',
        voice: "FemaleLow5",
        wants: ["BattleAxe", "Shield"],
        gives: "Trident",
        text: {
            intro: "This trident's old, I've changed my taste. Bring axe and shield with warrior haste.",
            progress: "One's delivered, but that won't do. I need the full set before we're through.",
            conclusion: "You've got the gear, so here's my spear. A trident sharp, go bring some fear. Or catch some fish. Whatever."
        }
    },
    FishNetty: {
        name: "FishNetty",
        sprite: "FishNetty",
        category: 'crest',
        voice: "FemaleVeryLow4",
        wants: ["Fish", "TropicalFish"],
        gives: "EmptyPainting",
        text: {
            intro: "I'm all net and no catch. Help me trap something slippery and splashy, maybe?",
            progress: "That tickles... but I'm still craving more. Something lively to adore.",
            conclusion: "You've filled my nets with wiggle and glee. Take this canvas, no one paints me, because I am too pretty."
        }
    },
    Amethyste: {
        name: "Amethyste",
        sprite: "Amethyste",
        category: 'crest',
        voice: "Female6",
        wants: ["YellowDress", "YellowLatexThongs", "YellowBoots"],
        gives: "Amethyst",
        text: {
            intro: "Cave life is dull, so dark and tight. Bring me sunshine wrapped in latex delight.",
            progress: "Ooh, a shimmer but it's not the full glow. More sunny glam, then I'll bestow.",
            conclusion: "You've brightened my gloom with golden zest. Here's your amethyst, my shiny bequest."
        }
    },
    Emeraldine: {
        name: "Emeraldine",
        sprite: "Emeraldine",
        category: 'crest',
        voice: "Female3",
        wants: ["WhitePanties", "WhiteDress", "WhiteBoots"],
        gives: "Emerald",
        text: {
            intro: "This red's a drag, it makes me scream. Dress me white so I don't get mean.",
            progress: "Closer now, but don't be slow. I need the full look to make it glow.",
            conclusion: "You nailed the fit, I'm serene at last. Take this emerald, bold and glassed."
        }
    },
    MissMuscleSmith: {
        name: "MissMuscleSmith",
        sprite: "MissMuscleSmith",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["Ruby", "Emerald", "Amethyst", "SilverBar", "GoldBar"],
        gives: "JeweledCrown",
        text: {
            intro: "You want a crown? Then bring the bling. Gems and metals, everything.",
            progress: "Some sparkle's here, but not yet enough. I need more shiny, royal stuff.",
            conclusion: "Fit for a queen and forged with pride. Here's your crown, now rule with stride."
        }
    },
    Hacker: {
        name: "Hacker",
        sprite: "Hacker",
        category: 'crest',
        voice: "Female4",
        wants: ["Floppy", "Floppy", "Floppy"],
        gives: "GoldenGoblet",
        text: {
            intro: "I'm dying to play CastleHaunt. Three floppies, that's what I want.",
            progress: "One step closer to the digital thrill. But we're not booting up just still.",
            conclusion: "Game's installed, I'm set to vibe. Take this goblet, not my tribe."
        }
    },
    RubySilka: {
        name: "RubySilka",
        sprite: "RubySilka",
        category: 'crest',
        voice: "FemaleVeryLow3",
        wants: ["GreenPanties", "GreenDress", "GreenBoots"],
        gives: "Ruby",
        text: {
            intro: "Ugh, white again? Dress me in green before I scream.",
            progress: "Getting closer to the look I crave. But I'm still a few threads from chic and brave.",
            conclusion: "Now that's the color of envy and pride. Here, take this ruby I no longer hide."
        }
    },
    SkullTattoo: {
        name: "SkullTattoo",
        sprite: "SkullTattoo",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["SkeletonCat", "SkeletonDoll", "SkeletonBird"],
        gives: "EmeraldKey",
        text: {
            intro: "Bones and toys, my favorite blend. Bring them all, and reach the end.",
            progress: "Nice additions to my stash. One or two more to make it flash.",
            conclusion: "My spooky shelf is now complete. Take this key, your little treat."
        }
    },
    BlondeSkulla: {
        name: "BlondeSkulla",
        sprite: "BlondeSkulla",
        category: 'crest',
        voice: "Female2",
        wants: ["Skull", "Skull", "Skull", "Bone", "Bone"],
        gives: "SkeletonDoll",
        text: {
            intro: "The skeleton kids are crying again. Help me build a bony doll to soothe their pain.",
            progress: "You're piling pieces, what a treat. A few more parts and it's complete!",
            conclusion: "Perfectly creepy, cuddly and tall; here's your skeleton doll, bones and all."
        }
    },
    PainterElle: {
        name: "PainterElle",
        sprite: "PainterElle",
        category: 'crest',
        voice: "Female2",
        wants: ["EmptyPainting", "Palette", "PaintBrush"],
        gives: "Painting",
        text: {
            intro: "A canvas bare, a blush to show. Bring my tools, let's start the glow.",
            progress: "Inspiration stirs, but something's still amiss. Bring the rest, we're close to bliss.",
            conclusion: "All set and done, the curves divine. Enjoy your nude, pure art, not crime."
        }
    },
    UnderworldDarkQueen: {
        name: "UnderworldDarkQueen",
        sprite: "UnderworldDarkQueen",
        category: 'crest',
        voice: "Female4",
        wants: ["Painting", "JeweledCrown", "GoldenGoblet", "RedThighHighBoots"],
        gives: "GoldKey",
        text: {
            intro: "Art, jewels, goblets, boots. Bring me luxury or grow your roots.",
            progress: "A fine gift, but my greed still breathes. Do not stop until desire seethes.",
            conclusion: "You've spoiled me well, now take your key. Escape this realm, if you dare flee."
        }
    },
    MoonDemoness: {
        name: "MoonDemoness",
        sprite: "MoonDemoness",
        category: 'crest',
        voice: "Female3",
        wants: ["Scroll", "Quill", "Blood", "Skull"],
        gives: "ArmorBlueprint",
        text: {
            intro: "Armor born of cursed design. Bring scroll and skull, and blood like wine. The quill shall scratch what none forget.",
            progress: "The ritual stirs, the ink runs red. I need more still to raise the dead.",
            conclusion: "Written in blood, sealed with a spell. This cursed blueprint, let the blacksmith tell."
        }
    },
    ElvenSmith: {
        name: "ElvenSmith",
        sprite: "ElvenSmith",
        category: 'crest',
        voice: "FemaleHigh6",
        wants: ["SilverBar", "IronBar", "RedBar", "ArmorBlueprint"],
        gives: "InfernalArmor",
        text: {
            intro: "To forge a suit for fire and flame, bring bars and plans to earn your name!",
            progress: "Metal and blueprint, sparks arise. Still more needed for the grand surprise!",
            conclusion: "The forge is hot, the work is done. Infernal armor, now go stun!"
        }
    },
    CaveGemma: {
        name: "CaveGemma",
        sprite: "CaveGemma",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["Pearl", "Moonstone", "Amethyst", "PurpleTear"],
        gives: "Ring",
        text: {
            intro: "Deep in my cave where treasures gleam, I seek the gems of every dream!",
            progress: "One sparkles nice, the others call. I need them all to cast the thrall!",
            conclusion: "A trove complete, what perfect bling. As promised, take this precious ring."
        }
    },
    ButterFlyLady: {
        name: "ButterFlyLady",
        sprite: "ButterFlyLady",
        category: 'crest',
        voice: "FemaleHigh",
        wants: ["Butterfly", "Butterfly", "Butterfly"],
        gives: "Amethyst",
        text: {
            intro: "My fluttering sisters are lost in the breeze. Find them quick, oh pretty please!",
            progress: "Wings are few, but not yet all. Keep on chasing, heed their call!",
            conclusion: "Three returns, what joyful flight! Here's an amethyst, pure and bright."
        }
    },
    ScubaBabe: {
        name: "ScubaBabe",
        sprite: "ScubaBabe",
        category: 'crest',
        voice: "FemaleHigh2",
        wants: ["Fins", "ScubaMask"],
        gives: "PurpleTear",
        text: {
            intro: "I'll dive down deep where legends sleep, but gearless girls the current keeps!",
            progress: "Almost set to make the splash. Just a bit more for my dash!",
            conclusion: "With mask and fins, I've made the sweep. Here's the tear from oceans deep."
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
            intro: "Sun, sass, and sand are swell. Fetch me some bitch wear, you'll get a shell!",
            progress: "Mmm, we're halfway to fab. One more piece, then it's a grab!",
            conclusion: "Red hot look, you brought the flair. Here's your shell, now strut with care."
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
            intro: "Too much sun and no escape? I need your help to keep my shape!",
            progress: "You've got the goods, but not the pair. Bring the rest, show you care!",
            conclusion: "Now I'm set for beachy bliss. Take this shell and blow a kiss!"
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
            intro: "Shells are pretty, but I've seen enough. Hand me more, not just the fluff!",
            progress: "A few in hand, but not the score. Keep 'em coming, I want more!",
            conclusion: "So many shells, I'm losing track. Take this pearl, I want my beach bag back!"
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
        gives: "OrangeKey",
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
    NeverLookBack: {
        name: "NeverLookBack",
        sprite: "NeverLookBack",
        category: 'crest',
        voice: "Female6",
        wants: ["GoldCoin"],
        gives: "Defense",
        text: {
            intro: "Eyes front, feet quick, no looking back. Bring one GoldCoin with the queen's face, and I'll teach defense that keeps you on track.",
            progress: null,
            conclusion: "Clink accepted, lesson injected. Defense up, now sprint forward and never get intercepted.",
        },
    },
    Swordy: {
        name: "Swordy",
        sprite: "Swordy",
        category: 'crest',
        voice: "Female6",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Fancy a sharper swing? Slip me a single gold coin and I'll teach your strikes to sing.",
            progress: null,
            conclusion: "Clink accepted! Steel for zeal, take the blade and feel your attack reveal.",
        }
    },
    Apachessa: {
        name: "Apachessa",
        sprite: "Apachessa",
        category: 'crest',
        voice: "Female4",
        wants: ["GreenFeather", "BlueFeather", "WhiteFeather", "RedFeather"],
        gives: "Defense",
        level: 3,
        text: {
            intro: "A war bonnet needs colors bold. Bring me feathers green, blue, white, and red untold.",
            progress: "My bonnet grows, but still not complete. More colors must crown my warrior feat.",
            conclusion: "The feathers shine, my headdress grand. I'll teach you defense, swift and planned."
        }
    },
    RedWellmana: {
        name: "RedWellmana",
        sprite: "RedWellmana",
        category: 'crest',
        voice: "Female3",
        wants: ["GreenLiquid", "RedLiquid", "BlueLiquid"],
        gives: "ManaSkill",
        level: 3,
        text: {
            intro: "Bubble and boil, my cauldron's cue. Bring me green, red, and a vial of blue.",
            progress: "The brew is stirring, colors collide. But something is missing to turn the tide.",
            conclusion: "The cauldron sings, the magic flows. Your mana grows as my mixture glows."
        }
    },
    MechGirl: {
        name: "MechGirl",
        sprite: "MechGirl",
        category: 'crest',
        voice: "GlaDOSHigh",
        wants: ["MicroProcessor", "MicroProcessor"],
        gives: "Magic",
        level: 2,
        text: {
            intro: "System lag detected. Insert processors, and my magic will be perfected.",
            progress: "Installation at fifty percent. More hardware required for full enchantment.",
            conclusion: "Upgrade complete. Power online. You are now programmed with magic divine."
        }
    },
    RedGyma: {
        name: "RedGyma",
        sprite: "RedGyma",
        category: 'crest',
        voice: "Female5",
        wants: ["RedSneaker", "RedSneaker"],
        gives: "HeartSkill",
        level: 2,
        text: {
            intro: "Trainer chic means red on red. White shoes? No way. Bring me red kicks instead.",
            progress: "One sneaker's cute, but balance is key. I need the pair to look fit as me.",
            conclusion: "Now I'm dressed from head to tread. Your health is stronger, just like I said."
        }
    },
    BikiniWarrior: {
        name: "BikiniWarrior",
        sprite: "BikiniWarrior",
        category: 'crest',
        voice: "Female6",
        wants: ["Spear", "Dagger"],
        gives: "Attack",
        level: 2,
        text: {
            intro: "A bikini's fine, but blades are better. Bring me steel, and I'll make you deadlier than ever.",
            progress: "One weapon's good, but not enough flair. Bring me the rest, if you dare.",
            conclusion: "Your weapons please me, sharp and true. Now your attack is stronger too."
        }
    },
    ManaDrinker: {
        name: "ManaDrinker",
        sprite: "ManaDrinker",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "ManaSkill",
        text: {
            intro: "Blue fumes swirl within my flask. Pay me a coin, and power will unmask.",
            progress: null,
            conclusion: "You’ve sipped the brew, your veins now glow. The deeper magic you now know."
        }
    },
    ArmoredBikini: {
        name: "ArmoredBikini",
        sprite: "ArmoredBikini",
        category: 'crest',
        voice: "Female4",
        wants: ["GoldCoin"],
        gives: "Defense",
        text: {
            intro: "Steel or silk, it makes no odds, defense is vital, even for the bods in bikinis.",
            progress: null,
            conclusion: "For your coin, I've shared my guard. Now you can stand firm, even scantily clad."
        }
    },
    BlackHeartelle: {
        name: "BlackHeartelle",
        sprite: "BlackHeartelle",
        category: 'crest',
        voice: "Female4",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "A coin for me, and I'll mend what's torn. Black hearts healed, no longer forlorn.",
            progress: null,
            conclusion: "The ache is gone, the pulse made whole. You've gained the strength of a steady soul."
        }
    },
    RedHeartelle: {
        name: "RedHeartelle",
        sprite: "RedHeartelle",
        category: 'crest',
        voice: "FemaleVeryLow4",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "A single coin, and I'll ease your pain. Red hearts burning, yet whole again.",
            progress: null,
            conclusion: "The fire's soothed, your heart beats true. This gift of warmth I've passed to you."
        }
    },
    Wanda: {
        name: "Wanda",
        sprite: "Wanda",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "With wand in hand, I spark delight. Bring me a coin, I'll teach you to fight with light.",
            progress: null,
            conclusion: "Your coin well spent, now feel the jolt. You've learned the art of the magic bolt."
        }
    },
    DaggerElle: {
        name: "DaggerElle",
        sprite: "DaggerElle",
        category: 'crest',
        voice: "Female6",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Wanna hit hard but stay unseen? One gold coin, and I'll make you mean.",
            progress: null,
            conclusion: "Now you're trained to stab from the back. Go cause chaos with your sneak attack."
        }
    },
    GirlInTheForest: {
        name: "GirlInTheForest",
        sprite: "GirlInTheForest",
        category: 'crest',
        voice: "Female4",
        wants: ["GoldCoin"],
        gives: "Defense",
        text: {
            intro: "In these woods, defense is grace. For just one coin, I'll teach you how to vanish without a trace.",
            progress: null,
            conclusion: "Lesson learned, you now possess the power to hide and dodge the mess."
        }
    },
    CastleMana: {
        name: "CastleMana",
        sprite: "CastleMana",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "ManaSkill",
        text: {
            intro: "Green and glowing, brewed just right. One gold coin might spark your might.",
            progress: null,
            conclusion: "You took the sip, now feel the thrill. Your mana's rising, what a chill."
        }
    },
    BlackMagic: {
        name: "BlackMagic",
        sprite: "BlackMagic",
        category: 'crest',
        voice: "FemaleHigh3",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Black is the color, and magic's my game. One gold coin, and you'll never be the same.",
            progress: null,
            conclusion: "You've paid the price, now feel the spark. A little black magic to leave your mark."
        }
    },
    GirlOnTheBeach: {
        name: "GirlOnTheBeach",
        sprite: "GirlOnTheBeach",
        category: 'crest',
        voice: "Female6",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "I bask in sun, all silky and sleek. For just one coin, I'll share my technique.",
            progress: null,
            conclusion: "You've paid your dues, so here's the pitch, stay hot and healthy, with a little kitsch."
        }
    },
    RedAxxa: {
        name: "RedAxxa",
        sprite: "RedAxxa",
        category: 'crest',
        voice: "Female3",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Wanna learn to axe with flair? One gold coin, and I will show you where to tear.",
            progress: null,
            conclusion: "Lesson's done, heads may fly. Go forth and cleave, don't be shy."
        }
    },
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