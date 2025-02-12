const INTERACTION_ENTITY = {
    FireballReader: {
        name: "FireballReader",
        sprite: "FireballReader",
        category: 'crest',
        voice: "Female",
        wants: ["FireExtinguisher"],
        gives: "FireballBook",
        text: {
            intro: "I'm diving into some very HOT topics here, and things are getting a little out of hand. Bring me a fire extinguisher, and I'll share the secrets of the FireballBook with you.",
            progress: null,
            conclusion: "Crisis averted! As promised, here is the FireballBook. Handle it with care, it's sizzling with knowledge."
        }
    },
    CastleOfficeGamer: {
        name: "CastleOfficeGamer",
        sprite: "CastleOfficeGamer",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Floppy", "Floppy"],
        gives: "Carrot",
        text: {
            intro: "CastleHaunt runs on two floppies, and I'm dying to play. Bring them to me, and I'll share my vegan lunch. Sadly, it's all I've got.",
            progress: "One floppy loaded, but the game needs both disks. Keep looking!",
            conclusion: "Game on! As promised, here's my carrot. Vegan life isn't for everyone, Princess."
        }
    },
    CuteBarmaiden: {
        name: "CuteBarmaiden",
        sprite: "CuteBarmaiden",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin", "GoldCoin"],
        gives: "GlassOfBeer",
        text: {
            intro: "Hey Princess, care to buy a round? Two gold coins get us two beers, one for me, one for you. Cheers!",
            progress: "One coin down, but this bar doesn't do tabs. Another coin, please!",
            conclusion: "Thanks for the round! Here's your beer to go. Drink responsibly, Princess!"
        }
    },
    Armored: {
        name: "Armored",
        sprite: "Armored",
        category: 'crest',
        voice: "Female2",
        wants: ["Shield", "Shield"],
        gives: "Helmet",
        text: {
            intro: "A maiden can never have too many shields! Bring me more, and I'll part with this helmet. I'm far too pretty to wear it anyway.",
            progress: "One shield is nice, but my collection isn't complete. Keep them coming!",
            conclusion: "With my shields stacked high, this helmet is all yours. It's better suited to you anyway! When did you see yourself in the mirror the last time?"
        }
    },
    HornyMonica: {
        name: "HornyMonica",
        sprite: "HornyMonica",
        category: 'crest',
        voice: "Female",
        wants: ["Candle", "Candle", "Candle"],
        gives: "YinYangBook",
        text: {
            intro: "I seek illumination, both the warm glow of candles and the deeper light of wisdom. Bring me what I desire, and I'll share the wisdom with you.",
            progress: "The light grows brighter, but I need more candles to fully illuminate my path. Keep searching.",
            conclusion: "The glow is complete, and so is my enlightenment. Take this book, may it's wisdom guide you as it has me."
        }
    },
    DeMonique: {
        name: "DeMonique",
        sprite: "DeMonique",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Skull", "Skull", "Skull"],
        gives: "Kiss",
        text: {
            intro: "Do you know what I crave? Bring me what I desire, and I'll reward you with a kiss so unique, you can carry it in your backpack.",
            progress: "You're getting closer to earning my kiss, but something's still missing. Keep going.",
            conclusion: "Ah, now you've satisfied my longing. Mwah. Here's my kiss. Cold, rigid, and perfectly yours to take with you."
        }
    },
    Bunny: {
        name: "Bunny",
        sprite: "Bunny",
        category: 'crest',
        voice: "Female",
        wants: ["Carrot", "Carrot"],
        gives: "Spectacles",
        text: {
            intro: "They say carrots are great for eyesight, and I'm testing the theory. Bring me a couple, and I might not need these spectacles anymore!",
            progress: "One carrot down, but I'm still squinting. Bring another, please!",
            conclusion: "Two carrots later, and I can finally see clearly! Take my spectacles, they're all yours now."
        }
    },
    Juggles: {
        name: "Juggles",
        sprite: "Juggles",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldSphere", "GoldSphere", "GoldSphere"],
        gives: "SkullNecklace",
        text: {
            intro: "My act needs an upgrade, golden balls are all the rage! Bring me three, and I'll part with my golden skull necklace.",
            progress: "Another sphere for the show, but I still need more to dazzle the crowd. Keep going!",
            conclusion: "Perfect! My act is now golden, and as promised, here's my skull necklace. It's a statement piece, wouldn't you agree?"
        }
    },
    Owl: {
        name: "Owl",
        sprite: "Owl",
        category: 'crest',
        voice: "Female",
        wants: ["Mouse", "Mouse"],
        gives: "Rat",
        text: {
            intro: "Wise and fair, that's me. Bring me two delicious little mice, and I'll trade you a plump rat. A fair deal, don't you think?",
            progress: "One mouse down, but wisdom says two make the trade. Keep hunting!",
            conclusion: "Two mice delivered, and a deal's a deal. Here's your rat. Enjoy, if you dare!"
        }
    },
    Narancina: {
        name: "Narancina",
        sprite: "Narancina",
        category: 'crest',
        voice: "Female",
        wants: ["SkullNecklace"],
        gives: "OrangeBoots",
        text: {
            intro: "A girl needs her bling! A gold necklace with a skull pendant. Perfect for my style. Bring me one, and I'll trade you my fancy orange boots.",
            progress: null,
            conclusion: "This necklace is to die for! As promised, here are my orange leather boots. Walk in style, darling."
        }
    },
    ApparitiaDefector: {
        name: "ApparitiaDefector",
        sprite: "ApparitiaDefector",
        category: 'crest',
        voice: "Apparitia",
        wants: ["OrangeLeggings", "OrangeBra", "OrangeBoots"],
        gives: "Spear",
        text: {
            intro: "I'm ready to defect to your side, Princess. But I'll need a disguise. Orange is the new white, after all. Help me out, and my spear is yours.",
            progress: "One sleek piece closer to a brighter disguise, but I still stand out like a ghost. Keep going!",
            conclusion: "I'm fully orange and no longer glaringly white! As promised, here's my spear. May it serve you better than my old allies. Now off to the changing room."
        }
    },
    Viking: {
        name: "Viking",
        sprite: "Viking",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Beer", "GlassOfBeer"],
        gives: "BattleAxe",
        text: {
            intro: "After battle, a shield maiden needs her beer! Two beer, or not two beer?  No beer, no deal. What's it gonna be?",
            progress: "One beer down, but I'm still parched. Don't leave me hanging. Bring the second! A different one.",
            conclusion: "Ah, now that hits the spot! A promise is a promise. Here's my trusty battleaxe. Go chop some heads with honor!"
        }
    },
    Shroomess: {
        name: "Shroomess",
        sprite: "Shroomess",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Mushroom", "Mushroom", "Mushroom"],
        gives: "TreeOfLifeBook",
        text: {
            intro: "Life's deeper truths lie hidden in the shrooms. Bring me enough, and I'll share the wisdom I've gathered in my Tree of Life book.",
            progress: "Another shroom delivered, but my trip isn't complete. Keep gathering!",
            conclusion: "Ah, the shrooms have spoken! As promised, here's my Tree of Life book. May it open your mind as it did mine."
        }
    },
    KnightWithoutHelmet: {
        name: "KnightWithoutHelmet",
        sprite: "KnightWithoutHelmet",
        category: 'crest',
        voice: "Female2",
        wants: ["Helmet"],
        gives: "Mace",
        text: {
            intro: "A true knight must protect her golden locks, even in battle. Bring me a helmet, and I'll part with my spare mace as I am more of a sword girl myself.",
            progress: null,
            conclusion: "Ah, finally, my hair is safe! As promised, take my mace. May it serve you well in your battles."
        }
    },
    YoniLibrarian: {
        name: "YoniLibrarian",
        sprite: "YoniLibrarian",
        category: 'crest',
        voice: "Female",
        wants: ["Spectacles"],
        gives: "YoniBook",
        text: {
            intro: "These old spectacles are so last century. Help me find something more fashionable, and I'll share a rare treasure from my collection.",
            progress: null,
            conclusion: "Ah, these new spectacles are perfect! I'm so grateful, I'll gift you a rare and sacred text about worshipping goddess Yoni. Was it goddess or baddass?."
        }
    },
    Frogessa: {
        name: "Frogessa",
        sprite: "Frogessa",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Kiss"],
        gives: "Fins",
        text: {
            intro: "I am a princess trapped in the body of a frog. Surely a kiss will break the curse. Wink, wink.",
            progress: null,
            conclusion: "Alas, the curse remains unbroken. But I am grateful for your effort. Take my spare fins. They might be more useful than my fairy tale."
        }
    },
    CorridorSwimmer: {
        name: "CorridorSwimmer",
        sprite: "CorridorSwimmer",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["ScubaMask", "Fins"],
        gives: "Shuriken",
        text: {
            intro: "I spotted a strange, dark metal object in the waters. Bring me the right gear, and I'll dive in to retrieve it for you.",
            progress: "I've got part of the gear, but I still need more to take the plunge. Keep going!",
            conclusion: "All set! The dive was successful. Here's the shuriken I found. Turns out, even the depths can be deadly!"
        }
    },
    BlackAngel: {
        name: "BlackAngel",
        sprite: "BlackAngel",
        category: 'crest',
        voice: "Female2",
        wants: ["BlueFeather", "GreenFeather", "RedFeather"],
        gives: "PurpleKey",
        text: {
            intro: "Black is timeless, but a pop of color? Now that's modern. Bring me some vibrant feathers, and I'll reward you with the hellish delights.",
            progress: "One color down, but my wings are still a monochrome bore. Keep those feathers coming!",
            conclusion: "My wings are now a fashion statement! Here's the Purple Key. May it unlock a world of sinful pleasures."
        }
    },
    WhiteAngel: {
        name: "WhiteAngel",
        sprite: "WhiteAngel",
        category: 'crest',
        voice: "Female",
        wants: ["WhiteFeather", "WhiteFeather", "WhiteFeather"],
        gives: "PearlKey",
        text: {
            intro: "My wings are broken, and I need feathers to mend them. Help me fly again, and I'll give you a key to a heavenly place.",
            progress: "A feather here, a feather there, but my wings still can't take flight. Don't stop now.",
            conclusion: "With my wings restored, I can soar once more. As promised, here's the Pearl Key. May it guide you to the heavens."
        }
    },
    SquirrelCoin: {
        name: "SquirrelCoin",
        sprite: "SquirrelCoin",
        category: 'crest',
        voice: "Female2",
        wants: ["Acorn", "Walnut", "Hazelnuts"],
        gives: "GoldCoin",
        text: {
            intro: "I'm a collector of fine nuts. Acorns, walnuts, hazelnuts. Bring me one of each, and I'll pay you handsomly.",
            progress: "You've brought me something tasty, but my collection isn't complete yet. Keep hunting!",
            conclusion: "All the finest nuts, gathered at last! Here's your gold coin. Maybe you can train some more."
        }
    },
    WaterNymph: {
        name: "WaterNymph",
        sprite: "WaterNymph",
        category: 'crest',
        voice: "Female",
        wants: ["Fish", "TropicalFish"],
        gives: "Sapphire",
        text: {
            intro: "The shimmering waters need balance, and I seek two special fish to restore it. Bring me a simple fish and a vibrant tropical one, and I'll reward you with something I found deep in the mud.",
            progress: "One fish swims back to the waters, but the balance isn't complete yet. Keep searching.",
            conclusion: "The waters are balanced again! Here's a nice blue sapphire, from a muddy waters, Use it wisely."
        }
    },
    Wolverine: {
        name: "Wolverine",
        sprite: "Wolverine",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["LittlePiggy", "LittlePiggy", "LittlePiggy"],
        gives: "PinkLatexGloves",
        text: {
            intro: "I'm conducting a very important experiment. Will three little piggies still huff and puff when I get my claws on them? Bring them to me, and I'll reward you with some silly pink gloves I, acquired.",
            progress: "A piggy here, a piggy there, but I still need all three to proceed with science.",
            conclusion: "All three piggies, perfect! As promised, here are the pink latex gloves. They belonged to a certain pinkhooded rider. Before lunch. My lunch."
        }
    },
    PinkPianoGirl: {
        name: "PinkPianoGirl",
        sprite: "PinkPianoGirl",
        category: 'crest',
        voice: "Female",
        wants: ["PinkLatexGloves", "PinkBoots"],
        gives: "LP",
        text: {
            intro: "I'm recording my new metal masterpiece: Prelude for a Pink Piano Primadonna. I just need some sleek accessories for the promotion. Can you help?",
            progress: "One piece ready, but the look isn't complete. Keep it coming!",
            conclusion: "Now I'm perfectly styled for my album release! Here's your LP - turn it up to eleven!"
        }
    },
    Mermaid: {
        name: "Mermaid",
        sprite: "Mermaid",
        category: 'crest',
        voice: "Female2",
        wants: ["RedFishTail", "RedLatexBra"],
        gives: "PinkDiamond",
        text: {
            intro: "This greenish sea look is so last season. I'm ready to go bold and red! Bring me the pieces I need, and I'll reward you with a PinkDiamond from the ocean's depths.",
            progress: "One item down, but I'm not rocking red just yet. Keep going!",
            conclusion: "Fabulous! My red transformation is complete. Here's your PinkDiamond, a gift from the waves."
        }
    },
    SpiderMom: {
        name: "SpiderMom",
        sprite: "SpiderMom",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["BabyGreenSpider", "BabyGreenSpider", "BabyGreenSpider"],
        gives: "Ruby",
        text: {
            intro: "My little green darlings are missing! Bring them back to me, and I'll share a precious thing from my web's treasures.",
            progress: "One of my babies is home, but the web still feels empty. Keep searching!",
            conclusion: "All my babies are safe and sound! As promised, here's a bloodred ruby. A small price for a mother's peace of mind."
        }
    },
    BeachGirl: {
        name: "BeachGirl",
        sprite: "BeachGirl",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Shell", "Shell"],
        gives: "Sapphire",
        text: {
            intro: "You won't believe this, but I found a sapphire on the beach! Trade me two shells, and it's yours.",
            progress: "One shell down, but I need two for the trade. Keep searching!",
            conclusion: "Two shells? Deal! Here's your sapphire. Who knew beachcombing could be so lucrative?"
        }
    },
    RocketScientist: {
        name: "RocketScientist",
        sprite: "RocketScientist",
        category: 'crest',
        voice: "Female2",
        wants: ["RocketTop", "RocketBottom"],
        gives: "PocketRocket",
        text: {
            intro: "There's only one genius in the galaxy who can assemble a PocketRocket, and you're looking at her. Bring me the parts, and I'll make it happen.",
            progress: "I've got part of it, but we're not launching yet. Keep those parts coming!",
            conclusion: "All systems go! Your PocketRocket is assembled and ready for liftoff. You're welcome, by the way. I am such a smart blonde."
        }
    },
    SpaceWarrior: {
        name: "SpaceWarrior",
        sprite: "SpaceWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["PocketRocket"],
        gives: "PinkDiamond",
        text: {
            intro: "I'm grounded without a PocketRocket! Bring me one, and I'll reward you with a very rare gem, straight from the stars.",
            progress: null,
            conclusion: "PocketRocket secured! Here's your PinkDiamond. Don't spend it all in one galaxy."
        }
    },
    Sparklyssa: {
        name: "Sparklyssa",
        sprite: "Sparklyssa",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["PinkDiamond", "PinkDiamond"],
        gives: "Emerald",
        text: {
            intro: "Me, Sparklyssa, I'm not as greedy as SassyPhire or RubyErella. But I have standards to uphold. Two rare pink diamons for an emerald. Final price!",
            progress: "One pink diamond? Nice start, but I need a pair to keep my sparkle standards.",
            conclusion: "Two pink diamonds! Here's your emerald, love. And don't forget, AssMeralda has a thing for them."
        }
    },
    SassyPhire: {
        name: "SassyPhire",
        sprite: "SassyPhire",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Sapphire", "Sapphire", "Sapphire"],
        gives: "Emerald",
        text: {
            intro: "Three sapphires for one emerald. A deal sparkling with sass. Just like me. Care to trade?",
            progress: "A sapphire here, a sapphire there… but I need all three for the magic to happen.",
            conclusion: "Three sapphires! Here's your emerald, darling. Oh, and I hear AssMeralda has a thing for these beauties."
        }
    },
    RubyErella: {
        name: "RubyErella",
        sprite: "RubyErella",
        category: 'crest',
        voice: "Female2",
        wants: ["Ruby", "Ruby", "Ruby"],
        gives: "Emerald",
        text: {
            intro: "Three rubies for one emerald? Sounds like a deal to me. Fair? Maybe not, but do you really have another choice?",
            progress: "A ruby or two, but not enough for this trade. Keep them coming!",
            conclusion: "Three rubies, such shiny beauties! Here's your emerald. AssMeralda will know what to do with it. "
        }
    },
    AssMeralda: {
        name: "AssMeralda",
        sprite: "AssMeralda",
        category: 'crest',
        voice: "Female2",
        wants: ["Emerald", "Emerald", "Emerald"],
        gives: "EmeraldIngots",
        text: {
            intro: "Emerald ingots? Of course, I can make those. Bring me enough emeralds, and I'll handle the rest. Trust me, I know my gems.",
            progress: "Some emeralds are here, but it's not quite enough to fire up my craft. Keep looking!",
            conclusion: "All the emeralds I need! Here are your Emerald Ingots, expertly forged. You're welcome!"
        }
    },
    MetalGuitarist: {
        name: "MetalGuitarist",
        sprite: "MetalGuitarist",
        category: 'crest',
        voice: "Female",
        wants: ["GuitarPick", "GuitarPick", "GuitarPick"],
        gives: "LP",
        text: {
            intro: "Shredding this hard breaks a lot of picks. Bring me some spares, and I'll give you the latest LaughingSkull album.",
            progress: "I'm still missing enough  picks to finish my solos. Keep going!",
            conclusion: "Yes! Now I can rock without worry. Here's the LaughingSkull album. Play it loud!"
        }
    },
    Metallica: {
        name: "Metallica",
        sprite: "Metallica",
        category: 'crest',
        voice: "Female2",
        wants: ["LP", "LP", "LP", "LP", "LP"],
        gives: "KeyMould",
        text: {
            intro: "I live for metal, both the music and the craft. Bring me five heavy metal records, and I'll gift you something truly unique. a KeyMould. Think of it as your key to A Minor success. Got it? Hahaha.",
            progress: "The rhythm's building, but I need more records to hit the perfect note. Rock me more!",
            conclusion: "Five records of pure metal bliss! As promised, here's your KeyMould. It's a masterpiece, just like a killer riff! And me."
        }
    },
    EngineerDomme: {
        name: "EngineerDomme",
        sprite: "EngineerDomme",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["KeyMould", "EmeraldIngots", "Document"],
        gives: "EmeraldKey",
        text: {
            intro: "I can craft you an Emerald Key, but I'll need the proper tools and materials. Bring me a key mould and some emerald ingots, and instructions, and I'll work my magic.",
            progress: "I've got part of what I need, but I can't make the key without everything. Keep going!",
            conclusion: "Perfect! With these materials, your Emerald Key is ready. Treasure it. It's a work of art. like me!"
        }
    },
    Dragoness: {
        name: "Dragoness",
        sprite: "Dragoness",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon", "BabyDragon"],
        gives: "Document",
        text: {
            intro: "My precious hatchlings are lost! Bring back all five, and I'll share with you a rare secret on how to craft emerald ingots.",
            progress: "One of my babies is safe, but the others are still out there. Don't stop until they are all home!",
            conclusion: "My hatchlings are finally safe. You've earned this, and here's the instructions to forge emerald ingots, knowledge as rare as my treasures."
        }
    },
    CaveGirl: {
        name: "CaveGirl",
        sprite: "CaveGirl",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Bone"],
        gives: "GoldCoin",
        text: {
            intro: "Bring the old lady a bone to chew on, would you, dear?",
            progress: null,
            conclusion: "Excellent! Is it vegan? Who cares. Here's the gold coin. I have no use for it."
        }
    },
    CatQueen: {
        name: "CatQueen",
        sprite: "CatQueen",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Cat", "Cat", "Cat", "Cat", "Cat"],
        gives: "Chicken",
        text: {
            intro: "My little kitties have wandered off! Bring them back, all five, and I'll share a chicken I was just about to fry.",
            progress: "One kitty found, but my brood is still scattered. Keep searching, dear!",
            conclusion: "All my kitties are safely home! As promised, here's that chicken, still alive, and just waiting to be cooked!"
        }
    },
    BlondeChick: {
        name: "BlondeChick",
        sprite: "BlondeChick",
        category: 'crest',
        voice: "Female2",
        wants: ["Chicken", "Chicken", "Chicken", "Chicken", "Chicken"],
        gives: "Egg",
        text: {
            intro: "My poor little chicks, lost and alone! Bring them back to me, all five, and I'll give you a special gift.",
            progress: "A chick returned! But there are more still out there, waiting for a safe return.",
            conclusion: "My flock is whole again! As promised, here's an egg, a little one who hasn't hatched yet. Take good care of it!"
        }
    },
    ApparitiaDomme: {
        name: "ApparitiaDomme",
        sprite: "ApparitiaDomme",
        category: 'crest',
        voice: "Apparitia",
        wants: ["RedLeatherTop", "RedLeatherLeggings", "RedLeatherBoots"],
        gives: "Brush",
        text: {
            intro: "I'm tired of this dull, white look! Bring me a red leather outfit, sleek as the famous Three Dommes, and maybe I'll reconsider my alliances.",
            progress: "One step closer to a daring new look! Keep going; I won't cross over until I'm fully dressed.",
            conclusion: "Ah, finally! Now I'm as fierce as the Three Dommes. As promised, here's a brush to keep those boots shining. Consider me on your side now."
        }
    },
    PizzaMaker: {
        name: "PizzaMaker",
        sprite: "PizzaMaker",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Egg", "Milk"],
        gives: "Pizza",
        text: {
            intro: "Bring me fresh egg and milk, and I'll whip up a pizza unlike any you've tasted before!",
            progress: "Almost there, but I still need the final touch. Don't keep the dough waiting!",
            conclusion: "Perfect! My special recipe is complete. Here's your pizza. Hot, fresh, and unforgettable! Like me."
        }
    },
    HungryMiner: {
        name: "HungryMiner",
        sprite: "HungryMiner",
        category: 'crest',
        voice: "Female",
        wants: ["Pizza", "Beer"],
        gives: "GoldOre",
        text: {
            intro: "Toiling away in your gold mines, sweating and starving, the least you could do is bring me some pizza and beer!",
            progress: "Pizza or beer, but not both? Come on, I need a full meal to keep going!",
            conclusion: "Now that's more like it! Thanks for the grub. Here, a little something from the mines as a ‘thank you’."
        }
    },
    PickaxeMiner: {
        name: "PickaxeMiner",
        sprite: "PickaxeMiner",
        category: 'crest',
        voice: "Female",
        wants: ["PickAxe"],
        gives: "GoldOre",
        text: {
            intro: "Do you see how rusty my pickaxe is? What will you do about it?",
            progress: null,
            conclusion: "Oh, this is better! Here's your gold ore for your trouble"
        }
    },
    ThirstyMiner: {
        name: "ThirstyMiner",
        sprite: "ThirstyMiner",
        category: 'crest',
        voice: "Female2",
        wants: ["GlassOfBeer"],
        gives: "GoldOre",
        text: {
            intro: "Phew! I'm parched from all this digging! Bring me a glass of beer, and I'll pay in gold.",
            progress: null,
            conclusion: "Ah, that hit the spot! Here's your gold ore, worth every sip!"
        }
    },
    GoldKeysa1: {
        name: "GoldKeysa1",
        sprite: "GoldKeysa1",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "GoldKey",
        text: {
            intro: "I crave gold bars, shiny and true! Bring me three, I'll craft a key for you.",
            progress: "More gold please, keep it flowing! Soon your key will start glowing.",
            conclusion: "Three bars complete! Here's your key, forged with gold, shiny as can be!"
        }
    },
    GoldKeysa2: {
        name: "GoldKeysa2",
        sprite: "GoldKeysa2",
        category: 'crest',
        voice: "Female",
        wants: ["GoldOre", "GoldOre", "GoldOre"],
        gives: "GoldKey",
        text: {
            intro: "Bring me raw gold, from deep in the ground. Three chunks will get you a key, safe and sound.",
            progress: "More ore to make it whole, keep digging for that golden goal!",
            conclusion: "With gold in hand, your key is now made. Shiny, bright, time to upgrade!"
        }
    },
    BeerBarrelGirl: {
        name: "BeerBarrelGirl",
        sprite: "BeerBarrelGirl",
        category: 'crest',
        voice: "Female2",
        wants: ["SmallBarrel", "SmallBarrel", "SmallBarrel"],
        gives: "GlassOfBeer",
        text: {
            intro: "I'm stuck down here, my barrels are gone! Bring me three, and I'll share just one.",
            progress: "A barrel here, a barrel there... Keep 'em coming, we're almost there!",
            conclusion: "Three barrels back, my cellar's cheer! Enjoy this prize, a glass of beer!"
        }
    },
    ApparitiaCorruption: {
        name: "ApparitiaCorruption",
        sprite: "ApparitiaCorruption",
        category: 'crest',
        voice: "Apparitia",
        wants: ["WhiteHandbag"],
        gives: "GoldCoin",
        text: {
            intro: "I stole one gold coin. You will not be able to train with all master Mistresses.",
            progress: null,
            conclusion: "Oh. I guess bribery works. Corruption rules. Here you go."
        }
    },
    Strongarmed: {
        name: "Strongarmed",
        sprite: "Strongarmed",
        category: 'crest',
        voice: "Female",
        wants: ["DumbBell", "DumbBell"],
        gives: "GoldCoin",
        text: {
            intro: "I need to keep training! Bring me two dumbbells, and I'll reward you.",
            progress: "One dumbbell isn't enough! I need both to really feel the burn.",
            conclusion: "Perfect! Now I can train harder. Here's your gold coin—earned through sweat and strength!"
        }
    },
    ApplePicker: {
        name: "ApplePicker",
        sprite: "ApplePicker",
        category: 'crest',
        voice: "Female",
        wants: ["Apple", "Apple"],
        gives: "GreenKey",
        text: {
            intro: "I was counting my apples, but I am two short. Help, or you will go nowhere.",
            progress: "I want one more.",
            conclusion: "My count is now complete. Good luck in your fights."
        }
    },
    Spideress: {
        name: "Spideress",
        sprite: "Spideress",
        category: 'crest',
        voice: "Female",
        wants: ["Fly", "Fly", "Fly"],
        gives: "SilverKey",
        text: {
            intro: "I am so very hungry.",
            progress: "Fly tasted marvelous, but I am still hungry.",
            conclusion: "My appetite is sated. You can continue your fight."
        }
    },
    Librarian: {
        name: "Librarian",
        sprite: "Librarian",
        category: 'crest',
        voice: "Female",
        wants: ["Book", "GoldenBook"],
        gives: "Heels",
        text: {
            intro: "In the quiet aisles, amidst whispered tales, I seek two tomes where knowledge prevails.",
            progress: "One book in hand, yet another still await, Hurry, lest curiosity abate.",
            conclusion: "Both volumes now mine, for knowledge I yearn, For your diligence, these red heels, a pairless return."
        }
    },
    Sorceress: {
        name: "Sorceress",
        sprite: "Sorceress",
        category: 'crest',
        voice: "Female2",
        wants: ["Mushroom", "Mushroom", "Mushroom", "Mushroom", "Mushroom"],
        gives: "Poison",
        text: {
            intro: "From darkened woods and shadowed grove, bring me mushrooms, for my deadly stove.",
            progress: "A mushroom found, but more to go, my cauldron waits for the final throw.",
            conclusion: "All mushrooms brewed, the poison is keen, take this vial, silent and green."
        }
    },
    Ninja: {
        name: "Ninja",
        sprite: "Ninja",
        category: 'crest',
        voice: "Female2",
        wants: ["Dagger", "Dagger", "Dagger"],
        gives: "Mushroom",
        text: {
            intro: "In the shadows, daggers gleam, A stealthy girl's best dream.",
            progress: "One blade secured, but more to find, Bring them to me, and we'll be aligned.",
            conclusion: "Daggers in hand, my stealth is complete, Take this mushroom, for a poison so sweet."
        }
    },
    Fairy: {
        name: "Fairy",
        sprite: "Fairy",
        category: 'crest',
        voice: "Female2",
        wants: ["FlowerCrown", "Mirror"],
        gives: "Mushroom",
        text: {
            intro: "In the glimmer of dawn's first light, I seek adornments to enhance my sight.",
            progress: "A crown of flowers, a mirror bright, continue your quest through the enchanted night.",
            conclusion: "Adorned and seen, in beauty true, for you, a mushroom, dark as dew."
        }
    },
    GreyWarrior: {
        name: "GreyWarrior",
        sprite: "GreyWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["Helmet", "Sword", "Shield"],
        gives: "Dagger",
        text: {
            intro: "Clad in shadow, seeking might, I need arms for the fight. Bring true knight's gear, to stand bold without fear.",
            progress: "My arsenal grows, yet remains incomplete, More gear to gather before I'm elite.",
            conclusion: "Equipped and ready, a knight stands tall, Take this dagger, it's too small for my call."
        }
    },
    Licky: {
        name: "Licky",
        sprite: "Licky",
        category: 'crest',
        voice: "Female",
        wants: ["RedHandbag", "Mirror"],
        gives: "Helmet",
        text: {
            intro: "To mirror my beauty, a red handbag I seek, Add a looking glass, for the chic and unique.",
            progress: "One splendid item now shines in my clutch, Find the other, for I long for such.",
            conclusion: "Red handbag and mirror, my allure now reflects, Take this helmet, for metal's what I reject."
        }
    },
    StilettoTwin: {
        name: "StilettoTwin",
        sprite: "StilettoTwin",
        category: 'crest',
        voice: "Female2",
        wants: ["Heels", "Heels"],
        gives: "RedHandbag",
        text: {
            intro: "Enchanting in red, I seek to enhance, A pair of red heels, to improve my stance.",
            progress: "One heel closer to complete allure, Bring the other, make my charm pure.",
            conclusion: "With both heels in hand, my style is set, For your help, a red handbag, the best you can get."
        }
    },
    RedRidingHood: {
        name: "RedRidingHood",
        sprite: "RedRidingHood",
        category: 'crest',
        voice: "FemHighQuick",
        wants: ["WolfPuppy", "WolfPuppy", "WolfPuppy"],
        gives: "Heels",
        text: {
            intro: "Through woods dark and deep, I search for pups lost, Bring them back to me, whatever the cost.",
            progress: "One little wolf found, but more still roam, In the forest's shadows, far from home.",
            conclusion: "All my pups safe, my heart feels whole, For your trouble, one red stiletto, complete your sole."
        }
    },
    Purrscilla: {
        name: "Purrscilla",
        sprite: "Purrscilla",
        category: 'crest',
        voice: "Female",
        wants: ["LeoPumps", "LeoPumps", "LeoHat", "Leotard"],
        gives: "GoldCoin",
        text: {
            intro: "Purrscilla purrs for stylish grace, spotted fashion, my ideal embrace.",
            progress: "Fashion's call, one piece is here, more to strut, bring them near.",
            conclusion: "All in leopard, style complete, here's your gold, for a feat so neat."
        }
    },
    ApparitiaTraitor: {
        name: "ApparitiaTraitor",
        sprite: "ApparitiaTraitor",
        category: 'crest',
        voice: "Apparitia",
        wants: ["WhiteHandbag", "WhiteHeels"],
        gives: "GoldCoin",
        text: {
            intro: "I am in awe of your fashion. I will cross to your side if you help me with the outfit.",
            progress: "One chic piece found, yet my look remains incomplete, find the other, make my ensemble sweet.",
            conclusion: "Outfitted now in flawless style, for your aid, a gold coin, and henceforth, I'm your ally."
        }
    },
    FarSeer: {
        name: "FarSeer",
        sprite: "FarSeer",
        category: 'crest',
        voice: "Female",
        wants: ["Binoculars"],
        gives: "EmeraldKey",
        text: {
            intro: "I cannot really see far now, but I know this. Without my help, you will not go far.",
            progress: null,
            conclusion: "With my sight restored, I see your path clear. Take this Emerald Key; without it, your quest ends here."
        }
    },
    Weaver: {
        name: "Weaver",
        sprite: "Weaver",
        category: 'crest',
        voice: "Female2",
        wants: ["BlueRose", "PurpleRose", "RedRose"],
        gives: "FlowerCrown",
        text: {
            intro: "With petals bright and colors fair, I weave crowns beyond compare.",
            progress: "A rose in hand, but more still stray, Gather them all, for a crown to display.",
            conclusion: "With all three roses, the crown is spun, Wear this Flower Crown, your beauty's won."
        }
    },
    Wolfie: {
        name: "Wolfie",
        sprite: "Wolfie",
        category: 'crest',
        voice: "Female",
        wants: ["Pie", "ConcentratedPoison"],
        gives: "Binoculars",
        text: {
            intro: "I've got a target in mind, and I need your help. Bring me pie and concentrated poison, and you'll see far beyond your wildest dreams.",
            progress: "One part of the plan is in place, but there's still more to do. Bring the rest, and the view will be yours.",
            conclusion: "With pie and poison, my plan is set. Here's your binoculars, now you'll truly see far."
        }
    },
    PoisonWitch: {
        name: "PoisonWitch",
        sprite: "PoisonWitch",
        category: 'crest',
        voice: "Female2",
        wants: ["Poison", "Poison", "Poison"],
        gives: "ConcentratedPoison",
        text: {
            intro: "Bring me your poisons, weak and mild, I'll brew them stronger, deadly and wild.",
            progress: "A dose is here, but more is due, Gather them all, for power to imbue.",
            conclusion: "With poisons combined, distilled with flair, Take this Concentrated Poison, handle with care."
        }
    },
    Cookie: {
        name: "Cookie",
        sprite: "Cookie",
        category: 'crest',
        voice: "Female",
        wants: ["Apple", "Dough"],
        gives: "Pie",
        text: {
            intro: "In the kitchen, where magic's spun, Ingredients needed, one by one.",
            progress: "A mix in progress, but not yet complete, Seek and gather, for a treat so sweet.",
            conclusion: "Ingredients blended, under my chef's guise, For you, a pie, a delicious surprise."
        }
    },
    Bakeress: {
        name: "Bakeress",
        sprite: "Bakeress",
        category: 'crest',
        voice: "Female",
        wants: ["Egg", "Milk"],
        gives: "Dough",
        text: {
            intro: "Flour and passion, for bread to rise, Egg and milk, for dough's disguise.",
            progress: "Stirring, waiting, something lacks, Continue your quest, no time to relax.",
            conclusion: "Egg and milk, now mixed within, Your reward, dough ready to spin."
        }
    },
    SkullCollector: {
        name: "SkullCollector",
        sprite: "SkullCollector",
        category: 'crest',
        voice: "Female",
        wants: ["Skull", "Skull", "Skull", "Skull", "Skull"],
        gives: "GoldCoin",
        text: {
            intro: "In shadows lurk, a collector's plea, skulls she seeks, from you and me.",
            progress: "Her collection grows, yet still she waits, for more to come, through darkened gates.",
            conclusion: "With skulls in tow, her smile gleams, a gold coin yours, in moonlight beams.",
        }
    },
    AlloyaPinkass: {
        name: "AlloyaPinkass",
        sprite: "AlloyaPinkass",
        category: 'crest',
        voice: "Female",
        wants: ["GoldBar", "IronBar", "SilverBar", "UraniumBar"],
        gives: "GoldSteel",
        text: {
            intro: "In fire and forge, my art does bloom, For GoldSteel creation, metals I consume.",
            progress: "Bar by bar, the alloy takes shape, Continue your quest, let no metal escape.",
            conclusion: "Gold, iron, silver, uranium, now blend, GoldSteel is forged, your journey's end."
        }
    },
    Keysa: {
        name: "Keysa",
        sprite: "Keysa",
        category: 'crest',
        voice: "Female",
        wants: ["GoldSteel", "PurpleTear"],
        gives: "PurpleKey",
        text: {
            intro: "In my workshop, magic and metal blend, For a unique key, two treasures I'll mend.",
            progress: "One piece is here, bring another to be clear.",
            conclusion: "GoldSteel and PurpleTear, now finely entwined, Behold, the PurpleKey, uniquely designed."
        }
    },
    Gemma: {
        name: "Gemma",
        sprite: "Gemma",
        category: 'crest',
        voice: "Female",
        wants: ["Diamond", "Amethyst", "Moonstone", "Pearl"],
        gives: "PurpleTear",
        text: {
            intro: "Beneath the earth, where secrets gleam, I seek jewels to fulfill a dream.",
            progress: "A gem a stone, in hand you bring, Yet more are needed, for the tear to sing.",
            conclusion: "Diamond, amethyst, moonstone, pearl, all unite, Behold, the PurpleTear, in its mystical light."
        }
    },
    Climber: {
        name: "Climber",
        sprite: "Climber",
        category: 'crest',
        voice: "Female",
        wants: ["Shawl", "Gloves", "WoolenCap"],
        gives: "RedKey",
        text: {
            intro: "Where were you so long, Princess? Don't you know how cold I am?",
            progress: "Cloth and warmth, piece by piece, Continue on, till all's in fleece.",
            conclusion: "At last, warmth surrounds, chill's defeat, For your help, take this Red Key, a prize complete."
        }
    },
    MissHill: {
        name: "MissHill",
        sprite: "MissHill",
        category: 'crest',
        voice: "Female",
        wants: ["HikingBoot", "HikingBoot", "BackPack"],
        gives: "UraniumBar",
        text: {
            intro: "Stranded up here without boots or pack, but with a little help, I'll be back on track. Bring me some gear, and I'll share a rare treat.",
            progress: "One step closer, but I'm still stuck - find the rest, and I'll have some luck.",
            conclusion: "Boots laced and backpack ready, here's your uranium bar - now my journey's steady."
        }
    },
    Jeweliette: {
        name: "Jeweliette",
        sprite: "Jeweliette",
        category: 'crest',
        voice: "Female",
        wants: ["GreenGem", "BlueGem"],
        gives: "Diamond",
        text: {
            intro: "Amidst the sparkle, I yearn for hue, Green and Blue, a trade for you.",
            progress: "A gem of color, a start so bright, Yet more I seek, to my delight.",
            conclusion: "Green and blue, now mine to hold, For you, a diamond, clear and bold."
        }
    },
    Shepardess: {
        name: "Shepardess",
        sprite: "Shepardess",
        category: 'crest',
        voice: "Female",
        wants: ["BabySheep", "BabySheep", "BabySheep", "BabySheep", "BabySheep"],
        gives: "WoolenCap",
        text: {
            intro: "Lost in meadows, my sheep, my care, Find them please, this task I dare.",
            progress: "Some have returned, but others still stray, Under sun and rain, they wander away.",
            conclusion: "All my sheep, safe and sound at last, A woolen cap for you, as promised in the past."
        }
    },
    Seamstress: {
        name: "Seamstress",
        sprite: "Seamstress",
        category: 'crest',
        voice: "Female",
        wants: ["BabySheep", "Scissors", "RedColor"],
        gives: "Shawl",
        text: {
            intro: "A sheep to prune, scissors to snip, and red to dye. Bring them all, and a fine shawl is nigh.",
            progress: "You've found one, but not the rest, Keep searching, so I can weave my best.",
            conclusion: "With sheep, scissors, and red all in hand, your new shawl is ready, just as planned."
        }
    },
    Blacksmistress: {
        name: "Blacksmistress",
        sprite: "Blacksmistress",
        category: 'crest',
        voice: "Female",
        wants: ["Anvil", "Hammer"],
        gives: "IronBar",
        text: {
            intro: "With an anvil and hammer, I can forge you an iron bar. Bring me the tools, and I'll get to work.",
            progress: "One tool is in place, but I still need the other to craft something great.",
            conclusion: "Anvil and hammer in hand, your iron bar is ready - crafted just as planned."
        }
    },
    RestingBabe1: {
        name: "RestingBabe1",
        sprite: "RestingBabe1",
        category: 'crest',
        voice: "Female2",
        wants: ["Boots"],
        gives: "BlueKey",
        text: {
            intro: "My feet are freezing, Princess. If you bring me a pair of boots, I'll reward you with this Blue Key.",
            progress: null,
            conclusion: "Ahh, warm feet at last! Here's the Blue Key, and good luck to whoever didn't get those boots!"
        }
    },
    RestingBabe2: {
        name: "RestingBabe2",
        sprite: "RestingBabe2",
        category: 'crest',
        voice: "Female2",
        wants: ["Boots"],
        gives: "GreenKey",
        text: {
            intro: "I can't go anywhere without boots, Princess. If you help me out, I'll give you the Green Key.",
            progress: null,
            conclusion: "Now I'm ready to go! Here's the Green Key, hope the other babe is still chilling barefoot!"
        }
    },
    Hedgehog: {
        name: "Hedgehog",
        sprite: "Hedgehog",
        category: 'crest',
        voice: "Female2",
        wants: ["Apple", "Pear", "Banana", "GreenApple"],
        gives: "BackPack",
        text: {
            intro: "I'm craving some fruit to nibble on, but my little paws can't carry them all. Help me gather the tasty treasures, and I'll give you a backpack in return.",
            progress: "You've found one piece of fruit, but there’s still more to gather for my feast!",
            conclusion: "All this delicious fruit, just for me! You've earned your reward - here's the backpack I promised."
        }
    },
    ForestHedgeHog: {
        name: "ForestHedgeHog",
        sprite: "ForestHedgeHog",
        category: 'crest',
        voice: "Female2",
        wants: ["Apple", "Pear", "GreenApple"],
        gives: "RocketBottom",
        text: {
            intro: "I was starving, okay? So I borrowed ... fine, stole this shiny rocket part. Bring me some fruit, and I might give it back.",
            progress: "You've brought some fruit, but I'm not full yet. More, or no rocket bottom for you!",
            conclusion: "Mmm, delicious! Now that I'm full, here's your rocket part. Maybe next time, leave snacks lying around."
        }
    },
    Goldie: {
        name: "Goldie",
        sprite: "Goldie",
        category: "crest",
        voice: "Female2",
        wants: ["GoldBar", "GoldBar", "GoldBar"],
        gives: "GoldCoin",
        text: {
            intro: "I love the shine of gold! Bring me three gold bars, and I'll give you a shiny coin in return. Fair trade, right?",
            progress: "That's one gold bar, but I need more for my collection!",
            conclusion: "Three gold bars! My collection is shining brighter than ever. Here's your gold coin - such a deal, right?"
        }
    },
    Scooby: {
        name: "Scooby",
        sprite: "Scooby",
        category: "crest",
        voice: "Female2",
        wants: ["ScubaMask", "Fins"],
        gives: "Pearl",
        text: {
            intro: "I can dive deep for that lost pearl, but I need the right gear. Bring me a scuba mask and fins, and I'll fetch it for you.",
            progress: "I've got some gear, but I still need the rest before I dive.",
            conclusion: "All set! I'll dive and retrieve your pearl. Here you go, straight from the depths!"
        }
    },
    Finette: {
        name: "Finette",
        sprite: "Finette",
        category: 'crest',
        voice: "Female",
        wants: ["FishBone", "FishBone"],
        gives: "Fins",
        text: {
            intro: "From ocean's depths, a plea for respect, Ancestors' remains, I wish to collect.",
            progress: "One relic returned to the sea's embrace, Seek another, to complete the grace.",
            conclusion: "Ancestors honored, their rest now serene, For you, a spare set of fins, a small, fitting tribute from the sea."
        }
    },
    BootMaker: {
        name: "BootMaker",
        sprite: "BootMaker",
        category: 'crest',
        voice: "Female2",
        wants: ["LeatherHide", "LeatherHide"],
        gives: "HikingBoot",
        text: {
            intro: "So, you want a hiking boot? Well, I could whip one up, but I'll need two pieces of hide, from a 'dangerous' beast. Yep, a cow.",
            progress: "One hide down, but I still need another from that 'fearsome' cow before I can finish your masterpiece.",
            conclusion: "Two hides? Wow, you survived the cows! Here's your one hiking boot. Maybe you'll find the other... someday."
        }
    },
    BootMaker2: {
        name: "BootMaker2",
        sprite: "BootMaker2",
        category: 'crest',
        voice: "Female2",
        wants: ["LeatherHide", "LeatherHide"],
        gives: "HikingBoot",
        text: {
            intro: "Oh, you're after a hiking boot, huh? No problem, just bring me two hides from the most 'ferocious' beast around... the cow. Scary stuff, I know.",
            progress: "Halfway there! Just one more piece of cowhide, and I'll craft you the finest single boot you've ever seen.",
            conclusion: "You did it! You conquered the cow menace. Here's your one boot. Good luck finding its twin out there!"
        }
    },
    CowGirl1: {
        name: "CowGirl1",
        sprite: "CowGirl1",
        category: 'crest',
        voice: "Princess",
        wants: ["HayBale", "HayBale"],
        gives: "LeatherHide",
        text: {
            intro: "Poor mute thing, are you hungry? Cow?",
            progress: "You like the hay?",
            conclusion: "Now that I fed you, you gave me your skin. As you should, since I am your Princess. You belong to me."
        }
    },
    GoldSmelter: {
        name: "GoldSmelter",
        sprite: "GoldSmelter",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldOre", "GoldOre", "GoldOre"],
        gives: "GoldBar",
        text: {
            intro: "You want a shiny gold bar? Well, I need three chunks of gold ore. Don't worry, it only takes a 'little' heat to smelt them.",
            progress: "You're on the right track, but I still need more gold to get the furnace going.",
            conclusion: "Three ores! Time to fire up the furnace. Here's your freshly smelted gold bar. Don't spend it all in one place!"
        }
    },
    Swampy: {
        name: "Swampy",
        sprite: "Swampy",
        category: 'crest',
        voice: "Female",
        wants: ["Frog", "Frog", "Frog"],
        gives: "Hammer",
        text: {
            intro: "I just know one of these frogs is a prince in disguise! Help me catch three, and I'll give you a hammer I, hmm, 'borrowed' from Blacksmithstress.",
            progress: "Hmm, still not sure if this frog is royalty. Keep searching, I need more!",
            conclusion: "Three frogs! Still no prince, but here's that hammer I promised. Maybe you'll have better luck with your quest!"
        }
    },
    Fishelle: {
        name: "Fishelle",
        sprite: "Fishelle",
        category: 'crest',
        voice: "Female",
        wants: ["Fish", "Fish", "Fish"],
        gives: "Amethyst",
        text: {
            intro: "My little ones are out there somewhere in the deep. Help me find them, and I'll reward you with a precious amethyst from the ocean floor.",
            progress: "One fish closer, but I still need the rest of my dear offspring.",
            conclusion: "All my little ones are safe! As promised, here's the amethyst from the depths of the ocean. It's as shiny as they are precious to me!"
        }
    },
    MoonElf: {
        name: "MoonElf",
        sprite: "MoonElf",
        category: 'crest',
        voice: "Female",
        wants: ["Moon", "Moon"],
        gives: "Moonstone",
        text: {
            intro: "I collect moons, two are already mine, but I need two more to complete my collection. Bring them to me, and I'll gift you a MoonStone.",
            progress: "One moon shines in my hand, but the collection is still incomplete.",
            conclusion: "With two more moons, my collection is now whole. As promised, here's your MoonStone, glowing with celestial energy."
        }
    },
    DyeMaker: {
        name: "DyeMaker",
        sprite: "DyeMaker",
        category: 'crest',
        voice: "Female2",
        wants: ["EmptyBottle"],
        gives: "RedColor",
        text: {
            intro: "I've got the perfect red dye ready, but I need something to pour it into. Bring me an empty bottle, and I'll fill it with vibrant color.",
            progress: null,
            conclusion: "Ah, the perfect vessel! Here's your red dye, all bottled up and ready to use."
        }
    },
    SquirrelHungry: {
        name: "SquirrelHungry",
        sprite: "SquirrelHungry",
        category: "crest",
        voice: "Female2",
        wants: ["Acorn", "Acorn", "Acorn"],
        gives: "GoldCoin",
        text: {
            intro: "I'm starving! If you bring me three acorns, I'll reward you with a shiny gold coin. Fair trade for a full belly, right?",
            progress: "I'm getting closer to a feast, but I still need more acorns to fill me up!",
            conclusion: "Ahh, delicious! Now that I'm full, here's your gold coin, just like I promised."
        }
    },
    Surfer: {
        name: "Surfer",
        sprite: "Surfer",
        category: "crest",
        voice: "Female2",
        wants: ["SunScreen", "Towel"],
        gives: "Shell",
        text: {
            intro: "Just finished catching some waves, but now I need to dry off and protect my skin. Bring me a towel and some sunscreen, and I'll give you this beautiful shell I found.",
            progress: "I've got one thing, but I still need more before I can chill properly!",
            conclusion: "All set! Thanks for the help. Here's the shell I promised, straight from the ocean's shore."
        }
    },
    Venus: {
        name: "Venus",
        sprite: "Venus",
        category: "crest",
        voice: "Female",
        wants: ["SunScreen", "Towel"],
        gives: "Shell",
        text: {
            intro: "Emerging from the sea is lovely, but I could use some sunscreen and a towel to complete the look. Help me out, and I'll give you this stunning shell I found.",
            progress: "One thing's done, but I still need more before I'm ready to bask in the sun!",
            conclusion: "Perfect! Now I'm feeling fabulous. Here's the shell I promised, a gift from the ocean's depths."
        }
    },
    Tourist: {
        name: "Tourist",
        sprite: "Tourist",
        category: "crest",
        voice: "Female",
        wants: ["Shell", "Shell"],
        gives: "GoldKey",
        text: {
            intro: "I need two perfect shells to complete my - um, beach outfit. Help me out, and I'll give you this Gold Key. No space for it in this tight bikini, anyway!",
            progress: "One shell down, but I still need another to finish the look!",
            conclusion: "Thanks! Now my bra is  complete. Here's the Gold Key,trust me, I wasn't hiding it anywhere in this bikini."
        }
    },
    Rugrat: {
        name: "Rugrat",
        sprite: "Rugrat",
        category: 'crest',
        voice: "Female",
        wants: ["Wine", "Wine"],
        gives: "GoldCoin",
        text: {
            intro: "Bring me more wine, honey.",
            progress: "Yes. Like that. But more.",
            conclusion: "Here you go love. Buy youreself something. Now leave me."
        }
    },
    Cow: {
        name: "Cow",
        sprite: "Cow",
        category: 'crest',
        voice: "Princess",
        wants: ["HayBale", "HayBale"],
        gives: "Milk",
        text: {
            intro: "Poor mute thing, are you hungry? Cow? Would you let me milk you if I feed you?",
            progress: "Hey, you like the hay. I'll bring more.",
            conclusion: "Now I will milk you. Stand ready."
        }
    },
    Bathy: {
        name: "Bathy",
        sprite: "Bathy",
        category: 'crest',
        voice: "Female2",
        wants: ["RubberDuck", "Sponge"],
        gives: "GoldCoin",
        text: {
            intro: "Bath time shouldn't be so lonely! Bring me some company and a gentle touch, and I'll make it worth your while.",
            progress: "One thing's here, but I still need more to make this bath perfect.",
            conclusion: "Ahh, everything I needed for the perfect soak! Here's your gold coin, thanks for making bath time blissful."
        }
    },
    Beatchy: {
        name: "Beatchy",
        sprite: "Beatchy",
        category: 'crest',
        voice: "Female2",
        wants: ["RedSandals", "RedLeatherHat"],
        gives: "GoldCoin",
        text: {
            intro: "This red bikini is fire, but my look is not complete. I need some headturning headwear and fancy footwear. Help me out, darling!",
            progress: "One piece found, fabulous! But I'm still feeling incomplete. Keep searching, my stylish savior!",
            conclusion: "Perfection! Now my outfit is as dazzling as the sun. Here's your gold coin, sweetie, you've earned it!"
        }
    },
    DommeFromTheHole: {
        name: "DommeFromTheHole",
        sprite: "DommeFromTheHole",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "PickAxe",
        text: {
            intro: "From the depths, I bring a deal. A PickAxe for a single gold coin. Do you dare to dig deeper?",
            progress: null,
            conclusion: "The coin is mine, and the PickAxe is yours. Happy mining... if you survive."
        }
    },
};