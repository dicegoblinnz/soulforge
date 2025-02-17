import { Geist, Geist_Mono } from "next/font/google";
import {AppbarDrawer} from "@/components/appbar_drawer";
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
  description: "An up and coming TTRPG!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light',
          themePrimary: blue[500],
          themeSecondary: purple[500]
        }}
      >
        <ThemeProvider>
          <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin: 0}}>
            <AppbarDrawer/>

            {children}
          </body>
        </ThemeProvider>
      </SettingsProvider>
    </html>
  );
}
