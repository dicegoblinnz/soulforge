import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  TextField
} from "@mui/material";
import Grid from '@mui/material/Grid2';

type Props = {
  sx?: SxProps;
};

export function Lore({sx}: Props) {
  return (
    <Card sx={sx}>
      <CardHeader
        title="Lore"
        sx={{pb: 0}}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              label="Name"
              variant="outlined"
              margin="dense"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid size={6}>
            <TextField
              label="True name"
              variant="outlined"
              margin="dense"
              size="small"
              fullWidth
            />
          </Grid>


          <Grid size={4}>
            <FormControl size="small" fullWidth>
              <InputLabel>Aspiration</InputLabel>
              <Select
                label="Aspiration"
                variant="outlined"
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <FormControl size="small" fullWidth>
              <InputLabel>Core Value</InputLabel>
              <Select
                label="Core Value"
                variant="outlined"
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <FormControl size="small" fullWidth>
              <InputLabel>Vice</InputLabel>
              <Select
                label="Vice"
                variant="outlined"
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

