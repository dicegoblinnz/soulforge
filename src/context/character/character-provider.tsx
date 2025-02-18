'use client';

import {PropsWithChildren, useCallback, useMemo} from "react";
import {CharacterContext} from "@/context/character/character-context";
import {Character} from "@/data/types";
import {useLocalStorage} from "usehooks-ts";
import {DEFAULT_CHARACTER, DEFAULT_CHARACTER_ABILITY} from "@/data/defaults";


const CHARACTER_STORAGE_KEY = 'characters';
const SELECTED_CHARACTER_STORAGE_KEY = 'selected_character';


type Props = {
} & PropsWithChildren;

export function CharacterProvider({ children }: Props) {
  const [characters, charactersUpdate] = useLocalStorage<Character[]>(CHARACTER_STORAGE_KEY, [DEFAULT_CHARACTER]);
  const [selectedCharacter, selectedCharacterUpdate] = useLocalStorage(SELECTED_CHARACTER_STORAGE_KEY, 0);

  const getSelectedCharacterIndex = useCallback((): number => {
    return characters.findIndex(c => c.id === selectedCharacter);
  }, [characters, selectedCharacter]);

  const updateName = useCallback((value: string) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].lore.name = value;

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const updateTrueName = useCallback((value: string) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].lore.true_name = value;

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const updateAspiration = useCallback((id: number) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].lore.aspiration.id = id;

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const updateCoreValue = useCallback((id: number) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].lore.core_value.id = id;

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const updateVice = useCallback((id: number) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].lore.vice.id = id;

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const updateAllKinfolkAbilities = useCallback((ids: number[]) => {
    const index = getSelectedCharacterIndex();

    if (index < 0) {
      console.error(`failed to find character with id ${selectedCharacter}`);
      return;
    }

    characters[index].kinfolk.abilities = ids.map(id => {
      const matchingAbilities = characters[index].kinfolk.abilities.filter(a => ids.indexOf(a.id) >= 0);
      const existingAbility = matchingAbilities.length > 0
        ? matchingAbilities[0]
        : {...DEFAULT_CHARACTER_ABILITY};

      if (id === existingAbility.id) {
        return existingAbility;
      }

      return {
        id: id,
        unlocked: true,
        exhausted: false
      };
    });

    charactersUpdate(characters);
  }, [
    characters,
    charactersUpdate,
    selectedCharacter,
    getSelectedCharacterIndex
  ]);

  const memo = useMemo(() => {
    const index = getSelectedCharacterIndex();
    const character = index < 0 ? null : characters[index];

    const metaData = characters.map(c => ({id: c.id, name: c.lore.name}));

    return {
      character: character,
      allCharacterMetaData: metaData,
      updateSelectedCharacter: selectedCharacterUpdate,
      updateName: updateName,
      updateTrueName: updateTrueName,
      updateAspiration: updateAspiration,
      updateCoreValue: updateCoreValue,
      updateVice: updateVice,
      updateAllKinfolkAbilities: updateAllKinfolkAbilities
    };
  }, [
    characters,
    getSelectedCharacterIndex,
    selectedCharacterUpdate,
    updateName,
    updateTrueName,
    updateAspiration,
    updateCoreValue,
    updateVice,
    updateAllKinfolkAbilities
  ]);

  return (
    <CharacterContext.Provider value={memo}>
      {children}
    </CharacterContext.Provider>
  );
}
