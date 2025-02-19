import {Stack, Typography} from "@mui/material";
import {DownloadCharacterButton} from "@/components/download-character";
import {LoadCharacterButton} from "@/components/load-character";
import {useCharacterContext} from "@/context/character/character-context";

type Props = {
  isSmall: boolean;
};

export function MainHeader({isSmall}: Props) {
  const character = useCharacterContext();

  const name = character.character?.lore.name;
  const title = (
    <Typography variant="h4" color="textPrimary">
      {(name !== null && name !== undefined) || (name ?? '').length !== 0
        ? name : "Character sheet"}
    </Typography>
  );

  return (
    <Stack direction={isSmall ? "column" : "row"} spacing={2} justifyContent="space-between">
      {title}

      <Stack direction="row" spacing={2} alignItems="center">
        <DownloadCharacterButton variant="contained"/>
        <LoadCharacterButton variant="contained" color="secondary"/>
      </Stack>
    </Stack>
  );
}
