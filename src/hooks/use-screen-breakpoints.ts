'use client';

import {useMediaQuery} from "usehooks-ts";

export function useBreakpointMediaQuery(query: string) {
  return useMediaQuery(query.replace('@media ', ''));
}