import {Keystone} from "@/data/types";

export const keystones: Keystone[] = [
  {
    id: 0,
    name: "Shadow Walker",
    description: "A master of shadow manipulation and stealth. You move unseen and can control the shadows of others.",
    tags: [
      { id: 157 }, // Phantom
      { id: 158 }, // Phase
      { id: 159 }, // Shadow Bind
      { id: 160 }, // Darkness
      { id: 161 }, // Shadow Step
      { id: 162 }, // Outer Body Experience
    ],
  },
  {
    id: 1,
    name: "Storm Herald",
    description: "The Storm Herald harnesses the power of the elements, manipulating the weather and the environment around them.",
    tags: [
      { id: 163 }, // Lightning
      { id: 164 }, // Wind
      { id: 165 }, // Thunder
      { id: 166 }, // Water
      { id: 167 }, // Frost
      { id: 168 }, // Cloud
      { id: 169 }, // Eye of the Storm
    ],
  },
  {
    id: 2,
    name: "Iron Warden",
    description: "A stalwart defender, the Iron Warden shields allies and can withstand any damage in their path.",
    tags: [
      { id: 170 }, // Vigilant Defence
      { id: 171 }, // Get Down!
      { id: 172 }, // Shield Wall
      { id: 173 }, // Iron Bastion
    ],
  },
  {
    id: 3,
    name: "Sun Blade",
    description: "The Sun Blade is a weapon of radiant light and powerful elemental energy. With a blazing edge, it can channel the sun’s energy into devastating attacks and support for allies.",
    tags: [
      { id: 174 }, // Radiant
      { id: 175 }, // Fire
      { id: 176 }, // Arcane
      { id: 177 }, // Solar Nova
    ],
  },
  {
    id: 4,
    name: "Duplicity",
    description: "The Duplicity user can create clones and imitate others' abilities, making them a master of deception and trickery.",
    tags: [
      { id: 178 }, // Illusion
      { id: 179 }, // Healing
      { id: 180 }, // Shadow
      { id: 181 }, // Tag Team
    ],
  }
];
