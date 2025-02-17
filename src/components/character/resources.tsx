import {
  Box,
  Typography,
  SxProps, Card, CardContent
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import DiamondIcon from '@mui/icons-material/Diamond';
import BedtimeIcon from '@mui/icons-material/Bedtime';

type Props = {
  sx?: SxProps;
};

export function Resources({sx}: Props) {
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
              <Box display="flex" gap={2}>
                <DiamondIcon/>
                <Typography
                  variant="body1"
                  component="p"
                >
                  Fate
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                >
                  3
                </Typography>
              </Box>
            </Grid>

            <Grid size={6}>
              <Box display="flex" gap={2}>
                <BedtimeIcon/>
                <Typography
                  variant="body1"
                  component="p"
                >
                  Downtime
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                >
                  12
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

