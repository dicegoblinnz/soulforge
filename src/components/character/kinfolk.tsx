'use client';

import {
  Box,
  Stack,
  Typography,
  CardContent,
  SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";
import {KinfolkModal} from "@/components/character/kinfolk_modal";
import {useCharacterContext} from "@/context/character/character-context";
import {SoulforgeCard} from "@/components/soulforge-card";

type Props = {
  sx?: SxProps;
};

export function Kinfolk({sx}: Props) {
  const character = useCharacterContext();

  const abilityInfo = (character.character?.kinfolk.abilities ?? []).length !== 0
    ? (
      <>
        {character.character?.kinfolk.abilities.map((a, i) => (
          <Grid size={4} key={`${i}-${a.id}`}>
            <Ability ability={a} sx={{height: "100%"}}/>
          </Grid>
        ))}
      </>
    )
    : (
      <Grid size={12}>
        <SoulforgeCard>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
            <Typography variant="h6" fontStyle="italic">No abilities found</Typography>
          </CardContent>
        </SoulforgeCard>
      </Grid>
    );

  return (
    <Box sx={sx}>
      <Stack justifyContent="space-between" direction="row">
        <Typography
          variant="h5"
          component="h5"
        >
          Kinfolk
        </Typography>

        <KinfolkModal/>
      </Stack>

      <Grid container spacing={2} sx={{mt: 2}}>
        {abilityInfo}
      </Grid>
    </Box>
  );
}

