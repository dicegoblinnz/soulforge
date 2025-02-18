'use client';

import {createContext, useContext} from "react";
import {CharacterContextProps} from "@/context/character/types";


export const CharacterContext = createContext({} as CharacterContextProps);

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (!context)
    throw new Error("useCharacterContext must be used within SettingsContext");

  return context;
};
