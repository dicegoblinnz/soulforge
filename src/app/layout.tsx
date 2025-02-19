import { Geist, Geist_Mono } from "next/font/google";
import {AppbarDrawer} from "@/components/appbar-drawer";
import {SettingsProvider} from "@/context/settings/settings-provider";
import {ThemeProvider} from "@/context/theme-provider";
import {blue, purple} from "@mui/material/colors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoulForge",
  description: "An up and coming TTRPG! Count your successes and pave your way to victory!",
  keywords: ['TTRPG', 'RPG', 'DND', 'Dice Goblin']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin: 0}} suppressHydrationWarning>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light',
            themePrimary: blue[500],
            themeSecondary: purple[500]
          }}
        >
          <ThemeProvider>
            <AppbarDrawer/>

            {children}
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
)
  ;
}
