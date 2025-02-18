import {Archetype} from "@/data/types";

export const archetypes: Archetype[] = [
  {
    id: 0,
    name: "The Noble Heir",
    description: "You are the scion of a prestigious family, born into wealth and social standing. Your name alone opens doors—and stirs jealous rivals.",
    abilities: [
      { id: 109 }, // Courtly Charm
      { id: 110 }, // Family Fortune
      { id: 111 }, // Royal Entitlement
      { id: 112 }, // Reputation
    ],
  },
  {
    id: 1,
    name: "The Bardic Icon",
    description: "Renowned for your performances, you captivate crowds and sway opinions. Your fame can open gates—or put a target on your back.",
    abilities: [
      { id: 113 }, // Stage Presence
      { id: 114 }, // Encore of Inspiration
      { id: 115 }, // Improvisational Genius
      { id: 116 }, // Hometown Hero
    ],
  },
  {
    id: 2,
    name: "The Veteran",
    description: "Battle-scarred and disciplined, you’ve served on the front lines. Your expertise in warfare sets you apart—and rallies allies.",
    abilities: [
      { id: 117 }, // Battle-Hardened
      { id: 118 }, // Strategic Maneuver
      { id: 119 }, // Chain of Command
      { id: 120 }, // Squad Tactics
    ],
  },
  {
    id: 3,
    name: "The Arcane Scion",
    description: "Born into (or trained by) a renowned magical tradition, you wield esoteric knowledge that few can grasp.",
    abilities: [
      { id: 121 }, // Ancient Grimoire
      { id: 122 }, // Arcane Shift
      { id: 123 }, // Lore Keeper
      { id: 124 }, // Magical Boons
    ],
  },
  {
    id: 4,
    name: "The Underworld Baron",
    description: "Your cunning and under-the-table dealings have built a criminal empire—small or large—that thrives in the shadows.",
    abilities: [
      { id: 125 }, // Shadow Broker
      { id: 126 }, // Elusive Escape
      { id: 127 }, // Criminal Wildcard
      { id: 128 }, // Black Market Access
    ],
  },
  {
    id: 5,
    name: "The Temple Champion",
    description: "Chosen or blessed by a deity, you champion the faith’s cause and carry its mantle into the wider world.",
    abilities: [
      { id: 129 }, // Sacred Purpose
      { id: 130 }, // Consecration
      { id: 131 }, // Guiding Light
      { id: 132 }, // Divine Blessings
    ],
  },
  {
    id: 6,
    name: "The Master Artisan",
    description: "Choose a craft—Blacksmith, Leatherworker, Gemcutter, Alchemist, Tinkerer, or Herbalist—and create masterful works that unite art and practicality.",
    abilities: [
      { id: 133 }, // Tool Savant
      { id: 134 }, // Resourceful
      { id: 135 }, // Signature Style
      { id: 136 }, // Portable Crafting Station
    ],
  },
  {
    id: 7,
    name: "The Monster Hunter",
    description: "Your bold exploits hunting dangerous beasts are legendary. You’re an expert in wild terrains and lethal foes.",
    abilities: [
      { id: 137 }, // Surefooted Stalker
      { id: 138 }, // Trapper’s Tools
      { id: 139 }, // Predator’s Vigil
      { id: 140 }  // Pack Tactics (Party-wide)
    ]
  },
  {
    id: 8,
    name: "The Diplomatic Envoy",
    description: "An official negotiator, ambassador, or dealmaker—your skill in forging pacts surpasses mere trade.",
    abilities: [
      { id: 141 }, // Silver Tongue
      { id: 142 }, // Inspiring Orator
      { id: 143 }, // Subtle Manipulator
      { id: 144 }  // The Diplomatic Network (Party-wide)
    ]
  },
  {
    id: 9,
    name: "The Drifter",
    description: "You roam endlessly, surviving on wit and grit. No hardship deters you; no locked door keeps you from moving on.",
    abilities: [
      { id: 145 }, // Jack of All Trade
      { id: 146 }, // Scarred Resolve
      { id: 147 }, // Resourceful Crafter
      { id: 148 }  // Preparation (Party-wide)
    ]
  },
  {
    id: 10,
    name: "The Beast Tamer",
    description: "Your uncanny bond with creatures—both mundane and monstrous—grants you a menagerie of loyal companions and a wild insight.",
    abilities: [
      { id: 149 }, // Wild Empathy
      { id: 150 }, // Beast’s Fury
      { id: 151 }, // Primal Instinct
      { id: 152 }  // Loyal Companion (Party-wide)
    ]
  },
  {
    id: 11,
    name: "The Golem Maker",
    description: "A brilliant artificer who crafts artificial life—golems, clockwork automatons, or homunculi. Your creations are loyal (but can be unpredictable).",
    abilities: [
      { id: 153 }, // Salvager
      { id: 154 }, // Homunculus Servant
      { id: 155 }, // Technical Mind
      { id: 156 }  // Construct Forge (Party-wide)
    ]
  }
];