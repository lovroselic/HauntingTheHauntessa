/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */
//Assets for CastleHaunt2 (MAzEditor dependencies removed)
"use strict";

LoadFonts = [
    { srcName: "PentaGram.ttf", name: "Pentagram" },
    { srcName: "CPU.ttf", name: "CPU" },
    { srcName: "Headstone.ttf", name: "Headstone" },
];

LoadTextures = [
    /**wall, floor, ceil */

    /** decals that are textures */

    //decal-gates
    { srcName: "Gates/WoodenGate2.jpg", name: "WoodenGate1" },

    //explosions
    { srcName: "ObjectTextures/GreenMetal.jpg", name: "GreenMetal" },
    { srcName: "ObjectTextures/ScrapedMetal.jpg", name: "ScrapedMetal" },
    { srcName: "ObjectTextures/Explosion3.jpg", name: "Explosion" },
    { srcName: "ObjectTextures/Tile.jpg", name: "Tile" },
    { srcName: "ObjectTextures/WoodTexture.jpg", name: "WoodTexture" },
    { srcName: "ObjectTextures/RedLiquid.jpg", name: "RedLiquid" },

    //key textures
    { srcName: "ObjectTextures/BlueMetal.jpg", name: "BlueMetal" },
    { srcName: "ObjectTextures/CyanMetal.jpg", name: "CyanMetal" },
    { srcName: "ObjectTextures/EmeraldTexture.jpg", name: "EmeraldTexture" },
    { srcName: "ObjectTextures/Gold.jpg", name: "Gold" },
    { srcName: "ObjectTextures/OrangeMetal.jpg", name: "OrangeMetal" },
    { srcName: "ObjectTextures/PearlTexture.jpg", name: "PearlTexture" },
    { srcName: "ObjectTextures/PinkMetal.jpg", name: "PinkMetal" },
    { srcName: "ObjectTextures/PurpleMetal.jpg", name: "PurpleMetal" },
    { srcName: "ObjectTextures/RedMetal.jpg", name: "RedMetal" },
    { srcName: "ObjectTextures/Silver.jpg", name: "Silver" },

    //GOld textures (included in keys)
    { srcName: "ObjectTextures/Coins.jpg", name: "Coins" },
    //Skill textures
    { srcName: "ObjectTextures/Red.jpg", name: "Red" },
    { srcName: "ObjectTextures/Red2.jpg", name: "Red2" },
    { srcName: "ObjectTextures/Sting.jpg", name: "Sting" },

    //containers
    { srcName: "ObjectTextures/Barell2.jpg", name: "Barell2" },
    { srcName: "ObjectTextures/Barell3.jpg", name: "Barell3" },
    { srcName: "ObjectTextures/Barrel.jpg", name: "Barrel" },
    { srcName: "ObjectTextures/BookShelf_baseColor.jpg", name: "BookShelf_baseColor" },
    { srcName: "ObjectTextures/Closet4_baseColor.jpg", name: "Closet4_baseColor" },
    { srcName: "ObjectTextures/Crate.jpg", name: "Crate" },
    { srcName: "ObjectTextures/Crate3.jpg", name: "Crate3" },
    { srcName: "ObjectTextures/IronChest_base.jpg", name: "IronChest_base" },
    { srcName: "ObjectTextures/MetalCrateTexture50.jpg", name: "MetalCrateTexture50" },
    { srcName: "ObjectTextures/MetalCrateTexture51.jpg", name: "MetalCrateTexture51" },
    { srcName: "ObjectTextures/MetalCrateTexture52.jpg", name: "MetalCrateTexture52" },
    { srcName: "ObjectTextures/MetalCrateTexture53.jpg", name: "MetalCrateTexture53" },
    { srcName: "ObjectTextures/MetalCrateTexture54.jpg", name: "MetalCrateTexture54" },
    { srcName: "ObjectTextures/PirateChest_baseColor.jpg", name: "PirateChest_baseColor" },
    { srcName: "ObjectTextures/TreasureChest.JPG", name: "TreasureChest" },
    { srcName: "ObjectTextures/Wardrobe.jpg", name: "Wardrobe" },
    { srcName: "ObjectTextures/WoodenCrateTexture50.jpg", name: "WoodenCrateTexture50" },
    { srcName: "ObjectTextures/WoodenCrateTexture51.jpg", name: "WoodenCrateTexture51" },
    { srcName: "ObjectTextures/WoodenCrateTexture52.jpg", name: "WoodenCrateTexture52" },
    { srcName: "ObjectTextures/WoodenCrateTexture53.jpg", name: "WoodenCrateTexture53" },
    { srcName: "ObjectTextures/WoodenCrateTexture54.jpg", name: "WoodenCrateTexture54" },
    { srcName: "ObjectTextures/WoodenCrateTexture55.jpg", name: "WoodenCrateTexture55" },
    { srcName: "ObjectTextures/WoodenCrateTexture56.jpg", name: "WoodenCrateTexture56" },
    { srcName: "ObjectTextures/WoodenCrateTexture57.jpg", name: "WoodenCrateTexture57" },
    { srcName: "ObjectTextures/WoodenCrateTexture58.jpg", name: "WoodenCrateTexture58" },
    { srcName: "ObjectTextures/WoodenCrateTexture59.jpg", name: "WoodenCrateTexture59" },
    { srcName: "ObjectTextures/WoodenCrateTexture60.jpg", name: "WoodenCrateTexture60" },
    { srcName: "ObjectTextures/WoodenCrateTexture61.jpg", name: "WoodenCrateTexture61" },
    { srcName: "ObjectTextures/closet_BaseColor.jpg", name: "closet_BaseColor" },

    //common items
    { srcName: "ObjectTextures/FireballTexture2.jpg", name: "FireballTexture2" },
    { srcName: "ObjectTextures/ScrollTexture.jpg", name: "ScrollTexture" },

    //health items
    { srcName: "ObjectTextures/CanTexture.jpg", name: "CanTexture" },
    { srcName: "ObjectTextures/HealthBoxtexture.jpg", name: "HealthBoxtexture" },
    { srcName: "ObjectTextures/SteakTexture.jpg", name: "SteakTexture" },
    { srcName: "ObjectTextures/WineBottle.jpg", name: "WineBottle" },
    { srcName: "ObjectTextures/cake_basecolor.jpg", name: "cake_basecolor" },

    /** other object textures */
    { srcName: "ObjectTextures/Apple_BaseColor.jpg", name: "Apple_BaseColor" },



    //title
    { srcName: "Title/HTH_title_768.jpg", name: "Title" },
];

LoadAudio = [
    { srcName: "LaughingSkull-Graveyard In The Moonlight.mp3", name: "Title" },

    //action sounds
    { srcName: "UseScroll.mp3", name: "PickBox" },
    { srcName: "Scream.mp3", name: "Scream" },
    { srcName: "SqueekyDoorOpen.mp3", name: "OpenGate" },
    { srcName: "OpenGate.mp3", name: "LiftGate" },
    { srcName: "ClosedDoor.mp3", name: "ClosedDoor" },
    { srcName: "Keys.mp3", name: "Keys" },
    { srcName: "Swallow.mp3", name: "Swallow" },
    { srcName: "death.mp3", name: "Death" },
    { srcName: "UseScroll.mp3", name: "UseScroll" },
    { srcName: "Scroll.mp3", name: "Scroll" },
    { srcName: "Potion.mp3", name: "Potion" },
    { srcName: "Chirp.mp3", name: "Chirp" },
    { srcName: "Failed magic.mp3", name: "MagicFail" },
    { srcName: "Cast.mp3", name: "MagicCast" },
    { srcName: "Power up.mp3", name: "PowerUp" },
    { srcName: "Level up.mp3", name: "LevelUp" },
    { srcName: "Pick up gold.mp3", name: "Pick" },
    { srcName: "Evil laughter.mp3", name: "EvilLaughter" },
    { srcName: "Explosion1.mp3", name: "Explosion" },
    { srcName: "OpenChest.mp3", name: "OpenChest" },
    { srcName: "SwordHit.mp3", name: "SwordHit" },
    { srcName: "SwordMiss2.mp3", name: "SwordMiss" },
    { srcName: "short-buzz.mp3", name: "Buzz" },
    { srcName: "thud.mp3", name: "Thud" },
    { srcName: "Fuse.mp3", name: "Fuse" },
    { srcName: "AngryCat.mp3", name: "AngryCat" },
    { srcName: "Sheep.mp3", name: "Sheep" },
    { srcName: "Banshee.mp3", name: "Banshee" },
    { srcName: "CatchFireball.mp3", name: "CatchFireball" },
    { srcName: "PrincessScream.mp3", name: "PrincessScream" },
    { srcName: "Eating.mp3", name: "Eating" },

    //monstersounds
    { srcName: "MonsterDeath.mp3", name: "MonsterDeath" },
    { srcName: "MonsterAttack1.mp3", name: "MonsterAttack1" },
    { srcName: "MonsterAttack2.mp3", name: "MonsterAttack2" },
    { srcName: "SnakeAttack.mp3", name: "SnakeAttack" },
    { srcName: "MonsterHurt.mp3", name: "MonsterHurt" },
    { srcName: "MonsterHurt2.mp3", name: "MonsterHurt2" },
    { srcName: "BatAttack.mp3", name: "BatAttack" },
    { srcName: "MonsterHurt3.mp3", name: "MonsterHurt3" },
    { srcName: "PainSqueek.mp3", name: "PainSqueek" },
    { srcName: "DeathPain1.mp3", name: "DeathPain1" },
    { srcName: "HumanAttack1.mp3", name: "HumanAttack1" },
    { srcName: "Ow.mp3", name: "Ow" },
    { srcName: "MonsterRoar.mp3", name: "MonsterRoar" },
];

LoadShaders = [
    'vShader_1_0.glsl', 'fShader_1_1.glsl', 'pick_vShader_1_0.glsl', 'pick_fShader_1_0.glsl',
    'particle_render_fShader_1_0.glsl', 'particle_render_vShader_1_0.glsl', 'particle_transform_fShader_1_0.glsl', 'particle_transform_vShader_1_0.glsl',
    'model_vShader_1_1.glsl',
];

LoadObjects = [
    "gem.obj", "coins.obj", "key.obj", "ball.obj", "blockwall.obj",
    "pentagram.obj", "sting.obj", "heart.obj",
    "treasure_chest.obj", "wardrobe.obj", "barrel.obj", "Barell2.obj", "Barell3.obj", "crate.obj", "crateFragile.obj", "closet.obj", "bookshelf.obj",
    "pirate_chest.obj", "closet4.obj", "iron_chest.obj",
    "scroll.obj", "coin.obj",
    "cake.obj", "steak.obj", "can.obj", "wine.obj",
    "apple.obj",
];

LoadModels = [
    'ThePrincess.gltf',
    "Chicken.gltf", "Pig.gltf",
];

LoadSprites = [
    //reserved
    { srcName: "Reserved/DeathPlace.png", name: "DeathPlace" },

    //intro
    { srcName: "Slides/HTH_slide1.jpg", name: "HTH_slide1" },
    { srcName: "Slides/HTH_slide2.jpg", name: "HTH_slide2" },
    { srcName: "Slides/HTH_slide3.jpg", name: "HTH_slide3" },
    { srcName: "Slides/HTH_slide4.jpg", name: "HTH_slide4" },

    // frescoes - entities


    //action movables

    //triggers
    { srcName: "Triggers/MarbleTriggerButton.png", name: "MarbleTriggerButton" },
    { srcName: "Triggers/PurpleTriggerButton.png", name: "PurpleTriggerButton" },
    { srcName: "Triggers/RockTriggerButton.png", name: "RockTriggerButton" },
    { srcName: "Triggers/SmoothWallButton.png", name: "SmoothWallButton" },

    //lairs


    //doors
    { srcName: "Doors/DungeonDoor_Blue2.png", name: "DungeonDoor_Blue" },
    { srcName: "Doors/DungeonDoor_Closed2.png", name: "DungeonDoor_Closed" },
    { srcName: "Doors/DungeonDoor_Emerald2.png", name: "DungeonDoor_Emerald" },
    { srcName: "Doors/DungeonDoor_Gold2.png", name: "DungeonDoor_Gold" },
    { srcName: "Doors/DungeonDoor_Green2.png", name: "DungeonDoor_Green" },
    { srcName: "Doors/DungeonDoor_Open3.png", name: "DungeonDoor_Open" },
    { srcName: "Doors/DungeonDoor_Pearl2.png", name: "DungeonDoor_Pearl" },
    { srcName: "Doors/DungeonDoor_Purple2.png", name: "DungeonDoor_Purple" },
    { srcName: "Doors/DungeonDoor_Red2.png", name: "DungeonDoor_Red" },
    { srcName: "Doors/DungeonDoor_Silver2.png", name: "DungeonDoor_Silver" },
    { srcName: "Doors/DungeonDoor_Up3.jpg", name: "DungeonDoor_Up" },
    { srcName: "Doors/DungeonDoor_Down3.jpg", name: "DungeonDoor_Down" },
    { srcName: "Doors/DungeonDoor_Cyan.png", name: "DungeonDoor_Cyan" },
    { srcName: "Doors/DungeonDoor_Orange.png", name: "DungeonDoor_Orange" },
    { srcName: "Doors/DungeonDoor_Pink.png", name: "DungeonDoor_Pink" },

    //shrines

    //scrolls


    //status
    { srcName: "Status/Invisible2.png", name: "Invisible" },

    //health items
    { srcName: "Items/BeerHealth.png", name: "BeerHealth" },
    { srcName: "Items/Cake.png", name: "Cake" },
    { srcName: "Items/Champagne.png", name: "Champagne" },
    { srcName: "Items/HealthBox.png", name: "HealthBox" },
    { srcName: "Items/Steak.png", name: "Steak" },
    { srcName: "Items/RoastChicken.png", name: "RoastChicken" },
    { srcName: "Items/RoastPig.png", name: "RoastPig" },

    // items
    { srcName: "Items/Apple.png", name: "Apple" },
    { srcName: "Items/GoldCoin.png", name: "GoldCoin" },


    //UI, skills
    { srcName: "UI/CompassRose.png", name: "CompassRose" },
    { srcName: "UI/wavyL.png", name: "wavyL" },
    { srcName: "UI/wavyR.png", name: "wavyR" },
    { srcName: "UI/LineBottom.png", name: "LineBottom" },
    { srcName: "UI/LineTop.png", name: "LineTop" },
    { srcName: "UI/Bag2.png", name: "Bag" },
    { srcName: "UI/AvatarPrincess200w.png", name: "Avatar" },
    { srcName: "UI/FireballIcon48.png", name: "FireBallIcon" },
    { srcName: "UI/FireRing48.png", name: "FireRing" },
    { srcName: "UI/OrnateMagicFlask48.png", name: "OrnateMagicFlask" },
    { srcName: "UI/PrincessLivesIcon.png", name: "Lives" },
    { srcName: "UI/Fireball32.png", name: "FireBall32" },
    { srcName: "UI/FireRing32.png", name: "FireRing32" },
    { srcName: "UI/SkillFireball96.png", name: "SkillFireball" },
    { srcName: "UI/SkillKick96.png", name: "SkillKick" },
    { srcName: "UI/Heart64.png", name: "Heart" },
    //{ srcName: "UI/Cake48.png", name: "Cake" },
    { srcName: "UI/Floppy64.png", name: "SavedOK" },
    { srcName: "UI/Beware64.png", name: "SavedFail" },
    { srcName: "Skills/Heart48.png", name: "HeartSkill" },

    //lights


    //keys
    { srcName: "Keys/BlueKey2.png", name: "BlueKey" },
    { srcName: "Keys/EmeraldKey2.png", name: "EmeraldKey" },
    { srcName: "Keys/GoldKey2.png", name: "GoldKey" },
    { srcName: "Keys/GreenKey2.png", name: "GreenKey" },
    { srcName: "Keys/PearlKey2.png", name: "PearlKey" },
    { srcName: "Keys/PurpleKey2.png", name: "PurpleKey" },
    { srcName: "Keys/RedKey2.png", name: "RedKey" },
    { srcName: "Keys/SilverKey2.png", name: "SilverKey" },
    { srcName: "Keys/OrangeKey.png", name: "OrangeKey" },
    { srcName: "Keys/PinkKey.png", name: "PinkKey" },
    { srcName: "Keys/CyanKey.png", name: "CyanKey" },

    //ObjDecals - all


    //decal-pics - all

];

console.log("%cAssets for CastleHaunt2 ready.", "color: orange");