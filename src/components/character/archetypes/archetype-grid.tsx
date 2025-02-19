'use client';

import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  SxProps, useTheme
} from "@mui/material";
import {Archetype} from "@/data/types";
import Grid from "@mui/material/Grid2";
import {TagCard} from "@/components/character/tag-card";
import {useCharacterContext} from "@/context/character/character-context";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";

type Props = {
  archetype: Archetype;
  onSelect: VoidFunction;
  sx?: SxProps;
};

export function ArchetypeGrid({archetype, onSelect, sx}: Props) {
  const characterData = useCharacterContext();

  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const cardSize = !isSmall ? 4 : 12;

  const abilityInfo = (archetype.abilities ?? []).length !== 0
    ? ( // todo: lookup archetype, check category for if party wide, size = 12, else size = 4
      <>
        {archetype.abilities.map((a, i) => (
          <Grid size={cardSize} key={`${i}-${a.id}`}>
            <TagCard
              id={a.id}
              sx={{height: "100%"}}
            />
          </Grid>
        ))}
      </>
    )
    : (
      <Grid size={12}>
        <Card>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
            <Typography variant="h6" fontStyle="italic">No abilities found</Typography>
          </CardContent>
        </Card>
      </Grid>
    );

  const onSelectButtonPressed = () => {
    characterData.updateArchetype(archetype.id);
    onSelect();
  };

  const selectButton = (
    <Button variant="contained" onClick={() => onSelectButtonPressed()}>
      Select
    </Button>
  );

  return (
    <Grid container spacing={2} sx={sx}>
      <Grid size={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">{archetype.name}</Typography>
          {selectButton}
        </Box>
      </Grid>


      {abilityInfo}
    </Grid>
  );
}

