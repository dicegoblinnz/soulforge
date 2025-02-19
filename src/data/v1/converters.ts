import {CharacterTag} from "@/data/types";

export function idToCharacterAbility (id: number): CharacterTag {
  return {
    id: id,
    unlocked: true,
    exhausted: false
  };
}