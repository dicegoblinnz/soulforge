'use client';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  SxProps, useTheme
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {idToCharacterAbility} from "@/data/v1/converters";
import {CharacterTagCard} from "@/components/character/character-tag-card";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";

function KeystoneSelect() {
  return (
    <FormControl size="small" sx={{minWidth: 150}}>
      <InputLabel>Keystone</InputLabel>
      <Select
        label="Keystone"
        variant="outlined"
      >
        <MenuItem value="juggernaut">Juggernaut</MenuItem>
      </Select>
    </FormControl>
  );
}

type Props = {
  sx?: SxProps;
};

export function Keystone({sx}: Props) {
  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const cardSize = !isSmall ? 6 : 12;

  return (
    <Box sx={sx}>
      <Stack justifyContent="space-between" direction="row">
        <Typography
          variant="h5"
          component="h5"
        >
          Keystone
        </Typography>

        <KeystoneSelect/>
      </Stack>

      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={cardSize}>
          <CharacterTagCard ability={idToCharacterAbility(0)} sx={{height: "100%"}}/>
        </Grid>

        <Grid size={cardSize}>
          <CharacterTagCard ability={idToCharacterAbility(0)} sx={{height: "100%"}}/>
        </Grid>

        <Grid size={12}>
          <CharacterTagCard ability={idToCharacterAbility(0)} sx={{height: "100%"}}/>
        </Grid>
      </Grid>
    </Box>
  );
}

