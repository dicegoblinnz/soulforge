import {Archetype, Character, CharacterTag, CharacterArchetype, Tag} from "@/data/types";

export const DEFAULT_CHARACTER: Character = {
  afflictions: [],
  archetype: {
    id: 0,
    note: "",
    tags: []
  },
  id: 0,
  keystone: {
    id: 0,
    note: "",
    tags: []
  },
  kinfolk: {
    id: 0,
    note: "",
    tags: []
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
    fate: {
      name: "Fate",
      value: 0,
      bounds: {
        min: 0
      }
    },
    downtime: {
      name: "Downtime",
      value: 0,
      bounds: {
        min: 0
      }
    },
    other: []
  },
  temporary_tags: [],
  traits: []
};

export const DEFAULT_TAG: Tag = {
  id: -1,
  name: "",
  categories: [],
};

export const DEFAULT_CHARACTER_ABILITY: CharacterTag = {
  id: -1,
  exhausted: false,
  unlocked: true
};

export const DEFAULT_ARCHETYPE: Archetype = {
  id: -1,
  name: "DEFAULT",
  tags: []
};

export const DEFAULT_CHARACTER_ARCHETYPE: CharacterArchetype = {
  id: -1,
  tags: [],
  note: ""
};
