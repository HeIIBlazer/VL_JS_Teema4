var category = ["Home Page","Top lane","Jungle","Mid Lane","ADC","Support", "PLAY"];

var Home_Page_Content = [
    {
        Lane:"Home Page",
        Logo:"Images/HomePage/League_logo_big.png",
        text:"League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre. Since its release in October 2009, League has been free-to-play and is monetized through purchasable character customization. The game is available for Microsoft Windows and macOS.<br> In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a champion, with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their Nexus, a large structure located within.<br> <span style='color:gold'> On this site, we will tell you about 3 champions on each line that you should play right now!</span>"
    }
]

var champions = [
    {
        Lane:"Top lane",
        Name:"Shen",
        Biography:"Among the secretive, Ionian warriors known as the Kinkou, Shen serves as their leader, the Eye of Twilight. He longs to remain free from the confusion of emotion, prejudice, and ego, and walks the unseen path of dispassionate judgment between the spirit realm and the physical world. Tasked with enforcing the equilibrium between them, Shen wields blades of steel and arcane energy against any who would threaten it.",
        Skills:[
        { 
            Passive_Image: "Images/Top laners/Shen/Passive.jpg",
            Passive:"Ki Barrier",
            Passive_info:"After casting a spell, Shen gets a shield. Affecting other champions reduces the cooldown of this effect."
        },
        {
            First_Skill_Image: "Images/Top laners/Shen/Q.jpg",
            First_Skill:"Twilight Assault",
            First_Skill_info:"Shen recalls his spirit blade to attack with it, dealing damage based on the target's max health. The attacks are greatly empowered if it collides with an enemy champion, and all collided enemies are slowed while running away from Shen."
        },
        {
            Second_Skill_Image: "Images/Top laners/Shen/W.jpg",
            Second_Skill:"Spirits Refuge",
            Second_Skill_info:"Attacks that would hit Shen or his allies near his spirit blade are blocked."
        },
        {
            Third_Skill_Image: "Images/Top laners/Shen/E.jpg",
            Third_Skill:"Shadow Dash",
            Third_Skill_info:"Shen dashes in a direction, taunting enemies in his path."
        },
        {
            Ultimate_Image: "Images/Top laners/Shen/R.jpg",
            Ultimate:"Stand United",
            Ultimate_info:"Shen shields target allied champion from incoming damage, and soon after teleports to their location."
        }
        ],
        Mini_Image:"Images/Top Laners/Shen/Shen_mini.jpg",
        Image:"Images/Top Laners/Shen/Shen.jpg"
    },

    {
        Lane:"Top lane",
        Name:"Gnar",
        Biography:"Gnar is a primeval yordle whose playful antics can erupt into a toddler's outrage in an instant, transforming him into a massive beast bent on destruction. Frozen in True Ice for millennia, the curious creature broke free and now hops about a changed world he sees as exotic and wondrous. Delighted by danger, Gnar flings whatever he can at his enemies, be it his bonetooth boomerang, or a nearby building.",
        Skills:[
            {
                Passive_Image: "Images/Top laners/Gnar/Passive.jpg",
                Passive:"Rage Gene",
                Passive_info:"While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells."
            },
            {
                First_Skill_Image:"Images/Top laners/Gnar/Q.jpg",
                First_Skill:"Boomerang Throw / Boulder Toss",
                First_Skill_info:"Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced. Mega Gnar instead throws a boulder that stops on the first unit hit, damaging and slowing everything nearby. It can then be picked up to reduce the cooldown."
            },
            {
                Second_Skill_Image: "Images/Top laners/Gnar/W.jpg",
                Second_Skill:"Hyper / Wallop",
                Second_Skill_info:"Gnar's attacks and spells hype him up, dealing bonus damage and granting him Move Speed. Mega Gnar is too enraged to be hyper and instead can rear up on his hind legs and smash down on the area in front of him, stunning enemies in an area."
            },
            {
                Third_Skill_Image: "Images/Top laners/Gnar/E.jpg",
                Third_Skill:"Hop / Crunch",
                Third_Skill_info:"Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further. Mega Gnar is too large to bounce and instead lands with earth-shattering force, dealing damage in an area around him."
            },
            {
                Ultimate_Image: "Images/Top laners/Gnar/R.jpg",
                Ultimate:"GNAR!",
                Ultimate_info:"Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them. Any enemy that hits a wall is stunned and takes bonus damage."
            }
        ],
        Mini_Image:"Images/Top Laners/Gnar/Gnar_mini.jpg",
        Image:"Images/Top Laners/Gnar/Gnar.jpg"
    },

    {
        Lane:"Top lane",
        Name:"Ornn",
        Biography:"Ornn is the Freljordian spirit of forging and craftsmanship. He works in the solitude of a massive smithy, hammered out from the lava caverns beneath the volcano Hearth-Home. There he stokes bubbling cauldrons of molten rock to purify ores and fashion items of unsurpassed quality. When other deities—especially Volibear—walk the earth and meddle in mortal affairs, Ornn arises to put these impetuous beings back in their place, either with his trusty hammer or the fiery power of the mountains themselves.",
        Skills:[
            {
                Passive_Image: "Images/Top laners/Ornn/Passive.jpg",
                Passive:"Living Forge",
                Passive_info:"Ornn gains an additional bonus Armor and Magic Resistance from all sources. Ornn can spend gold to forge non-consumable items anywhere. Additionally, he can create masterwork items for himself and for his allies."
            },
            {
                First_Skill_Image: "Images/Top laners/Ornn/Q.jpg",
                First_Skill:"Volcanic Rupture",
                First_Skill_info:"Ornn slams the ground, sending out a fissure dealing damage and slowing enemies hit. After a small delay, a magma pillar forms at the end location."
            },
            {
                Second_Skill_Image: "Images/Top laners/Ornn/W.jpg",
                Second_Skill:"Bellows Breath",
                Second_Skill_info:"Ornn advances, breathing fire. Enemies hit by the final gout of flame become Brittle."
            },
            {
                Third_Skill_Image: "Images/Top laners/Ornn/E.jpg",
                Third_Skill:"Searing Charge",
                Third_Skill_info:"Ornn charges, dealing damage to enemies he passes through. If Ornn collides with terrain while charging, the impact creates a shockwave around him which deals damage and knocks up enemies."
            },
            {
                Ultimate_Image: "Images/Top laners/Ornn/R.jpg",
                Ultimate:"Call Of The Forge God",
                Ultimate_info:"Ornn summons a massive elemental at a location which travels toward him with increasing speed. Enemies run over by the elemental take damage, are slowed and are made Brittle. Ornn can recast the ability to charge into the elemental, redirecting it in the direction he hits it, causing the elemental to affect any enemies it runs over to be knocked up, dealing the same damage and re-applying Brittle."
            }
        ],
        Mini_Image:"Images/Top Laners/Ornn/Ornn_mini.jpg",
        Image:"Images/Top Laners/Ornn/Ornn.jpg"

    },

    {
        Lane:"Jungle",
        Name:"Lee sin",
        Biography:"A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks.",
        Skills:[
            {
                Passive_Image: "Images/Junglers/Lee_Sin/Passive.jpg",
                Passive:"Flurry",
                Passive_info:"After Lee Sin uses an ability, his next 2 basic attacks gain Attack Speed and return Energy."
            },
            {
                First_Skill_Image: "Images/Junglers/Lee_Sin/Q.jpg",
                First_Skill:"Sonic Wave / Resonating Strike",
                First_Skill_info:"Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds. Resonating Strike: Lee Sin dashes to the enemy hit by Sonic Wave, dealing physical damage based on the target's missing Health."
            },
            {
                Second_Skill_Image: "Images/Junglers/Lee_Sin/W.jpg",
                Second_Skill:"SafeGuard / Iron Will",
                Second_Skill_info:"Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds. Iron Will: Lee Sin's intense training allows him to thrive in battle. For 4 seconds, Lee Sin gains Life Steal and Spell Vamp."
            },
            {
                Third_Skill_Image: "Images/Junglers/Lee_Sin/E.jpg",
                Third_Skill:"Tempest / Cripple",
                Third_Skill_info:"Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple for the next 3 seconds. Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Move Speed for 4 seconds. Move Speed recovers gradually over the duration."
            },
            {
                Ultimate_Image: "Images/Junglers/Lee_Sin/R.jpg",
                Ultimate:"Drago's Rage",
                Ultimate_info:"Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map."
            }
        ],
        Mini_Image:"Images/Junglers/Lee_Sin/Lee_Sin_mini.jpg",
        Image:"Images/Junglers/Lee_Sin/Lee_Sin.jpg"

    },

    {
        Lane:"Jungle",
        Name:"Kayn",
        Biography:"A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of Shadow into a new era of Ionian supremacy. He wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Kayn bends the weapon to his will... or the malevolent blade consumes him completely, paving the way for the destruction of all Runeterra.",
        Skills:[
            {
                Passive_Image: "Images/Junglers/Kayn/Passive.jpg",
                Passive:"The Darkin Scythe",
                Passive_info:"Kayn wields an ancient weapon and fights Rhaast, the darkin within it, for control. Either the Darkin will triumph, or Kayn will master Rhaast and become the Shadow Assassin. Darkin: Heal for a percentage of spell damage dealt to champions. Shadow Assassin: For the first few seconds in combat with enemy champions, deal bonus damage."
            },
            {
                First_Skill_Image: "Images/Junglers/Kayn/Q.jpg",
                First_Skill:"Reaping Slash",
                First_Skill_info:"Kayn dashes, then slashes. Both deal damage."
            },
            {
                Second_Skill_Image: "Images/Junglers/Kayn/W.jpg",
                Second_Skill:"Blade's Reach",
                Second_Skill_info:"Kayn damages and slows targets in a line."
            },
            {
                Third_Skill_Image: "Images/Junglers/Kayn/E.jpg",
                Third_Skill:"Shadow Step",
                Third_Skill_info:"Kayn can walk through terrain."
            },
            {
                Ultimate_Image: "Images/Junglers/Kayn/R.jpg",
                Ultimate:"Umbral Trespass",
                Ultimate_info:"Kayn hides in an enemy's body, dealing massive damage when he bursts out."
            }
        ],
        Mini_Image:"Images/Junglers/Kayn/Kayn_mini.jpg",
        Image:"Images/Junglers/Kayn/Kayn.jpg"
    },

    {
        Lane:"Jungle",
        Name:"Fiddlesticks",
        Biography:"Something has awoken in Runeterra. Something ancient. Something terrible. The ageless horror known as Fiddlesticks stalks the edges of mortal society, drawn to areas thick with paranoia where it feeds upon terrorized victims. Wielding a jagged scythe, the haggard, makeshift creature reaps fear itself, shattering the minds of those unlucky enough to survive in its wake. Beware the sounding of the crow, or the whispering of the shape that appears 'almost' human… Fiddlesticks has returned.",
        Skills:[
            {
                Passive_Image: "Images/Junglers/Fiddlesticks/Passive.jpg",
                Passive:"A Harmless Scarecrow",
                Passive_info:"Fiddlesticks' trinket is replaced by scarecrow effigies."
            },
            {
                First_Skill_Image: "Images/Junglers/Fiddlesticks/Q.jpg",
                First_Skill:"Terrify",
                First_Skill_info:"Fiddlesticks damaging enemies with spells while unseen or targeting an enemy with Terrify's activation strikes a target unit with fear, causing it to flee in terror for a duration."
            },
            {
                Second_Skill_Image: "Images/Junglers/Fiddlesticks/W.jpg",
                Second_Skill:"Bountiful Harvest",
                Second_Skill_info:"Fiddlesticks drains health from nearby enemies, dealing bonus execute damage at the end of the duration."
            },
            {
                Third_Skill_Image: "Images/Junglers/Fiddlesticks/E.jpg",
                Third_Skill:"Reap",
                Third_Skill_info:"Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash."
            },
            {
                Ultimate_Image: "Images/Junglers/Fiddlesticks/E.jpg",
                Ultimate:"CrowStorm",
                Ultimate_info:"Fiddlesticks slashes an area with its scythe, slowing all enemies hit and silencing enemies hit in the center of the slash."
            }
        ],
        Mini_Image:"Images/Junglers/Fiddlesticks/Fiddlesticks_mini.jpg",
        Image:"Images/Junglers/Fiddlesticks/Fiddlesticks.jpg"
    },

    {
        Lane:"Mid Lane",
        Name:"Yasuo",
        Biography:"An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
        Skills:[
            {
                Passive_Image: "Images/Mid Laners/Yasuo/Passive.jpg",
                Passive:"Way Of The Wanderer",
                Passive_info:"Yasuo's Critical Strike Chance is increased. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster."
            },
            {
                First_Skill_Image: "Images/Mid Laners/Yasuo/Q.jpg",
                First_Skill:"Steel Tempest",
                First_Skill_info:"Thrusts forward, damaging all enemies in a line. On hit, grants a stack of Gathering Storm for a few seconds. At 2 stacks, Steel Tempest fires a whirlwind that knocks Airborne. Steel Tempest is treated as a basic attack and scales with all the same things."
            },
            {
                Second_Skill_Image: "Images/Mid Laners/Yasuo/W.jpg",
                Second_Skill:"Wind Wall",
                Second_Skill_info:"Creates a moving wall that blocks all enemy projectiles for 4 seconds."
            },
            {
                Third_Skill_Image: "Images/Mid Laners/Yasuo/E.jpg",
                Third_Skill:"Sweeping Blade",
                Third_Skill_info:"Dashes through target enemy, dealing magic damage. Each cast increases your next dash's base Damage, up to a max amount. Cannot be re-cast on the same enemy for a few seconds. If Steel Tempest is cast while dashing, it will strike as a circle."
            },
            {
                Ultimate_Image: "Images/Mid Laners/Yasuo/R.jpg",
                Ultimate:"Last Breath",
                Ultimate_info:"Blinks to an Airborne enemy champion, dealing physical damage and holding all Airborne enemies in the area in the air. Grants maximum Flow but resets all stacks of Gathering Storm. For a moderate time afterwards, Yasuo's critical strikes gain significant Bonus Armor Penetration."
            }
        ],
        Mini_Image:"Images/Mid Laners/Yasuo/Yasuo_mini.jpg",
        Image:"Images/Mid Laners/Yasuo/Yasuo.jpg"
    },

    {
        Lane:"Mid Lane",
        Name:"Ekko",
        Biography:"A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
        Skills:[
            {
                Passive_Image: "Images/Mid Laners/Ekko/Passive.jpg",
                Passive:"Z-Drive Resonance",
                Passive_info:"Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion."
            },
            {
                First_Skill_Image: "Images/Mid Laners/Ekko/Q.jpg",
                First_Skill:"Timewinder",
                First_Skill_info:"Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return."
            },
            {
                Second_Skill_Image: "Images/Mid Laners/Ekko/W.jpg",
                Second_Skill:"Parallel Convergence",
                Second_Skill_info:"Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time."
            },
            {
                Third_Skill_Image: "Images/Mid Laners/Ekko/E.jpg",
                Third_Skill:"Phase Dive",
                Third_Skill_info:"Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target."
            },
            {
                Ultimate_Image: "Images/Mid Laners/Ekko/R.jpg",
                Ultimate:"Chronobreak",
                Ultimate_info:"Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage."
            }
        ],
        Mini_Image:"Images/Mid Laners/Ekko/Ekko_mini.jpg",
        Image:"Images/Mid Laners/Ekko/Ekko.jpg"
    },

    {
        Lane:"Mid Lane",
        Name:"Fizz",
        Biography:"Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales of those who have underestimated this slippery character. Often mistaken for some manner of capricious ocean spirit, he seems able to command the beasts of the deep, and delights in confounding his allies and enemies alike.",
        Skills:[
            {
                Passive_Image: "Images/Mid Laners/Fizz/Passive.jpg",
                Passive:"Nimble Fighter",
                Passive_info:"Fizz can move through units and takes a flat amount of reduced damage from all sources."
            },
            {
                First_Skill_Image: "Images/Mid Laners/Fizz/Q.jpg",
                First_Skill:"Urchin Strike",
                First_Skill_info:"Fizz dashes through his target, dealing magic damage and applying on hit effects."
            },
            {
                Second_Skill_Image: "Images/Mid Laners/Fizz/W.jpg",
                Second_Skill:"Seasteno Trodent",
                Second_Skill_info:"Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage and empower his further attacks for a short time."
            },
            {
                Third_Skill_Image: "Images/Mid Laners/Fizz/E.jpg",
                Third_Skill:"Playful / tricster",
                Third_Skill_info:"Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down."
            },
            {
                Ultimate_Image: "Images/Mid Laners/Fizz/R.jpg",
                Ultimate:"Chum The Waters",
                Ultimate_info:"Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed."
            }
        ],
        Mini_Image:"Images/Mid Laners/Fizz/Fizz_mini.jpg",
        Image:"Images/Mid Laners/Fizz/Fizz.jpg"
    },

    {
        Lane:"ADC",
        Name:"Vayne",
        Biography:"Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when slaying practitioners or creations of the dark arts, striking from the shadows with a flurry of silver bolts",
        Skills:[
            {
                Passive_Image: "Images/ADC/Vayne/Passive.jpg",
                Passive:"Night Hunter",
                Passive_info:"Vayne ruthlessly hunts evil-doers, gaining 30 Move Speed when moving toward nearby enemy champions."
            },
            {
                First_Skill_Image: "Images/ADC/Vayne/Q.jpg",
                First_Skill:"Tumble",
                First_Skill_info:"Vayne tumbles, maneuvering to carefully place her next shot. Her next attack deals bonus damage."
            },
            {
                Second_Skill_Image: "Images/ADC/Vayne/W.jpg",
                Second_Skill:"Silver Bolts",
                Second_Skill_info:"Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's max health as bonus true damage.."
            },
            {
                Third_Skill_Image: "Images/ADC/Vayne/E.jpg",
                Third_Skill:"Condemn",
                Third_Skill_info:"Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them."
            },
            {
                Ultimate_Image: "Images/ADC/Vayne/R.jpg",
                Ultimate:"Final Hour",
                Ultimate_info:"Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, reduced Tumble cooldown, and more bonus Move Speed from Night Hunter"
            }
        ],
        Mini_Image:"Images/ADC/Vayne/Vayne_mini.jpg",
        Image:"Images/ADC/Vayne/Vayne.jpg"
    },

    {
        Lane:"ADC",
        Name:"Xayah",
        Biography:"Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan, to protect their dwindling tribe, and restore their race to her vision of its former glory.",
        Skills:[
            {
                Passive_Image: "Images/ADC/Xayah/Passive.jpg",
                Passive:"Clean Cuts",
                Passive_info:"After using an ability, Xayah's next basic attacks will hit all targets along their path and leave a Feather."
            },
            {
                First_Skill_Image: "Images/ADC/Xayah/Q.jpg",
                First_Skill:"Double Daggers",
                First_Skill_info:"Xayah throws two damaging daggers that also drop Feathers she can recall"
            },
            {
                Second_Skill_Image: "Images/ADC/Xayah/W.jpg",
                Second_Skill:"Deadly Plumage",
                Second_Skill_info:"Xayah creates a storm of blades that increase her Attack Speed and damage while also granting her Move Speed if she attacks a champion."
            },
            {
                Third_Skill_Image: "Images/ADC/Xayah/E.jpg",
                Third_Skill:"BladeCaller",
                Third_Skill_info:"Xayah calls back all her dropped Feathers dealing damage and rooting enemies."
            },
            {
                Ultimate_Skill_Image: "Images/ADC/Xayah/R.jpg",
                Ultimate:"FeatherStorm",
                Ultimate_info:"Xayah leaps into the air becoming untargetable and throwing out a fan of daggers, dropping Feathers she can recall."
            }
        ],
        Mini_Image:"Images/ADC/Xayah/Xayah_mini.jpg",
        Image:"Images/ADC/Xayah/Xayah.jpg"
    },

    {
        Lane:"ADC",
        Name:"Lucian",
        Biography:"Lucian, a Sentinel of Light, is a grim hunter of undying spirits, pursuing them relentlessly and annihilating them with his twin relic pistols. After the wraith Thresh slew his wife, Lucian embarked on the path of vengeance—but even with her return to life, his rage is undiminished. Merciless and single-minded, Lucian will stop at nothing to protect the living from the long-dead horrors of the Black Mist.",
        Skills:[
            {
                Passive_Image: "Images/ADC/Lucian/Passive.jpg",
                Passive:"LightSlinger",
                Passive_info:"Whenever Lucian uses an ability, his next attack becomes a double-shot. When Lucian is empowered by another Ally, his next 2 basic attacks will deal bonus magic damage."
            },
            {
                First_Skill_Image: "Images/ADC/Lucian/Q.jpg",
                First_Skill:"Piercing Light",
                First_Skill_info:"Lucian shoots a bolt of piercing light through a target."
            },
            {
                Second_Skill_Image: "Images/ADC/Lucian/W.jpg",
                Second_Skill:"Ardent Blaze",
                Second_Skill_info:"Lucian shoots a missile that explodes in a star shape, marking and briefly revealing enemies. Lucian gains Move Speed for attacking marked enemies."
            },
            {
                Third_Skill_Image: "Images/ADC/Lucian/E.jpg",
                Third_Skill:"Relentless Pursuit",
                Third_Skill_info:"Lucian quickly dashes a short distance. Lightslinger attacks reduce Relentless Pursuit's cooldown."
            },
            {
                Ultimate_Image: "Images/ADC/Lucian/R.jpg",
                Ultimate:"The Culling",
                Ultimate_info:"Lucian unleashes a torrent of shots from his weapons."
            }
        ],
        Mini_Image:"Images/ADC/Lucian/Lucian_mini.jpg",
        Image:"Images/ADC/Lucian/Lucian.jpg"
    },
    {
        Lane:"Support",
        Name:"Thresh",
        Biography:"Sadistic and cunning, Thresh is an ambitious and restless spirit of the Shadow Isles. Once the custodian of countless arcane secrets, he was undone by a power greater than life or death, and now sustains himself by tormenting and breaking others with slow, excruciating inventiveness. His victims suffer far beyond their brief mortal coil as Thresh wreaks agony upon their souls, imprisoning them in his unholy lantern to torture for all eternity.",
        Skills:[
            {
                Passive_Image: "Images/Supports/Thresh/Passive.jpg",
                Passive:"Damnation",
                Passive_info:"Thresh can harvest the souls of enemies that die near him, permanently granting him Armor and Ability Power."
            },
            {
                First_Skill_Image: "Images/Supports/Thresh/Q.jpg",
                First_Skill:"Death Sentence",
                First_Skill_info:"Thresh binds an enemy in chains and pulls them toward him. Activating this ability a second time pulls Thresh to the enemy."
            },
            {
                Second_Skill_Image: "Images/Supports/Thresh/W.jpg",
                Second_Skill:"Dark Passage",
                Second_Skill_info:"Thresh throws out a lantern that shields nearby allied Champions from damage. Allies can click the lantern to dash to Thresh."
            },
            {
                Third_Skill_Image: "Images/Supports/Thresh/E.jpg",
                Third_Skill:"Flay",
                Third_Skill_info:"Thresh's attacks wind up, dealing more damage the longer he waits between attacks. When activated, Thresh sweeps his chain, knocking all enemies hit in the direction of the blow."
            },
            {
                Ultimate_Image: "Images/Supports/Thresh/R.jpg",
                Ultimate:"The Box",
                Ultimate_info:"A prison of walls that slow and deal damage if broken.Lucian unleashes a torrent of shots from his weapons."
            }
        ],
        Mini_Image:"Images/Supports/Thresh/Thresh_mini.jpg",
        Image:"Images/Supports/Thresh/Thresh.jpg"
    },

    {
        Lane:"Support",
        Name:"Rakan",
        Biography:"As mercurial as he is charming, Rakan is an infamous vastayan troublemaker and the greatest battle-dancer in Lhotlan tribal history. To the humans of the Ionian highlands, his name has long been synonymous with wild festivals, uncontrollable parties, and anarchic music. Few would suspect this energetic, traveling showman is also partner to the rebel Xayah, and is dedicated to her cause.",
        Skills:[
            {
                Passive_Image: "Images/Supports/Rakan/Passive.jpg",
                Passive:"Fey Feathers",
                Passive_info:"Rakan periodically gains a shield."
            },
            {
                First_Skill_Image: "Images/Supports/Rakan/Q.jpg",
                First_Skill:"Gleaming Quill",
                First_Skill_info:"Flings a magical feather that deals magic damage. Striking a champion or epic monster enables Rakan to heal his allies."
            },
            {
                Second_Skill_Image: "Images/Supports/Rakan/W.jpg",
                Second_Skill:"Grand Entrance",
                Second_Skill_info:"Dashes to a location, knocking up nearby enemies on arrival."
            },
            {
                Third_Skill_Image: "Images/Supports/Rakan/E.jpg",
                Third_Skill:"Battle Dance",
                Third_Skill_info:"Flies to an allied champion granting them a shield. Can be re-cast for free for a short duration."
            },
            {
                Ultimate_Image: "Images/Supports/Rakan/R.jpg",
                Ultimate:"The Quikness",
                Ultimate_info:"Gains Move Speed, charming and dealing magic damage to enemies touched."
            }
        ],
        Mini_Image:"Images/Supports/Rakan/Rakan_mini.jpg",
        Image:"Images/Supports/Rakan/Rakan.jpg"
    },

    {
        Lane:"Support",
        Name:"Lulu",
        Biography:"The yordle mage Lulu is known for conjuring dreamlike illusions and fanciful creatures as she roams Runeterra with her fairy companion Pix. Lulu shapes reality on a whim, warping the fabric of the world, and what she views as the constraints of this mundane, physical realm. While others might consider her magic at best unnatural, and at worst dangerous, she believes everyone could use a touch of enchantment.",
        Skills:[
            {
                Passive_Image: "Images/Supports/Lulu/Passive.jpg",
                Passive:"Pix, Faerie Companion",
                Passive_info:"Pix fires magical bolts of energy whenever the champion he's following attacks another enemy unit. These bolts are homing, but can be intercepted by other units."
            },
            {
                First_Skill_Image: "Images/Supports/Lulu/Q.jpg",
                First_Skill:"Glitterlance",
                First_Skill_info:"Pix and Lulu each fire a bolt of magical energy that damages and heavily slows all enemies it hits."
            },
            {
                Second_Skill_Image: "Images/Supports/Lulu/W.jpg",
                Second_Skill:"Whimsy",
                Second_Skill_info:"If cast on an ally, grants them Attack Speed and Move Speed for a short time. If cast on an enemy, turns them into an adorable critter that can't attack or cast spells."
            },
            {
                Third_Skill_Image: "Images/Supports/Lulu/E.jpg",
                Third_Skill:"Help, Pix!",
                Third_Skill_info:"If cast on an ally, commands Pix to jump to an ally and shield them. He then follows them and aids their attacks. If cast on an enemy, commands Pix to jump to an enemy and damage them. He then follows them and grants you vision of that enemy."
            },
            {
                Ultimate_Image: "Images/Supports/Lulu/R.jpg",
                Ultimate:"Wild Growth",
                Ultimate_info:"Lulu enlarges an ally, knocking nearby enemies into the air and granting the ally a large amount of bonus health. For the next few seconds, that ally gains an aura that slows nearby enemies."
            }
        ],
        Mini_Image:"Images/Supports/Lulu/Lulu_mini.jpg",
        Image:"Images/Supports/Lulu/Lulu.jpg"
    },

];