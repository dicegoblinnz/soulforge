'use client';

import {
  Box,
  Typography,
  SxProps, SvgIconProps
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

  const renderDiamondIcon = (props: SvgIconProps) => {
    return <DiamondIcon {...props}/>;
  };

  const renderBedtimeIcon = (props: SvgIconProps) => {
    return <BedtimeIcon {...props}/>;
  };

  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Resources
      </Typography>

      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={2}>
          <Resource
            name="Fate"
            renderIcon={renderDiamondIcon}
            value={fate}
            onUpdate={(newValue: number) => character.updateFate(newValue)}
          />
        </Grid>

        <Grid size={2}>
          <Resource
            name="Downtime"
            renderIcon={renderBedtimeIcon}
            value={downtime}
            onUpdate={(newValue: number) => character.updateDowntime(newValue)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

