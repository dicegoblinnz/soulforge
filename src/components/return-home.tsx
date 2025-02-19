'use client';

import Link from 'next/link';
import {Typography, useTheme} from "@mui/material";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";

export function ReturnHome() {
  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Typography variant={!isSmall ? "h6" : "h5"} sx={{color: "var(--AppBar-color)"}}>SoulForge</Typography>
    </Link>
  );
}