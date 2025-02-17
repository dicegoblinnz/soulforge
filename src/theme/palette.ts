export function createBasePalette(mode: 'light' | 'dark') {
  const light = {
    mode: 'light',
  };

  const dark = {
    mode: 'dark',
  };

  return mode === 'dark' ? dark : light;
}
