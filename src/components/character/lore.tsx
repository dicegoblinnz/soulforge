'use client';

import {
  Box,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  SxProps, useTheme
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {useCharacterContext} from "@/context/character/character-context";
import {aspirations} from "@/data/v1/aspirations";
import {useCallback} from "react";
import {coreValues} from "@/data/v1/core_values";
import {vices} from "@/data/v1/vices";
import {SoulforgeCard} from "@/components/soulforge-card";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";

type Props = {
  sx?: SxProps;
};

export function Lore({sx}: Props) {
  const character = useCharacterContext();
  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const updateAspiration = useCallback((id: number | string) => {
    let idNumber = 0;

    if (typeof id === 'string')
      idNumber = parseInt(id, 10);
    else
      idNumber = id;

    character.updateAspiration(idNumber);
  }, [character]);

  const updateCoreValue = useCallback((id: number | string) => {
    let idNumber = 0;

    if (typeof id === 'string')
      idNumber = parseInt(id, 10);
    else
      idNumber = id;

    character.updateCoreValue(idNumber);
  }, [character]);

  const updateVice = useCallback((id: number | string) => {
    let idNumber = 0;

    if (typeof id === 'string')
      idNumber = parseInt(id, 10);
    else
      idNumber = id;

    character.updateVice(idNumber);
  }, [character]);


  const nameTextField = (
    <TextField
      label="Name"
      variant="outlined"
      margin="dense"
      size="small"
      fullWidth
      value={character.character?.lore.name}
      onChange={e => character.updateName(e.target.value)}
    />
  );

  const trueNameTextField = (
    <TextField
      label="True name"
      variant="outlined"
      margin="dense"
      size="small"
      fullWidth
      value={character.character?.lore.true_name}
      onChange={e => character.updateTrueName(e.target.value)}
    />
  );

  const aspirationSelect = (
    <FormControl size="small" fullWidth>
      <InputLabel>Aspiration</InputLabel>
      <Select
        label="Aspiration"
        variant="outlined"
        value={character.character?.lore.aspiration.id}
        onChange={e => updateAspiration(e.target.value)}
      >
        <MenuItem value="-1">Custom</MenuItem>
        {aspirations.map(a => (
          <MenuItem key={a.id} value={a.id}><strong>{a.name}:</strong> {a.description}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  const coreValueSelect = (
    <FormControl size="small" fullWidth>
      <InputLabel>Core Value</InputLabel>
      <Select
        label="Core Value"
        variant="outlined"
        value={character.character?.lore.core_value.id}
        onChange={e => updateCoreValue(e.target.value)}
      >
        <MenuItem value="-1">Custom</MenuItem>
        {coreValues.map(a => (
          <MenuItem key={a.id} value={a.id}><strong>{a.name}:</strong> {a.description}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  const viceSelect = (
    <FormControl size="small" fullWidth>
      <InputLabel>Vice</InputLabel>
      <Select
        label="Vice"
        variant="outlined"
        value={character.character?.lore.vice.id}
        onChange={e => updateVice(e.target.value)}
      >
        <MenuItem value="-1">Custom</MenuItem>
        {vices.map(a => (
          <MenuItem key={a.id} value={a.id}><strong>{a.name}:</strong> {a.description}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const aspirationNoteTextField = (
    <TextField
      label="Aspiration notes"
      variant="outlined"
      margin="dense"
      size="small"
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      value={character.character?.lore.aspiration.note}
      onChange={e => character.updateAspirationNote(e.target.value)}
    />
  );
  const coreValueNoteTextField = (
    <TextField
      label="Core Value notes"
      variant="outlined"
      margin="dense"
      size="small"
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      value={character.character?.lore.core_value.note}
      onChange={e => character.updateCoreValueNote(e.target.value)}
    />
  );
  const viceNoteTextField = (
    <TextField
      label="Vice notes"
      variant="outlined"
      margin="dense"
      size="small"
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      value={character.character?.lore.vice.note}
      onChange={e => character.updateViceNote(e.target.value)}
    />
  );


  const smallGridLayout = (<>
    <Grid size={12}>
      {nameTextField}
    </Grid>

    <Grid size={12}>
      {trueNameTextField}
    </Grid>


    <Grid size={12}>
      {aspirationSelect}
    </Grid>

    <Grid size={12}>
      {aspirationNoteTextField}
    </Grid>


    <Grid size={12}>
      {coreValueSelect}
    </Grid>

    <Grid size={12}>
      {coreValueNoteTextField}
    </Grid>


    <Grid size={12}>
      {viceSelect}
    </Grid>

    <Grid size={12}>
      {viceNoteTextField}
    </Grid>
  </>);

  const largeGridLayout = (<>
    <Grid size={6}>
      {nameTextField}
    </Grid>

    <Grid size={6}>
      {trueNameTextField}
    </Grid>


    <Grid size={4}>
      {aspirationSelect}
    </Grid>

    <Grid size={4}>
      {coreValueSelect}
    </Grid>

    <Grid size={4}>
      {viceSelect}
    </Grid>


    <Grid size={4}>
      {aspirationNoteTextField}
    </Grid>

    <Grid size={4}>
      {coreValueNoteTextField}
    </Grid>

    <Grid size={4}>
      {viceNoteTextField}
    </Grid>
  </>);

  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Lore
      </Typography>

      <SoulforgeCard sx={{mt: 2}}>
        <CardContent>
          <Grid container spacing={2}>
            {isSmall ? smallGridLayout : largeGridLayout}
          </Grid>
        </CardContent>
      </SoulforgeCard>
    </Box>
  );
}

