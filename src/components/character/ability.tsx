'use client';

import {
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  SxProps,
  Typography
} from "@mui/material";
import {CharacterAbility, Tag} from "@/data/types";
import {tags} from "@/data/v1/tags";
import {SoulforgeCard} from "@/components/soulforge-card";

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
  ability: CharacterAbility | Tag;
  exhaustable?: boolean;
  sx?: SxProps;
};

export function Ability({ability, exhaustable, sx}: Props) {
  const fullAbility = tags.find(v => v.id === ability.id);
  if (fullAbility === undefined || fullAbility === null) {
    return null;
  }

  const abilityAction = exhaustable || (exhaustable === undefined || exhaustable == null)
    ? <AbilityExhaust/> : null;

  return (
    <SoulforgeCard sx={sx}>
      <CardHeader
        title={fullAbility.name}
        slotProps={{title: {typography: "h6"}}}
        action={abilityAction}
        sx={{pb: 0}}
      />
      <CardContent>
        <Typography typography="body">
          {fullAbility.description}
        </Typography>
      </CardContent>
    </SoulforgeCard>
  );
}

