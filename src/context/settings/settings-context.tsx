'use client';

import {createContext, useContext} from "react";
import {SettingsContextProps} from "@/context/settings/types";


export const SettingsContext = createContext({} as SettingsContextProps);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error("useSettingsContext must be used within SettingsContext");

  return context;
};