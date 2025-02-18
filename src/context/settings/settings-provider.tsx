'use client';

import {PropsWithChildren, useEffect, useMemo, useState} from "react";
import {useLocalStorage} from "@/hooks/use-local-storage";
import { SettingsContext } from "./settings-context";
import {SettingsValueProps} from "@/context/settings/types";
import Loading from "@/app/loading";


const SETTINGS_STORAGE_KEY = 'settings';


type Props = {
  defaultSettings: SettingsValueProps;
} & PropsWithChildren;

export function SettingsProvider({ children, defaultSettings }: Props) {
  const [mounted, setMounted] = useState(false);
  const [state, update, reset] = useLocalStorage(SETTINGS_STORAGE_KEY, defaultSettings);

  const memo = useMemo(() => ({
    ...state,
    onUpdate: update,
    onReset: reset
  }), [state, update, reset]);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted)
    return (
      <Loading/>
    );

  return (
    <SettingsContext.Provider value={memo}>
      {children}
    </SettingsContext.Provider>
  );
}
