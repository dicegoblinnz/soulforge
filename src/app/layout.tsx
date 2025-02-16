import { Geist, Geist_Mono } from "next/font/google";
import {CssBaseline} from "@mui/material";
import {AppbarDrawer} from "@/components/appbar_drawer";

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
  description: "SoulForge, an up and coming TTRPG!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <CssBaseline />
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin: 0}}>
        <AppbarDrawer/>

        {children}
      </body>
    </html>
  );
}
