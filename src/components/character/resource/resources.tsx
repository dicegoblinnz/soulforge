'use client';

import {
  Box,
  Typography,
  SxProps, Card, CardContent
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import DiamondIcon from '@mui/icons-material/Diamond';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import {Resource} from "@/components/character/resource/resource";
import {useCharacterContext} from "@/context/character/character-context";

type Props = {
  sx?: SxProps;
};

export function Resources({sx}: Props) {
  const character = useCharacterContext();

  const fate = character.character?.resources.fate.value ?? -1;
  const downtime = character.character?.resources.downtime.value ?? -1;

  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Resources
      </Typography>

      <Card sx={{mt: 2}}>
        <CardContent>
          <Grid container spacing={2} sx={{mt: 2}}>
            <Grid size={6}>
              <Resource
                name="Fate"
                icon={<DiamondIcon/>}
                value={fate}
                onUpdate={(newValue: number) => character.updateFate(newValue)}
              />
            </Grid>

            <Grid size={6}>
              <Resource
                name="Downtime"
                icon={<BedtimeIcon/>}
                value={downtime}
                onUpdate={(newValue: number) => character.updateDowntime(newValue)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

