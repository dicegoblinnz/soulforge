'use client';

import Link from 'next/link';
import {Typography} from "@mui/material";

export function ReturnHome() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Typography variant="h6" sx={{color: "var(--AppBar-color)"}}>SoulForge</Typography>
    </Link>
  );
}