import {
  Card,
  CardContent,
  CardHeader, FormControl, InputLabel, MenuItem, Select,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/ability";

function KeystoneSelect() {
  return (
    <FormControl size="small" fullWidth sx={{minWidth: 150}}>
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
    <Card sx={sx}>
      <CardHeader
        title="Keystone"
        action={<KeystoneSelect/>}
        sx={{pb: 0}}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Ability/>
          </Grid>

          <Grid size={6}>
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

