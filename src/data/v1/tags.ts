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
];