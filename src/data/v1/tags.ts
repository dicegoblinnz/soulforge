import {ETagCategories, Tag} from "@/data/types";

export const tags: Tag[] = [
  // Damage
  {
    id: 0,
    name: "Slashing",
    description: "When dice explodes you can substitute the explosion to inflict Bleeding affliction.",
    categories: [ETagCategories.DAMAGE],
    afflictions: [
      {
        id: 0,
      }
    ]
  },
  {
    id: 1,
    name: "Piercing",
    description: "When dice explodes you ignore 1 instance of defence.",
    categories: [ETagCategories.DAMAGE],
  },
  {
    id: 2,
    name: "Bludgeoning",
    description: "When dice explodes you can substitute the explosion to inflict Stagger tag.",
    categories: [ETagCategories.DAMAGE],
    tags: [
      {
        id: 13,
      }
    ],
  },
  {
    id: 3,
    name: "Explosive",
    description: "You deal damage to anyone within 5ft radius of the creature. Stacking increases radius.",
    categories: [ETagCategories.DAMAGE, ETagCategories.UTILITY]
  },
  {
    id: 4,
    name: "Projectile",
    description: "Ranged attacks up to 75 ft away. Stacks doubles range.",
    categories: [ETagCategories.UTILITY]
  },
  {
    id: 5,
    name: "Grappling",
    description: "Can convert successes to Restrained tags.",
    categories: [ETagCategories.DEBUFF, ETagCategories.UTILITY],
    tags: [
      {
        id: 12,
      }
    ],
  },
  {
    id: 6,
    name: "Disarming",
    description: "Contest against creatures Force attribute and successes knocks item away up to 5ft away per success.",
    categories: [ETagCategories.DEBUFF, ETagCategories.UTILITY],
  },
  {
    id: 7,
    name: "Knockback",
    description: "Can convert successes to knock back creature 5ft per success. Cannot be 2 sizes larger than you.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 8,
    name: "Parrying",
    description: "When using a reaction to defend you add this items dice to defence rolls.",
    categories: [ETagCategories.BUFF, ETagCategories.UTILITY],
  },
  {
    id: 9,
    name: "Riposte",
    description: "A Reaction counterattack immediately following a successful defence.",
    categories: [ETagCategories.DAMAGE],
  },
  {
    id: 10,
    name: "Reach",
    description: "Can attack up to 10 ft away with a melee weapon, and can use a reaction to attack incoming enemies.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 11,
    name: "Sweeping",
    description: "Can spread attack to multiple targets, you choose the amount of damage dealt to each.",
    categories: [ETagCategories.DAMAGE, ETagCategories.UTILITY],
  },
  {
    id: 12,
    name: "Restrained",
    description: "Cannot move.",
    categories: [ETagCategories.DEBUFF],
  },
  {
    id: 13,
    name: "Stagger",
    description: "Lose one Action.",
    categories: [ETagCategories.DEBUFF],
  },


  // Mundane materials
  {
    id: 14,
    name: "Wood",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 15,
    name: "Leather",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 16,
    name: "Cloth",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 17,
    name: "Iron",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 18,
    name: "Stone",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 19,
    name: "Copper",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },
  {
    id: 20,
    name: "Bone",
    description: "",
    categories: [ETagCategories.MATERIAL_MUNDANE],
  },


  // Enhanced materials
  {
    id: 21,
    name: "Steel",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 22,
    name: "Hardened Leather",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 23,
    name: "Oakheart Timber",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 24,
    name: "Bronze Alloy",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 25,
    name: "Quartz Glass",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 26,
    name: "Silver",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },
  {
    id: 27,
    name: "Ironwood",
    description: "",
    categories: [ETagCategories.MATERIAL_ENHANCED],
  },


  // Exotic materials
  {
    id: 28,
    name: "Mithril",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 29,
    name: "Adamantite",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 30,
    name: "Dragonbone",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 31,
    name: "Obsidian",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 32,
    name: "Moonsteel",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 33,
    name: "Orichalcum",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },
  {
    id: 34,
    name: "Feywood",
    description: "",
    categories: [ETagCategories.MATERIAL_EXOTIC],
  },


  // Mythic materials
  {
    id: 35,
    name: "Ebony Wood",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 36,
    name: "Abnu Forged",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 37,
    name: "Volcanic Glass",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 38,
    name: "Starforged Iron",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 39,
    name: "Runed Crystal",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 40,
    name: "Voidstone",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },
  {
    id: 41,
    name: "Dreamweave",
    description: "",
    categories: [ETagCategories.MATERIAL_MYTHICAL],
  },


  // Elements
  {
    id: 42,
    name: "Fire",
    description: "Harnesses heat to deal damage, often causing burning effects or igniting materials.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 43,
    name: "Frost",
    description: "Extreme cold that slows or freezes targets, impairing movement and reactions.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 44,
    name: "Lightning",
    description: "Electrical damage that may stun or overload systems, disrupting actions.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 45,
    name: "Acid",
    description: "Corrosive substances that damage equipment, armor, or organic tissue over time.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 46,
    name: "Earth",
    description: "Manipulation of stone and soil for defensive structures or offensive attacks.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 47,
    name: "Air",
    description: "Wind-based effects that knock back, disrupt, or enhance mobility.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 48,
    name: "Water",
    description: "Fluid manipulation to drench, trap, or sweep away targets and objects.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 49,
    name: "Radiant",
    description: "Pure energy effective against undead or corrupted creatures, often illuminating areas.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 50,
    name: "Necrotic",
    description: "Dark energy that drains life or vitality, weakening targets over time.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 51,
    name: "Poison",
    description: "Toxins that inflict damage over time or impair the target’s abilities.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 52,
    name: "Shadow",
    description: "Manipulation of darkness to obscure, confuse, or harm targets.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 53,
    name: "Psychic",
    description: "Mental damage or disruption, often inducing fear, confusion, or mental fatigue.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 54,
    name: "Spirit",
    description: "Ethereal energy that interacts with souls or bypasses physical barriers.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 55,
    name: "Healing",
    description: "Restoring health or recovering from injuries.",
    categories: [ETagCategories.ELEMENT, ETagCategories.BUFF],
  },
  {
    id: 56,
    name: "Void",
    description: "Manipulation of nothingness, often disrupting or erasing parts of reality.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 57,
    name: "Aether",
    description: "Pure, raw energy that can amplify or nullify other elements.",
    categories: [ETagCategories.ELEMENT, ETagCategories.DAMAGE],
  },
  {
    id: 58,
    name: "Stealth",
    description: "The ability to hide from sight and move silently, avoiding detection.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 59,
    name: "Disguise",
    description: "Altering appearance to blend in or mislead observers.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 60,
    name: "Protection",
    description: "Creating temporary barriers or defensive measures to shield oneself or allies.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 61,
    name: "Perception",
    description: "Perceive around you.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 62,
    name: "Lore",
    description: "Specifically know about a certain subject matter.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 63,
    name: "Tracking",
    description: "Following trails, footprints, or other signs to locate a target.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 64,
    name: "Lock Picking",
    description: "Opening locked mechanisms or doors with specialized tools or skills.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 65,
    name: "Navigation",
    description: "Using maps or tools to navigate your way.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 66,
    name: "Flight",
    description: "The ability to move through the air for mobility or escape.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 67,
    name: "Climbing",
    description: "Enhanced capability to scale walls, cliffs, or other vertical surfaces.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 68,
    name: "Sleight of Hand",
    description: "Pickpocket and dexterously maneuver.",
    categories: [ETagCategories.UTILITY],
  },
  {
    id: 69,
    name: "Intimidation",
    description: "Creates an intimidating presence.",
    categories: [ETagCategories.UTILITY],
  },


  // Kinfolk
  {
    id: 70,
    name: "Quick Study",
    description: "Gain a bonus d6 dice on all Insight rolls.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 71,
    name: "Determined",
    description: "Exhaust this tag and reroll a failed action with Edge.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Reroll a failed action with Edge.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 72,
    name: "High Stamina",
    description: "After exhausting this Tag gain temporarily Stamina Tag.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Gain temporarily Stamina Tag after exhaustion.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 73,
    name: "Powerful Build",
    description: "Can pick up and move up to size 5 items or Large creatures. You have 20 carrying capacity.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 74,
    name: "Blood Bond",
    description: "Form a bond with an ally during a rest. When you help them using your action give them a d6 Flow dice.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 75,
    name: "Tough",
    description: "You can exhaust this tag to shrug off an instance of damage.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Shrug off an instance of damage.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 76,
    name: "Memory Palace",
    description: "You can store the access and use of another Tag when that Tag is exhausted. You can exhaust it again by exhausting this Tag. Tag cannot be an Equipment, Item or Keystone.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 77,
    name: "Arcane Affinity",
    description: "Have the Arcane Tag, roll a d6 on a success; it does not exhaust this tag if used as Arcane.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 78,
    name: "Fey Agility",
    description: "Nimbly avoid danger, Roll a d6 on all defensive maneuvers.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 79,
    name: "Morphic Beards",
    description: "Shape your beard into mundane objects and gain a d6 on use.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Create up to size 2 Item/Weapon with 3 Tags from the combat tier that lasts for the scene.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 80,
    name: "Strands of Steel",
    description: "Exhaust this tag to temporarily repair 3 Armour tags until your next long rest.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Temporarily repair 3 Armour tags.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 81,
    name: "Dark Visionary",
    description: "See clearly in complete darkness up to 3 zones.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 82,
    name: "Nature Skin",
    description: "Grow plants on your body. This Tag can be substituted for Nature, Healing, Growth, or Poison Tags, once chosen it cannot be changed until your next rest.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 83,
    name: "Resourceful",
    description: "You can have an additional Readied Item on your person.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 84,
    name: "Lucky",
    description: "You can Exhaust this tag to explode an attribute dice.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Explode an attribute dice.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 85,
    name: "Swift",
    description: "Travel 2 Zones instead of 1. Exhaust to perform a reaction of your choice.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Perform a reaction of your choice.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 86,
    name: "Wild Shift",
    description: "Exhaust this tag to partially transform into your animal form, gaining a temporary tag of the creature category.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Gain a temporary tag of the creature category.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 87,
    name: "Pack Instinct",
    description: "Sense nearby allies’ intent and location, gaining advantage on cooperative actions.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 88,
    name: "Regeneration",
    description: "Can exhaust this tag to recover 3 Tags that are not equipment, items or Keystone. Can only be used once per long rest.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Recover 3 Tags that are not equipment, items or Keystone.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 89,
    name: "Natural Armor",
    description: "You have a d6 armour for all types of damage except mental damage.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 90,
    name: "Camouflage",
    description: "Blend in stealthily, gain a d8 on all stealth-based actions.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 91,
    name: "Flight",
    description: "You glide down avoiding fall damage. Exhaust this tag to Fly for the scene.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Fly for the scene.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 92,
    name: "Plume Shield",
    description: "Use a burst of feathers to absorb an incoming attack, roll a d4 and add it to a defensive dice.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Deflect the attack to a close target.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 93,
    name: "Keen Sight",
    description: "Spot distant objects or threats, gaining a bonus d8 on perception rolls related to sight.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 94,
    name: "Skin Deep",
    description: "Breathe water through your skin and store it inside your skin. Exhaust tag to let out a burst of water from your body gaining a d20 to the action roll.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Let out a burst of water from your body.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 95,
    name: "Higher Vibration",
    description: "You can feel and connect with creatures and plants and gain advantage to interacting with them.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Communicate with them for the scene.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 96,
    name: "Bioluminescent Glow",
    description: "Emit a soft light to illuminate surroundings, gain a d8 on all social checks to dazzle or confuse enemies.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 97,
    name: "Poisonous",
    description: "Has the Poison tag, roll a d6 on a success it does not exhaust this tag if used as Poison.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 98,
    name: "Elastic Tongue",
    description: "Use your prehensile tongue to grab objects within 1 zone away.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 99,
    name: "Amphibious Leap",
    description: "Leap extraordinary distances—up to 30ft horizontally or vertically.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Immediately leap out of danger.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 100,
    name: "Dragon’s Breath",
    description: "Exhaust an elemental tag and roll Heart plus elemental dice to a zone.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Exhaust an elemental tag and roll Heart plus elemental dice.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 101,
    name: "Elemental Affinity",
    description: "Choose Fire, Ice, Poison, Lightning, or Acid Tag and treat it as d10.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 102,
    name: "Draconic Majesty",
    description: "Intimidate or rally others using your imposing presence.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Introduce a fact socially impacting the scene.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 103,
    name: "Harvesting",
    description: "Eat creatures to temporarily gain their abilities or memories.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Gain a tag of the creature consumed.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 104,
    name: "Hive Mind",
    description: "Mentally form a connection of up to 10 willing creatures.",
    categories: [ETagCategories.KINFOLK],
    exhaust: {
      description: "Mentally connect up to 10 creatures for the scene.",
      afflictions: [],
      tags: []
    },
  },
  {
    id: 105,
    name: "Four Arms",
    description: "Has 4 free hands to use.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 106,
    name: "Modular V1",
    description: "Choose an option from the modular selection.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 107,
    name: "Modular V2",
    description: "Gain an additional option from the modular selection.",
    categories: [ETagCategories.KINFOLK],
  },
  {
    id: 108,
    name: "Modular V3",
    description: "Gain an additional option from the modular selection.",
    categories: [ETagCategories.KINFOLK],
  },


  // Archetypes
  {
    id: 109,
    name: "Courtly Charm",
    description: "Gain a bonus die (d8) for persuasion. Exhaust to increase an NPC’s influence by one category until the end of the scene.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 110,
    name: "Family Fortune",
    description: "You have wealth to tap into. Exhaust to gain 4 Tags worth of value from a city or outpost under your family’s influence.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 111,
    name: "Royal Entitlement",
    description: "Exhaust this Tag to gain access to restricted areas or secret locations.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 112,
    name: "Reputation",
    description: "You can leverage your noble status to secure a favor for the entire party—such as VIP lodging, invitations to a noble gala, or a brief audience with local leaders.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 113,
    name: "Stage Presence",
    description: "Gain a bonus die (d8) in social situations where flair helps. Exhaust to captivate or distract a group.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 114,
    name: "Encore of Inspiration",
    description: "Exhaust to grant an ally a d10 Flow Die or recover their exhausted Tag.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 115,
    name: "Improvisational Genius",
    description: "You can use any item to help with a task, but you will have disadvantage with that dice.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 116,
    name: "Hometown Hero",
    description: "Anyone who recognizes the Bardic Icon, will be treated as a d8 relationship status for the entire party.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 117,
    name: "Battle-Hardened",
    description: "Use a Flow die to keep a Tag from exhausting; on success, it remains available.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 118,
    name: "Strategic Maneuver",
    description: "Gain a bonus die (d6) for setting up advantageous positions in combat. Exhaust to exploit an opportunity, either rolling a d20 or giving 5d6 to allies.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 119,
    name: "Chain of Command",
    description: "Your Help action grants an ally advantage on their roll.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 120,
    name: "Squad Tactics",
    description: "Using your help action, you orchestrate a coordinated tactic that grants your Ally a +1 on any of their dice.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 121,
    name: "Ancient Grimoire",
    description: "Gain an edge when deciphering symbols, languages, or historical texts. Exhaust to introduce a fact about lore or history to use in this scene.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 122,
    name: "Arcane Shift",
    description: "Exhaust to introduce 3 Environmental Tags allies can utilize for a d8 bonus. Or create a hindrance for enemies.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 123,
    name: "Lore Keeper",
    description: "Using your action roll Insight to Identify the traits/Tags of objects or creatures. Exhaust to learn up to 3 Tags of a target that you (or allies) can exploit/target, or learn a secret about the target.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 124,
    name: "Magical Boons",
    description: "Each Character chooses a boon once a day of the list: Speed (Increase movement by 2 units), Luck (Gain 5 points that you can use per day to boost your dice), Protection (Gain a Temporary Protection Tag), Empower (Increase the Attribute dice by 1 category), Focus (Choose to explode a dice of your choice).",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 125,
    name: "Shadow Broker",
    description: "Information is power, whenever you use the information gathered you gain an edge on the task.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 126,
    name: "Elusive Escape",
    description: "Exhaust to avoid capture or roll a d20 to negate an instance of damage.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 127,
    name: "Criminal Wildcard",
    description: "Gain an edge with reckless or unorthodox strategies—at the cost of a Fate’s Toll.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 128,
    name: "Black Market Access",
    description: "You can tap into the black market to supply the entire party with rare or illegal items, such as enchanted weapons, forbidden knowledge scrolls, illicit potions, or other valuable contraband.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 129,
    name: "Sacred Purpose",
    description: "Exhaust it to gain 3d4 Inspiration Dice, which can boost tasks or be given to allies.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 130,
    name: "Consecration",
    description: "Exhaust to cleanse an area of curses, corruption, or negative Tags.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 131,
    name: "Guiding Light",
    description: "Grant a Flow Dice (d6) when helping allies. Exhaust to grant all allies a d6 Flow Dice.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 132,
    name: "Divine Blessings",
    description: "Dice explode on 1s, once per scene per character.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 133,
    name: "Tool Savant",
    description: "Your deep understanding of tools allows you to enhance efficiency. When crafting, you can spend 1 downtime action to get 3 downtime Crafting actions. (Can be used once per week of downtime)",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 134,
    name: "Resourceful",
    description: "Substitute one required material of a tier (Enchanted/Arcane) with an alternative material. (3:1 ratio, 3 Mundane/Enchanted Tags → 1 Enchanted/Arcane Tag).",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 135,
    name: "Signature Style",
    description: "Items you craft carry a unique Signature Effect. By spending 1 Flow Die, the wielder or user can activate the Signature Effect to gain a situational advantage or unique benefit. Example effects include ranged blade detachments, distraction potions, or reactive armor.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 136,
    name: "Portable Crafting Station",
    description: "You have a portable crafting station that grants a 1 downtime decrease on crafting cost per week.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 137,
    name: "Surefooted Stalker",
    description: "Gain a bonus die (d8) on climbing, balancing, or stealth.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 138,
    name: "Trapper’s Tools",
    description: "Gain a bonus die (d8) with ropes, traps, or grappling gear.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 139,
    name: "Predator’s Vigil",
    description: "Gain a bonus die (d8) on perception checks. Exhaust to act immediately when you are surprised.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 140,
    name: "Pack Tactics",
    description: "Providing the Help action gives an ally Advantage to their action.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 141,
    name: "Silver Tongue",
    description: "Gain a bonus die (d8) on Social Checks.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 142,
    name: "Inspiring Orator",
    description: "Once per scene, deliver a rousing speech or motivational act. All allies within range gain a d6 Flow Die.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 143,
    name: "Subtle Manipulator",
    description: "Exhaust this ability to plant a false belief, subtly change someone's perspective, or hide your true intentions.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 144,
    name: "The Diplomatic Network",
    description: "Once per session, the party can call on the Diplomatic Envoy’s network to bypass a challenge, secure safe passage, or acquire rare information. Gain a d8 Ally for the scene.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 145,
    name: "Jack of All Trade",
    description: "Gain a d4 Inspiration that can be used once per scene. You can substitute a Flow dice to gain a d4 Inspiration.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 146,
    name: "Scarred Resolve",
    description: "When faced with a challenge reminiscent of a past struggle, draw strength from your experiences. Exhaust to gain a temporary Resolve tag, granting a bonus die (d6) on all actions for the remainder of the scene.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 147,
    name: "Resourceful Crafter",
    description: "Always find or craft makeshift tools. Exhaust to produce a temporary functional d8, size 1 item for immediate use with 2 relevant Tags.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 148,
    name: "Preparation",
    description: "At the start of each session or after a significant rest, the party gains a shared pool of Prepared Points equal to the number of players + 2.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 149,
    name: "Wild Empathy",
    description: "Gain a bonus die (d8) when calming, befriending, or negotiating with animals or beasts.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 150,
    name: "Beast’s Fury",
    description: "Once per scene, channel the ferocity of the wild, doubling your successes on a single attack or physical action.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 151,
    name: "Primal Instinct",
    description: "Gain a d6 on all defensive actions. Exhaust to gain a d20 for a defensive action.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 152,
    name: "Loyal Companion",
    description: "The party has a shared Animal Companion Ally (wolf, hawk, giant lizard, etc.), a beast that assists the group as an active NPC.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },
  {
    id: 153,
    name: "Salvager",
    description: "Salvage Mundane Tags from an item, resource, or environmental source (e.g., traps, debris). Salvaging destroys the original object but yields Mundane Tags based on its complexity.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 154,
    name: "Homunculus Servant",
    description: "Craft 1 Mundane Tag to create a small homunculus capable of performing basic tasks. Exhaust this ability to detonate the homunculus, dealing d20 damage to all nearby targets.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 155,
    name: "Technical Mind",
    description: "Use your action to analyze an enemy, rolling Insight. For every success, you learn one tag the enemy possesses. Exhaust this ability to instantly learn 3 tags.",
    categories: [ETagCategories.ARCHETYPE],
  },
  {
    id: 156,
    name: "Construct Forge",
    description: "The party can forge constructs by combining existing Mundane Tags from items or resources.",
    categories: [ETagCategories.ARCHETYPE, ETagCategories.PARTY_WIDE],
  },


  // Keystones
  {
    id: 157,
    name: "Phantom",
    description: "You can dip into shadows of others, if they are unwilling you must succeed a stealth roll against them otherwise they will notice you and kick you out. If you are inside the shadow of a creature you will get the invisible tag.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Manipulate the next action of the creature with their shadow."
    }
  },
  {
    id: 158,
    name: "Phase",
    description: "Phase through people or attacks gain d12 when you use your action to defend.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Phase through an object/barrier. For the scene, if you passed through more barriers each additional one will trigger a Fates Toll."
    }
  },
  {
    id: 159,
    name: "Shadow Bind",
    description: "You can grapple people that are in shadow so long as you are touching that shadow. You can add your keystone to any grapple check. You can extend your shadow upto 30ft if there is enough light around.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "grapple a Huge creature or 2 large creatures or 9 medium creatures within 60ft gaining the 3 x Restrained tag."
    }
  },
  {
    id: 160,
    name: "Darkness",
    description: "Increases Dark Vision by 90ft and can concentrate darkness around itself in an area of 20ft.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Make the darkness created become a barrier with 5 tags."
    }
  },
  {
    id: 161,
    name: "Shadow Step",
    description: "You can teleport between shadows up to 30ft away using an action.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Teleport in the nick of time to safety."
    }
  },
  {
    id: 162,
    name: "Outer Body Experience",
    description: "You leave your body and remove physical restrictions making your Force and Finesse and Defence dice d20s for the scene. You double your movement speed and gain 5 actions per turn instead of 3. Leaving your body vulnerable, any damage dealt will deal an extra d10 to damage.",
    categories: [ETagCategories.UTILITY, ETagCategories.ULTIMATE],
  },


  {
    id: 163,
    name: "Lightning",
    description: "As a Keystone Action you can shoot a bolt of lightning to a target within 120 ft range, if you are in a charged environment you get advantage on the roll.",
    categories: [ETagCategories.DAMAGE],
    exhaust: {
      description: "Unleash a chain lightning attack on up to 4 targets within range, it can bounce back to the same target for additional damage, if you choose to bounce it off yourself you get resistance to the damage dealt."
    }
  },
  {
    id: 164,
    name: "Wind",
    description: "You can use the help action on an ally and give them an extra d8 on their action.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Convert this tag temporarily to fly for the rest of the scene."
    }
  },
  {
    id: 165,
    name: "Thunder",
    description: "Using a Keystone action you can create a thunderous clap on an area of 15ft. Any successes will count as Stagger.",
    categories: [ETagCategories.DAMAGE],
    exhaust: {
      description: "roll an additional d20 to the roll and blow them away up to 30ft."
    }
  },
  {
    id: 166,
    name: "Water",
    description: "Use a Keystone action and any successes gained creates temporary barrier tags for you or an ally within 30ft.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "heal any ally within 30ft with your keystone action and d20."
    }
  },
  {
    id: 167,
    name: "Frost",
    description: "Using your keystone action you create Ice Spikes that will cause a Restrained condition tag for every 3 successes.",
    categories: [ETagCategories.DEBUFF],
    exhaust: {
      description: "give the enemy the Frozen condition."
    }
  },
  {
    id: 168,
    name: "Cloud",
    description: "As an action (as if using your keystone action), you can create a fog environmental tag. The number of tags you generate equals your successes, and each tag creates a 10-foot radius. When tags are stacked, the fog grows by an additional 10 feet per tag, up to a maximum range of 120 feet.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Produce an illusionary fog cloud that conceals you and your allies within 30 feet, granting a bonus on all d20 stealth rolls for the scene."
    }
  },
  {
    id: 169,
    name: "Eye of the Storm",
    description: "The Storm Herald unleashes a devastating storm, gaining 5 Environmental Tag of the following elements: Lightning, Wind, Thunder, Water, Cloud, and Frost of your choice. You can Break one of the environmental tags to treat it as an exhaustion effect of your abilities.",
    categories: [ETagCategories.UTILITY, ETagCategories.ULTIMATE],
  },


  {
    id: 170,
    name: "Vigilant Defence",
    description: "You get a base defensive d8 protection.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Increase the defense to 2d8 for the rest of the scene.",
    },
  },
  {
    id: 171,
    name: "Get Down!",
    description: "Using a reaction you can run to an ally in range to protect them and take the attack instead of them.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Pull an ally from danger completely negating any effect.",
    },
  },
  {
    id: 172,
    name: "Shield Wall",
    description: "You act as a wall for allies in 15 ft range giving them a d8 of physical defense as an action for the rest of the round.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Give allies resistance to physical damage for the scene in a 15 ft radius.",
    },
  },
  {
    id: 173,
    name: "Iron Bastion",
    description: "All damage received will be resisted for this scene, and you gain 5 temporary Protection tags. You can spend a protection tag to leap into protecting allies within far range.",
    categories: [ETagCategories.ULTIMATE],
  },


  {
    id: 174,
    name: "Radiant",
    description: "You illuminate bright light in a 30 ft area and can use the help action up to 60 ft away.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Let out a d20 beam of light. Any successes recover tags to anyone within 60 ft range of you.",
    },
  },
  {
    id: 175,
    name: "Fire",
    description: "Your blade is perpetually on fire, gaining d8 on all combat actions using this keystone.",
    categories: [ETagCategories.DAMAGE],
    exhaust: {
      description: "Turn the blade into a 2d8 bonus for the rest of the scene.",
    }
  },
  {
    id: 176,
    name: "Arcane",
    description: "Using a Keystone action, you send a wave of your slash to a target within 60 ft range.",
    categories: [ETagCategories.DAMAGE],
    exhaust: {
      description: "Let out a powerful crushing blow that ignores defences.",
      afflictions: [],
    },
  },
  {
    id: 177,
    name: "Solar Nova",
    description: "You create a powerful 50ft explosion of 1d20 Fire, 1d20 Radiant, and 1d20 Arcane. You can then combine the successes to either deal damage or recover tags.",
    categories: [ETagCategories.UTILITY, ETagCategories.ULTIMATE],
  },


  {
    id: 178,
    name: "Illusion",
    description: "Using an action, you create a clone of yourself and can control it to act on your behalf and communicate through it. Any damage to it causes it to disappear.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Make the clone of another person for the scene, you control it.",
    },
  },
  {
    id: 179,
    name: "Healing",
    description: "You can duplicate the effect of a tag that you see from allies as an action. You cannot gain the Exhausted effect. If an Action is required to activate, you must spend the action.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "Copy an entire other tag, temporarily having it for the scene.",
    },
  },
  {
    id: 180,
    name: "Shadow",
    description: "Swap places with a willing creature (or your clone) as an action.",
    categories: [ETagCategories.UTILITY],
    exhaust: {
      description: "You can swap with an object in far range, including items that are worn or carried."
    }
  },
  {
    id: 181,
    name: "Tag Team",
    description: "You create a new clone of yourself for the scene that acts on its own turn. Gain 5 Temporary Clone Tags. You can exhaust a clone tag to use an action to copy a tag (regardless of allies or enemies). All help actions between you and your clone will give a bonus d8 dice.",
    categories: [ETagCategories.UTILITY, ETagCategories.ULTIMATE],
  }
];