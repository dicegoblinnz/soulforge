import {
  Box,
  Typography,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";

type Props = {
  sx?: SxProps;
};

export function Afflictions({sx}: Props) {
  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Afflictions
      </Typography>

      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={12}>
          <Ability/>
        </Grid>

        <Grid size={12}>
          <Ability/>
        </Grid>

        <Grid size={12}>
          <Ability/>
        </Grid>
      </Grid>
    </Box>
  );
}

