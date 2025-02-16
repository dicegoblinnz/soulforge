import {Button, Stack, Typography} from "@mui/material";

export function SheetHeader() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography typography="h3">SoulForge character sheet</Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" color="primary">Download</Button>
        <Button variant="contained" color="primary">Load</Button>
      </Stack>
    </Stack>
  );
}

