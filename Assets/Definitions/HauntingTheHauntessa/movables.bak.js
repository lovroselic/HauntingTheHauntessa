const MOVABLE_INTERACTION_OBJECT = {
    
    
    WolfPuppy: {
        name: "WolfPuppy",
        category: "interaction_item",
        model: "Wolf",
        scale: 1.2 / 2 ** 3,
        rotateToNorth: Math.PI,
        moveSpeed: 1.1,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "WolfPuppy",
        text: "Such a cute puppy.",
    },
    LittleChicken: {
        /** food */
        name: "LittleChicken",
        category: "interaction_item",
        model: "Chicken",
        scale: 1 / 2 ** 6,
        rotateToNorth: -Math.PI / 2,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "LittleChicken",
        text: "Chicken dinner? Yummy."
    },
   
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
    
    Cat: {
        name: "Cat",
        category: "interaction_item",
        model: "Cat",
        scale: 1.8 / 2 ** 8,
        rotateToNorth: Math.PI,
        moveSpeed: 1.75,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Cat",
        text: "Here, kitty kitty kitty!"
    },
    Spider: {
        name: "Spider",
        category: "interaction_item",
        model: "Spider",
        scale: 1 / 2 ** 8,
        rotateToNorth: Math.PI,
        moveSpeed: 1.5,
        material: MATERIAL.standard,
        behaviourArguments: [Infinity, ["wanderer"], -1],
        inventorySprite: "Spider",
        text: "Eight hairy legs? Creepy spider."
    },
    
    
};