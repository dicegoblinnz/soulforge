export enum EAfflictionCategory {
  DAMAGE,
  STATUS,
  REMOVEABLE,
  UNREMOVABLE
}

export enum ETagCategories {
  KEYSTONE = "Keystone",
  KINFOLK = "Kinfolk",
  HUMAN = "Human",
  GIANTFOLK = "Giantfolk",
  ELF = "Elf",
  DWARF = "Dwarf",
  SMALLFOLK = "Smallfolk",
  BEASTFOLK = "Beastfolk",
  LIZARDFOLK = "Lizardfolk",
  BIRDFOLK = "Birdfolk",
  MERFOLK = "Merfolk",
  BOGFOLK = "Bogfolk",
  DRAGONFOLK = "Dragonfolk",
  INSECTFOLK = "Insectfolk",
  SOULBOUND = "Soulbound",
  ARCHETYPE = "Archetype",
  PARTY_TAG = "Party-Tag",
  DAMAGE = "Damage",
  BUFF = "Buff",
  DEBUFF = "Debuff",
  UTILITY = "Utility",
  MUNDANE = "Mundane",
  ENHANCED = "Enhanced",
  EXOTIC = "Exotic",
  MYTHICAL = "Mythical",
  ELEMENT = "Element",
  CREATURE = "Creature",
  CONDITIONS = "Conditions"
}

export enum ETraitCategories {
  PERSONALITY,
  GOALS,
}

export type Affliction = {
  id: number;
  name: string;
  description: string | null;
  categories: EAfflictionCategory[];
};

export type AfflictionReference = {
  id: number;
};

export type Exhaust = {
  description: string;
  afflictions: Affliction[];
  tags: Tag[];
};

export type TagReference = {
  id: number; // references a TagId
};

export type Tag = {
  id: number;
  name: string;
  description: string | null;
  categories: ETagCategories[];
  afflictions?: AfflictionReference[];
  tags?: TagReference[];
  exhaust?: Exhaust;
};

export type Aspiration = {
  id: number;
  name: string;
  description: string | null;
};

export type CoreValue = {
  id: number;
  name: string;
  description: string | null;
};

export type Vice = {
  id: number;
  name: string;
  description: string | null;
};

export type Keystone = {
  id: number;
  name: string;
  description: string | null;
  abilities: TagReference[];
};

export type Kinfolk = {
  id: number;
  name: string;
  description: string | null;
  abilities: TagReference[];
};

export type Archetype = {
  id: number;
  name: string;
  description?: string;
  abilities: TagReference[];
};

export type Trait = {
  id: number;
  name: string;
  description: string | null;
  categories: ETraitCategories[];
  ability: TagReference;
};

export type Resource = {
  name: string;
  value: number;
  description?: string;
  bounds?: {
    min?: number;
    max?: number;
  }
};

export type CharacterLore = {
  name: string;
  true_name: string;
  aspiration: {
    id: number; // references TagId
    note: string;
  };
  core_value: {
    id: number; // references TagId
    note: string;
  };
  vice: {
    id: number; // references TagId
    note: string;
  };
};

export type CharacterAbility = {
  id: number; // references TagId
  unlocked: boolean;
  exhausted: boolean;
};

export type CharacterKeystone = {
  id: number; // references KeystoneId
  note: string;
  abilities: CharacterAbility[];
};

export type CharacterArchetype = {
  id: number; // references ArchetypeId
  note: string;
  abilities: CharacterAbility[];
};

export type CharacterKinfolk = {
  id: number; // references KinfolkId
  note: string;
  abilities: CharacterAbility[];
};

export type CharacterTrait = {
  id: number; // references TraitId
  note: string;
  abilities: CharacterAbility[];
};

export type CharacterResources = {
  fate: Resource;
  downtime: Resource;
  other: Resource[];
};

export type Character = {
  id: number;
  lore: CharacterLore;
  keystone: CharacterKeystone;
  archetype: CharacterArchetype;
  kinfolk: CharacterKinfolk;
  traits: CharacterTrait[];
  temporary_tags: number[]; // references TagId
  afflictions: number[]; // references AfflictionId
  resources: CharacterResources;
};
