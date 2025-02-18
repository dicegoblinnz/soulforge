'use client';

import {
  Box,
  Stack,
  Typography,
  SxProps, CardContent, Card
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import {Ability} from "@/components/character/ability";
import {KinfolkModal} from "@/components/character/kinfolk_modal";
import {useCharacterContext} from "@/context/character/character-context";

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
            <Ability ability={a}/>
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

