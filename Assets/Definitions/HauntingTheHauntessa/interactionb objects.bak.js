const INTERACTION_OBJECT = {
    Orb: {
        name: "Orb",
        category: "munition",
        element: "BALL",
        scale: 1.5 / 2 ** 5,
        glueToFloor: true,
        texture: "FireballTexture",
        material: MATERIAL.fire,
        inventorySprite: "FireBallIcon",
    },
    Bag: {
        name: "Bag",
        category: "action_item",
        which: "inventory",
        element: "BAG",
        scale: 1 / 2 ** 4,
        glueToFloor: true,
        texture: "Bag_BaseColor",
        material: MATERIAL.standard,
        inventorySprite: "Bag",
        text: "Cool. More storage. I can carry more repelling fireorbs now."
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

    RedGem: {
        name: "RedGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "Red",
        material: MATERIAL.standard,
        inventorySprite: "RedGem",
        text: "Nice? Shiny? I'll keep that."
    },
    Ruby: {
        name: "Ruby",
        category: "interaction_item",
        element: "GEM",
        scale: 1.8 / 2 ** 5,
        glueToFloor: true,
        texture: "Red",
        material: MATERIAL.standard,
        inventorySprite: "Ruby",
        text: "Nice? Shiny? Bloodred ruby? I'll keep that."
    },
    BlueGem: {
        name: "BlueGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "BlueMetal",
        material: MATERIAL.standard,
        inventorySprite: "BlueGem",
        text: "Nice? Shiny? I'll keep that."
    },
    Sapphire: {
        name: "Sapphire",
        category: "interaction_item",
        element: "GEM",
        scale: 1.7 / 2 ** 5,
        glueToFloor: true,
        texture: "BlueMetal",
        material: MATERIAL.standard,
        inventorySprite: "Sapphire",
        text: "Nice? Shiny blue sapphire? I'll keep that."
    },
    GreenGem: {
        name: "GreenGem",
        category: "interaction_item",
        element: "GEM",
        scale: 1.1 / 2 ** 4,
        glueToFloor: true,
        texture: "GreenMetal",
        material: MATERIAL.standard,
        inventorySprite: "GreenGem",
        text: "Nice? Shiny? I'll keep that."
    },
    
    CrystallBall: {
        name: "CrystallBall",
        category: "interaction_item",
        element: "BALL",
        scale: 0.65 / 2 ** 4,
        glueToFloor: true,
        texture: "Marble",
        material: MATERIAL.standardShine,
        inventorySprite: "CrystallBall",
        text: "Oh, crystall ball? I can see the future. Bad for Ghostface."
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
    Rat: {
        name: "Rat",
        category: "interaction_item",
        element: "RAT",
        scale: 1 / 2 ** 3,
        glueToFloor: true,
        texture: "RatTexture",
        inventorySprite: "Rat",
        material: MATERIAL.standard,
        text: "Rat? Maybe I'll be hungry later."
    },
    Lizard: {
        name: "Lizard",
        category: "interaction_item",
        element: "LIZARD",
        scale: 1 / 2 ** 6,
        glueToFloor: true,
        texture: "LizardTexture",
        inventorySprite: "Lizard",
        material: MATERIAL.greenFluence,
        text: "Cute? Little dragon baby."
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
    Milk: {
        name: "Milk",
        category: "interaction_item",
        element: "FLASK",
        scale: 1.1 / 2 ** 5,
        glueToFloor: true,
        texture: "Marble",
        inventorySprite: "Milk",
        material: MATERIAL.standard,
        text: "Milk. Sour. Ugh."
    },
    Banana: {
        name: "Banana",
        category: "interaction_item",
        element: "BANANA",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "Banana_Texture",
        inventorySprite: "Banana",
        material: MATERIAL.standard,
        text: "Banana. "
    },
    GreenApple: {
        name: "GreenApple",
        category: "interaction_item",
        element: "GREEN_APPLE",
        scale: 1.6 / 2 ** 4,
        glueToFloor: true,
        texture: "Green_Apple_Basecolor",
        inventorySprite: "GreenApple",
        material: MATERIAL.standard,
        text: "Oh, it's an apple. A green one."
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