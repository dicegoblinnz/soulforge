'use client';

import {
  FormControlLabel,
  Switch,
  SxProps,
  Typography
} from "@mui/material";
import {CharacterAbility} from "@/data/types";
import {TagCard} from "@/components/character/tag-card";

type ExhaustProps = {
  exhausted: boolean;
  setExhaust: (value: boolean) => void;
};

function AbilityExhaust({exhausted, setExhaust}: ExhaustProps) {
  return(
    <FormControlLabel
      control={
        <Switch
          color="warning"
          checked={exhausted}
          onChange={x => setExhaust(x.target.checked)}
        />
      }
      label={<Typography typography="body" color="textSecondary">Exhaust</Typography>}
      labelPlacement="start"
    />
  );
}

type Props = {
  ability: CharacterAbility;
  exhaustable?: boolean;
  onSetExhaust?: (value: boolean) => void;
  sx?: SxProps;
};

export function CharacterTagCard({ability, exhaustable, onSetExhaust, sx}: Props) {
  const setExhaust = (value: boolean) => {
    if (onSetExhaust !== undefined)
      onSetExhaust(value);
  };

  const abilityAction = exhaustable || (exhaustable === undefined || exhaustable == null)
    ? (
      <AbilityExhaust
        exhausted={ability.exhausted}
        setExhaust={setExhaust}
      />
    ) : null;

  return (
    <TagCard id={ability.id} action={abilityAction} sx={sx}/>
  );
}
