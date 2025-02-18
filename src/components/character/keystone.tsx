'use client';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";
import {idToCharacterAbility} from "@/data/v1/converters";

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
        <Grid size={6}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>

        <Grid size={6}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>

        <Grid size={12}>
          <Ability ability={idToCharacterAbility(0)}/>
        </Grid>
      </Grid>
    </Box>
  );
}

