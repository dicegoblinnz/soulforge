import {Archetype, Character, CharacterAbility, CharacterArchetype} from "@/data/types";

export const DEFAULT_CHARACTER: Character = {
  afflictions: [],
  archetype: {
    id: 0,
    note: "",
    abilities: []
  },
  id: 0,
  keystone: {
    id: 0,
    note: "",
    abilities: []
  },
  kinfolk: {
    id: 0,
    note: "",
    abilities: []
  },
  lore: {
    name: "",
    true_name: "",
    aspiration: {
      id: 0,
      note: ""
    },
    core_value: {
      id: 0,
      note: ""
    },
    vice: {
      id: 0,
      note: ""
    }
  },
  resources: {
    fate: 0,
    downtime: 0
  },
  temporary_tags: [],
  traits: []
};

export const DEFAULT_CHARACTER_ABILITY: CharacterAbility = {
  id: -1,
  exhausted: false,
  unlocked: true
};

export const DEFAULT_ARCHETYPE: Archetype = {
  id: -1,
  name: "DEFAULT",
  abilities: []
};

export const DEFAULT_CHARACTER_ARCHETYPE: CharacterArchetype = {
  id: -1,
  abilities: [],
  note: ""
};
