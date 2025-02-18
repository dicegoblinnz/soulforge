'use client';

import {Button, ButtonProps} from "@mui/material";
import {useCharacterContext} from "@/context/character/character-context";

type Props = {
} & ButtonProps;

export function LoadCharacterButton({...props}: Props) {
  const data = useCharacterContext();

  const download = () => {
    const a = document.createElement("a");
    const file = new Blob([JSON.stringify(data.character, null, 2)], { type: "text/plain" });

    a.href = URL.createObjectURL(file);
    a.download = `SoulForge_Character_${data.character?.lore.name.replace(' ', '_')}.json`;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  return (
    <Button
      {...props}
      onClick={download}
    >
      Load
    </Button>
  );
}