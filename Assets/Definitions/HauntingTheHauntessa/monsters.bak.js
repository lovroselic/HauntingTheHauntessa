const MONSTER_TYPE = {





   

    MissGalaxyGold: {
        name: "MissGalaxyGold",
        texture: "MissGalaxyGold",
        model: "MissGalaxy",
        scale: 1.1 / 2 ** 2,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 25,
        //
        mana: 8,
        health: 25,
        attack: 20,
        magic: 3,
        defense: 0,
        directMagicDamage: true,
        //
        caster: true,
        shootDistance: 6,
        stalkDistance: 8,
        attackSound: "HumanAttack1",
        hurtSound: "Ow",
        behaviourArguments: [8, ["wanderer"], 6, ["shoot"]],
        moveSpeed: 1.0,
        material: MATERIAL.gold,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },

   
   
    
   
    
    

    
    
    
    
   
    GoldSkeletonGold: {
        name: "GoldSkeletonGold",
        texture: "Gold",
        model: "Skeleton",
        scale: 1.8 / 2 ** 3,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "SmokeExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 100,
        mana: 25,
        health: 150,
        attack: 175,
        magic: 25,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack2",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [23, ["wanderer"], 20, ["shoot"]],
        moveSpeed: 1.50,
        shootDistance: 20,
        stalkDistance: 10,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
        material: MATERIAL.gold,
    },
    
   
   

    
   
    AstroRed: {
        name: "AstroRed",
        texture: "AstroRed",
        model: "Astro",
        scale: 1.7 / 2 ** 4,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        mana: 25,
        health: 130,
        attack: 135,
        magic: 20,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "HumanAttack1",
        hurtSound: "MonsterHurt2",
        behaviourArguments: [10, ["wanderer"], 8, ["shoot"]],
        moveSpeed: 1.0,
        shootDistance: 8,
        stalkDistance: 6,
        material: MATERIAL.redShine,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
 
    
   
    
    GreenRex: {
        name: "GreenRex",
        texture: "GreenRex",
        model: "Rex",
        scale: 1.25 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.5,
        deathType: "BloodExplosion",
        inventory: GOLD_ITEM_TYPE.Coins,
        gold: 100,
        mana: 25,
        health: 175,
        attack: 150,
        magic: 27,
        defense: 0,
        caster: true,
        directMagicDamage: true,
        attackSound: "MonsterAttack1",
        hurtSound: "MonsterHurt",
        behaviourArguments: [20, ["wanderer"], 15, ["shoot"]],
        moveSpeed: 1.1,
        shootDistance: 15,
        stalkDistance: 8,
        material: MATERIAL.greenFluence,
        missile: BouncingMissile,
        missileType: COMMON_ITEM_TYPE.Bounceball,
    },
    

    

    

   

   
    LizardMan: {
        name: "LizardMan",
        model: "LizardMan",
        scale: 1.65 / 2 ** 9,
        rotateToNorth: Math.PI,
        midHeight: 0.55,
        deathType: "BloodExplosion",
        inventory: null,
        //
        mana: 1,
        health: 10,
        attack: 1,
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
   

   
   
    

};