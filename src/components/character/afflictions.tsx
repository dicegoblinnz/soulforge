import {
  Card,
  CardContent,
  CardHeader,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";

type Props = {
  sx?: SxProps;
};

export function Afflictions({sx}: Props) {
  return (
    <Card sx={sx}>
      <CardHeader
        title="Afflictions"
        sx={{pb: 0}}
      />
      <CardContent>
        <Grid container spacing={2}>
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
      </CardContent>
    </Card>
  );
}

