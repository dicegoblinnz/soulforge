import {CharacterAbility} from "@/data/types";

export function idToCharacterAbility (id: number): CharacterAbility {
  return {
    id: id,
    unlocked: true,
    exhausted: false
  };
}