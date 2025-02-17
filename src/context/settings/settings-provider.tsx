'use client';

import {PropsWithChildren, useMemo} from "react";
import {useLocalStorage} from "@/hooks/use-local-storage";
import { SettingsContext } from "./settings-context";
import {SettingsValueProps} from "@/context/settings/types";


const SETTINGS_STORAGE_KEY = 'settings';


type Props = {
  defaultSettings: SettingsValueProps;
} & PropsWithChildren;

export function SettingsProvider({ children, defaultSettings }: Props) {
  const {state, update, reset} = useLocalStorage(SETTINGS_STORAGE_KEY, defaultSettings);

  const memo = useMemo(() => ({
    ...state,
    onUpdate: update,
    onReset: reset
  }), [state, update, reset]);

  return (
    <SettingsContext.Provider value={memo}>
      {children}
    </SettingsContext.Provider>
  );
}
