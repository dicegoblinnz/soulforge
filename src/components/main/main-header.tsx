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
  const trueName = character.character?.lore.true_name;

  const title = (
    <Typography variant="h4" color="textPrimary">
      {(name !== null && name !== undefined) && (name ?? '').length !== 0
        ? name : "Character sheet"}
    </Typography>
  );
  const subtitle = (
    (trueName !== null && trueName !== undefined) && (trueName ?? '').length !== 0
      ? (
        <Typography variant="h6" color="textSecondary">
          {trueName}
        </Typography>
      ) : null
  );

  return (
    <Stack direction={isSmall ? "column" : "row"} spacing={2} justifyContent="space-between">
      <Stack spacing={0}>
        {title}
        {subtitle}
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <DownloadCharacterButton variant="contained"/>
        <LoadCharacterButton variant="contained" color="secondary"/>
      </Stack>
    </Stack>
  );
}
