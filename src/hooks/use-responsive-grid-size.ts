'use client';

export function useResponsiveGridSize(value: boolean) {
  const c6 = !value ? 6 : 12;
  const c4 = !value ? 4 : 12;
  const c3 = !value ? 3 : 6;
  const c2 = !value ? 2 : 6;
  const c1 = !value ? 1 : 4;

  return [c6, c4, c3, c2, c1];
}