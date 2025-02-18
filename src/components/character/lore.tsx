'use client';

import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  TextField, Typography
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {useCharacterContext} from "@/context/character/character-context";
import {aspirations} from "@/data/v1/aspirations";
import {useCallback} from "react";
import {coreValues} from "@/data/v1/core_values";
import {vices} from "@/data/v1/vices";

type Props = {
  sx?: SxProps;
};

export function Lore({sx}: Props) {
  const character = useCharacterContext();

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

  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Lore
      </Typography>

      <Card sx={{mt: 2}}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                label="Name"
                variant="outlined"
                margin="dense"
                size="small"
                fullWidth
                value={character.character?.lore.name}
                onChange={e => character.updateName(e.target.value)}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="True name"
                variant="outlined"
                margin="dense"
                size="small"
                fullWidth
                value={character.character?.lore.true_name}
                onChange={e => character.updateTrueName(e.target.value)}
              />
            </Grid>


            <Grid size={4}>
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
            </Grid>

            <Grid size={4}>
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
            </Grid>

            <Grid size={4}>
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
            </Grid>


            <Grid size={4}>
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
            </Grid>

            <Grid size={4}>
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
            </Grid>

            <Grid size={4}>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

