import {
  Box,
  Stack,
  Typography,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";
import {KinfolkModal} from "@/components/character/kinfolk_modal";

type Props = {
  sx?: SxProps;
};

export function Kinfolk({sx}: Props) {
  return (
    <Box sx={sx}>
      <Stack justifyContent="space-between" direction="row">
        <Typography
          variant="h5"
          component="h5"
        >
          Kinfolk
        </Typography>

        <KinfolkModal/>
      </Stack>

      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid size={4}>
          <Ability/>
        </Grid>

        <Grid size={4}>
          <Ability/>
        </Grid>

        <Grid size={4}>
          <Ability/>
        </Grid>
      </Grid>
    </Box>
  );
}

