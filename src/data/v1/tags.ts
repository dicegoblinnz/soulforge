import {ETagCategories, Tag} from "@/data/types";

export const tags: Tag[] = [
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
];