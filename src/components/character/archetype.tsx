'use client';

import {
  Box,
  Stack,
  Typography,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";
import {ArchetypeModal} from "@/components/character/archetype_modal";
import {idToCharacterAbility} from "@/data/v1/converters";

type Props = {
  sx?: SxProps;
};

export function Archetype({sx}: Props) {
  return (
    <Box sx={sx}>
      <Stack justifyContent="space-between" direction="row">
        <Typography
          variant="h5"
          component="h5"
        >
          Archetype
        </Typography>

        <ArchetypeModal/>
      </Stack>

      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={4}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>

        <Grid size={4}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>

        <Grid size={4}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>
      </Grid>
    </Box>
  );
}

