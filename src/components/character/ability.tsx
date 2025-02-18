'use client';

import {
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  SxProps,
  Typography
} from "@mui/material";
import {CharacterAbility} from "@/data/types";
import {tags} from "@/data/v1/tags";

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
  ability: CharacterAbility;
  sx?: SxProps;
};

export function Ability({ability, sx}: Props) {
  const fullAbility = tags.find(v => v.id === ability.id);
  if (fullAbility === undefined || fullAbility === null) {
    return null;
  }

  return (
    <Card sx={sx}>
      <CardHeader
        title={fullAbility.name}
        slotProps={{title: {typography: "h6"}}}
        action={<AbilityExhaust/>}
        sx={{pb: 0}}
      />
      <CardContent>
        <Typography typography="body">
          {fullAbility.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

