'use client';

import Link from 'next/link';
import {Typography} from "@mui/material";

export function ReturnHome() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Typography color="background.paper" variant="h6">SoulForge</Typography>
    </Link>
  );
}