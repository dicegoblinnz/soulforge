import {
  Card,
  CardContent,
  CardHeader,
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
    <Card sx={sx}>
      <CardHeader
        title="Kinfolk"
        action={<KinfolkModal/>}
        sx={{pb: 0}}
      />
      <CardContent>
        <Grid container spacing={2}>
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
      </CardContent>
    </Card>
  );
}

