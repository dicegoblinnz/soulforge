import {
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  SxProps,
  Typography
} from "@mui/material";

function AbilityExhaust() {
  return(
    <FormControlLabel
      control={<Switch />}
      label={<Typography typography="body" color="textSecondary">Exhaust</Typography>}
      labelPlacement="start"
    />
  );
}

type Props = {
  sx?: SxProps;
};

export function Ability({sx}: Props) {
  return (
    <Card sx={sx}>
      <CardHeader
        title="Ability 1"
        slotProps={{title: {typography: "h6"}}}
        action={<AbilityExhaust/>}
        sx={{pb: 0}}
      />
      <CardContent>
        <Typography typography="body">
          Sunt quo et aut. Distinctio porro est aspernatur minus vitae eum impedit. Sunt reiciendis minus laborum provident nihil quam dolor. Atque nam voluptatem voluptatem et aperiam repudiandae tempora. Ut qui saepe ab recusandae asperiores dolore velit.
        </Typography>
      </CardContent>
    </Card>
  );
}

