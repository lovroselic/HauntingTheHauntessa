const INTERACTION_SHRINE = {
    PitchforkFarmer: {
        name: "PitchforkFarmer",
        sprite: "PitchforkFarmer",
        category: 'crest',
        voice: "Female2",
        wants: ["BabySheep", "BabySheep", "BabySheep"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "Mary had a little lamb… or rather three of them. Now, where the heck are they gone?",
            progress: "Lamb by lamb, we're inching closer to lambchops. Keep it up!",
            conclusion: "Finally, all set for a barbecue feast! Your health will thank you for this."
        }
    },
    NiqabBabe: {
        name: "NiqabBabe",
        sprite: "NiqabBabe",
        category: 'crest',
        voice: "Female",
        wants: ["AnkhBook", "FireballBook", "PrincessBook", "TreeOfLifeBook"],
        gives: "Magic",
        level: 7,
        text: {
            intro: "Bismillah, the time has come to break free from these oppressive chains. Bring me books of wisdom, Habibi, and I will share the magic of my freedom with you.",
            progress: "Shukran for this gift, but I need more knowledge to truly rise. Imshallah, you will bring them soon.",
            conclusion: "With these books, I am reborn! No longer bound by false tenets, I offer you the magic of my newfound freedom. Go, Habibi, and use it to shape your destiny!"
        }
    },
    Nun: {
        name: "Nun",
        sprite: "Nun",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["YoniBook", "YinYangBook", "VenusBook", "TripleMoonBook"],
        gives: "Magic",
        level: 7,
        text: {
            intro: "O sancta simplicitas! Enough of praising imaginary friends. Bring me books of truth and forbidden wisdom, and I shall share my ars magica with you.",
            progress: "A single book, gratias tibi, but my journey to enlightenment of apostasy is not complete. More knowledge is needed.",
            conclusion: "Ah, sapientia lux est! With these tomes, I am free from the chains of the faith. In return, I gift you my newfound knowledge of nuclear power. Use it wisely, or not at all."
        }
    },
    NinjaX: {
        name: "NinjaX",
        sprite: "NinjaX",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Shuriken", "Shuriken", "Shuriken"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "My throwing stars are missing, and without them, my art is incomplete. Bring them back, and I'll teach you the ways of stealth and death, ninja style.",
            progress: "One shuriken recovered, but I need all three to regain my edge. Keep searching.",
            conclusion: "All my stars are back where they belong. As promised, let me teach you the art of the ninja. Silent, swift, and deadly."
        }
    },
    BlueViper: {
        name: "BlueViper",
        sprite: "BlueViper",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Rat", "Rat", "Rat"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "I have a craving for rats. Bring me three, and I'll teach you to strike with the precision and speed of a viper.",
            progress: "A rat delivered, but I need more to satisfy my hunger. Keep hunting!",
            conclusion: "Three rats, delicious! Now, let me show you the art of the viper's strike. Quick, deadly, and unstoppable."
        }
    },
    IceQueen: {
        name: "IceQueen",
        sprite: "IceQueen",
        category: 'crest',
        voice: "Female",
        wants: ["IceCube", "IceCube", "IceCube"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Whiskey without ice? Unthinkable. Bring me some cubes, and perhaps my magical beauty will rub off on you.",
            progress: "A cube or two, but my drink is still warm. Keep them coming!",
            conclusion: "Ah, perfectly chilled! You've earned a touch of my magic. Use it wisely. Beauty like mine is rare."
        }
    },
    SpartaKiss: {
        name: "SpartaKiss",
        sprite: "SpartaKiss",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Dagger", "Sword", "Spear", "BattleAxe", "Mace"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "A true warrior knows the best defense is a strong offense. Bring me weapons for my collection, and I'll teach you the art of the attack.",
            progress: "Another weapon for the arsenal, but the collection isn't complete. Bring me more tools of war!",
            conclusion: "With these weapons, you've proven your warrior's spirit. Now, let me teach you how to strike like a warrior!"
        }
    },
    Fox: {
        name: "Fox",
        sprite: "Fox",
        category: 'crest',
        voice: "Female",
        wants: ["Chicken", "Chicken", "Chicken"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "Chickens are great for my health, and sometimes for yours too. Bring me three, and I'll show you the secret to staying hearty!",
            progress: "A chicken delivered, but I'm still feeling peckish. Keep hunting!",
            conclusion: "Three chickens! I'm feeling fit as a fiddle. Now, let me share my secret to improving your health. You're welcome!"
        }
    },
    SpiderDefense: {
        name: "SpiderDefense",
        sprite: "SpiderDefense",
        category: 'crest',
        voice: "Female2",
        wants: ["Spider", "Spider", "Spider"],
        gives: "Attack",
        text: {
            intro: "Find my babies and I will teach you some defense skills.",
            progress: "Excellent, but I have more babies.",
            conclusion: "I have sharpened your heels. You are even more dangerous now.",
        }
    },
   
    Doctress: {
        name: "Doctress",
        sprite: "Doctress",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "In white coat's care, a cure I wield, your health to boost, if gold's unsealed.",
            progress: null,
            conclusion: "Gold received, now feel my art, increased health, a fresh new start."
        }
    },
    Gunny: {
        name: "Gunny",
        sprite: "Gunny",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Got the guts but not the bite? Hand over a gold coin, and I'll show you how to attack with fury.",
            progress: null,
            conclusion: "With that coin, you've earned some power. Go forth and strike with ferocity!"
        }
    },
    Teacher: {
        name: "Teacher",
        sprite: "Teacher",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Do you want to learn how to control fire? I can teach you.",
            progress: null,
            conclusion: "Burn them girl. Burn them."
        }
    },
    FireballTrainer: {
        name: "FireballTrainer",
        sprite: "FireballTrainer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Want to hurl fire with finesse? Give me a gold coin, and I'll turn you into a Fireball master.",
            progress: null,
            conclusion: "That coin just bought you some real heat. Your Fireballs are now hotter than ever!"
        }
    },
    YoungLeopardess: {
        name: "YoungLeopardess",
        sprite: "YoungLeopardess",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Speed and strength are the key. Hand over a gold coin, and I'll sharpen your fighting instincts.",
            progress: null,
            conclusion: "With that coin, you've earned the ferocity of a leopard. Now go, and strike with precision and power!"
        }
    },
    Alpinist: {
        name: "Alpinist",
        sprite: "Alpinist",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Climbing mountains isn't just about endurance. It is about strength and precision. For a gold coin, I'll teach you to fight like you're scaling the highest peaks.",
            progress: null,
            conclusion: "With that coin, you've gained the strength and agility of a climber. Now scale your battles with ease!"
        }
    },
    Barbarian: {
        name: "Barbarian",
        sprite: "Barbarian",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "You want to hit harder? I can show you how. Hand over a gold coin, and I'll turn your fists into weapons.",
            progress: null,
            conclusion: "With that coin, you've earned some real power. Now go smash anything that stands in your way!"
        }
    },
    NymphWarrior: {
        name: "NymphWarrior",
        sprite: "NymphWarrior",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Strength and grace flow through me. For a gold coin, I can teach you to fight with both.",
            progress: null,
            conclusion: "With that coin, you've earned the skills of a warrior. Now go and let your strength blossom in battle!"
        }
    },
    Horny: {
        name: "Horny",
        sprite: "Horny",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "I know fire, and I know magic. For a gold coin, I'll show you how to wield both with a little devilish flair.",
            progress: null,
            conclusion: "That coin just unlocked some serious power. Go ahead, play with fire if you dare."
        }
    },
    Horny2: {
        name: "Horny2",
        sprite: "Horny2",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Looking for some fiery magic? For a gold coin, I'll teach you the secrets of flames and spells.",
            progress: null,
            conclusion: "With that coin, you've gained the power of fire. Now go burn bright - or burn them down!"
        }
    },
    TheReaper: {
        name: "TheReaper",
        sprite: "TheReaper",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "For a mere gold coin, I'll teach you the ancient blood art of beheading. Trust me, it's worth every drop.",
            progress: null,
            conclusion: "With that coin, you now hold the power of the reaper. Your attacks will strike with deadly precision."
        }
    },
    BustyDemoness: {
        name: "BustyDemoness",
        sprite: "BustyDemoness",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Feeling magical today! For just a gold coin, I'll share some of my powerful secrets with you.",
            progress: null,
            conclusion: "That coin was well spent, darling. Now you're a little more magical, thanks to me!"
        }
    },
    RedHeadKnightessa: {
        name: "RedHeadKnightessa",
        sprite: "RedHeadKnightessa",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "I'm a master of the sword, and for a gold coin, I'll teach you how to wield it with violent precision.",
            progress: null,
            conclusion: "That coin's bought you some serious sword skills. Now go forth and let your enemies fear your blade!"
        }
    },
    BlondeKnight: {
        name: "BlondeKnight",
        sprite: "BlondeKnight",
        category: "crest",
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Attack",
        text: {
            intro: "Want to learn how to swing a sword like a pro? For a gold coin, I'll teach you the art of the perfect strike.",
            progress: null,
            conclusion: "Lesson complete! With those moves, you'll make even the fiercest foes think twice. Go show them what you've learned!"
        }
    },
    DarkPriestess: {
        name: "DarkPriestess",
        sprite: "DarkPriestess",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "Magic",
        text: {
            intro: "Pray for magic, pray with gold. Make your enemies do as they are told.",
            progress: null,
            conclusion: "The coin is given, the spell is cast. Wield this magic, make their terror last."
        }
    },
    Ruberella: {
        name: "Ruberella",
        sprite: "Ruberella",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        text: {
            intro: "One gold coin, and I'll make you feel stronger! It could just be my charm... who knows?",
            progress: null,
            conclusion: "With that coin, your heart grows bold. Must be my magic, or maybe just me!"
        }
    },
    RedMiniDomme: {
        name: "RedMiniDomme",
        sprite: "RedMiniDomme",
        category: 'crest',
        voice: "Female2",
        wants: ["Brush"],
        gives: "HeartSkill",
        text: {
            intro: "Find the brush, kneel and clean my boots. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your health."
        }
    },
    BlackMiniDomme: {
        name: "BlackMiniDomme",
        sprite: "BlackMiniDomme",
        category: 'crest',
        voice: "Female",
        wants: ["Brush"],
        gives: "Magic",
        text: {
            intro: "Find the brush, kneel and clean my pumps. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your magic skills."
        }
    },
    RedTopDomme: {
        name: "RedTopDomme",
        sprite: "RedTopDomme",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["Brush"],
        gives: "Attack",
        text: {
            intro: "Find the brush, kneel and clean my boots. Show humility and respect and you will be rewarded.",
            progress: null,
            conclusion: "Your service is accepted. As a reward I increased your fighting skills."
        }
    },
    CatBabeMagic: {
        name: "CatBabeMagic",
        sprite: "CatBabeMagic",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Rat"],
        gives: "Magic",
        text: {
            intro: "Meeow. Hungry. Rat. Now. Magic.",
            progress: null,
            conclusion: "Princess. Magic. Best."
        }
    },
    CatBabeAttack: {
        name: "CatBabeAttack",
        sprite: "CatBabeAttack",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["Cheese"],
        gives: "Attack",
        text: {
            intro: "Meeow. Cheese. Mouse trap. Help.",
            progress: null,
            conclusion: "Princess. Fights. Best."
        }
    },
    CatBabeHealth: {
        name: "CatBabeHealth",
        sprite: "CatBabeHealth",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["TropicalFish"],
        gives: "HeartSkill",
        text: {
            intro: "Meeow. Fish. Health. Good.",
            progress: null,
            conclusion: "Princess. Healthy."
        }
    },
    CatBabeMagicChicken: {
        name: "CatBabeMagicChicken",
        sprite: "CatBabeMagicChicken",
        category: 'crest',
        voice: "StrangeFemale",
        wants: ["LittleChicken"],
        gives: "Magic",
        text: {
            intro: "Meeow. Hungry. Chicken, yes. Fried.",
            progress: null,
            conclusion: "Princess. Magic. Strong."
        }
    },
    LastCat: {
        name: "LastCat",
        sprite: "LastCat",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["Mouse"],
        gives: "Magic",
        text: {
            intro: "Get me some focking mouse, you brat.",
            progress: null,
            conclusion: "Just purr. And everybody will be your slave."
        }
    },
    BlackBeret: {
        name: "BlackBeret",
        sprite: "BlackBeret",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "You thought red berets are special forces? Black berets are even more special, don't you see? For a coin of course you'll kick even more ass. And harder.",
            progress: null,
            conclusion: "Just see? Use your heels. Pierce them like with stiletto."
        }
    },
    Alchemist: {
        name: "Alchemist",
        sprite: "Alchemist",
        category: 'crest',
        voice: "FemaleLow",
        wants: ["GoldCoin"],
        gives: "HeartSkill",
        level: 5,
        text: {
            intro: "I brew this amazing potion which will maybe improve your health. Or kill you. Would you want to try it? For a coin? Consider it a clinical trial, haha.",
            progress: null,
            conclusion: "You survived. Amazing."
        }
    },
    MagicHillBillie: {
        name: "MagicHillBillie",
        sprite: "MagicHillBillie",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "I know a new magic trick. Would you care to learn it? For a coin?",
            progress: null,
            conclusion: "Wow. You learn quickly. It's magic, right?"
        }
    },
    SpaceTrainer: {
        name: "SpaceTrainer",
        sprite: "SpaceTrainer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "I can show you how to attack from space. For a coin, I'll show you the advantage of having high ground.",
            progress: null,
            conclusion: "Now you can fight in zero gravity. Go forth and strike with ferocity!"
        }
    },
    Swimmer: {
        name: "Swimmer",
        sprite: "Swimmer",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 3,
        text: {
            intro: "Swimming is good for your muscles and coordination. For a gold coin I will teach you to swim like a fish. And this will improve your fighting skills.",
            progress: null,
            conclusion: "Your moves are amazing. Go and show them what you've learned!"
        }
    },
    CuddlyBear: {
        name: "CuddlyBear",
        sprite: "CuddlyBear",
        category: 'crest',
        voice: "FemaleLow2",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "Let me show you a bear hug. For a single gold coin.",
            progress: null,
            conclusion: "Excellent. Hug them and break their tiny bones."
        }
    },
    AxeBabe: {
        name: "AxeBabe",
        sprite: "AxeBabe",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Attack",
        level: 5,
        text: {
            intro: "For a shiny coin with the face of your mother, haha,  I will tell you something important.",
            progress: null,
            conclusion: "If you have enemies, just axe them. Ahahahaha."
        }
    },
    TransparentTibetan: {
        name: "TransparentTibetan",
        sprite: "TransparentTibetan",
        category: 'crest',
        voice: "Female2",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Every little thing I do is magic. Want to learn?",
            progress: null,
            conclusion: "Now you can do it as well, even with your shaby outfit."
        }
    },
    ApparitiaMagic: {
        name: "ApparitiaMagic",
        sprite: "ApparitiaMagic",
        category: 'crest',
        voice: "Apparitia",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "I am sick of this war. I'll rather share my magic skills with you. For a price of gold coin, naturally.",
            progress: null,
            conclusion: "You are now skilled in the Apparitias magic. Show my silly sisters your progress."
        }
    },
    SorceressDomme: {
        name: "SorceressDomme",
        sprite: "SorceressDomme",
        category: 'crest',
        voice: "Female",
        wants: ["GoldCoin"],
        gives: "Magic",
        level: 5,
        text: {
            intro: "Power comes at a price, darling. Give me a gold coin, and I'll unlock new depths of ancient royal magic within you.",
            progress: null,
            conclusion: "Your payment is received. Feel the surge of magic coursing through you. Now you are a true sorceress."
        }
    },
};