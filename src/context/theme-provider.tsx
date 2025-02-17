'use client';

import {PropsWithChildren, useMemo} from "react";
import {useSettingsContext} from "@/context/settings/settings-context";
import {createTheme, CssBaseline, ThemeOptions} from "@mui/material";
import {createBasePalette} from "@/theme/palette";

import {ThemeProvider as MuiThemeProvider} from "@mui/material";


export function ThemeProvider({children}: PropsWithChildren) {
  const settings = useSettingsContext();

  const memo = useMemo(() => ({
    palette: {
      ...createBasePalette(settings.themeMode),
      primary: {
        main: settings.themePrimary
      },
      secondary: {
        main: settings.themeSecondary
      }
    }
  }), [
    settings.themeMode,
    settings.themePrimary,
    settings.themeSecondary
  ])

  const theme = createTheme(memo as ThemeOptions);

  return(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}