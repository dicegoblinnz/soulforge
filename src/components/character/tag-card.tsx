'use client';

import {
  CardContent,
  CardHeader,
  SxProps,
  Typography
} from "@mui/material";
import {tags} from "@/data/v1/tags";
import {SoulforgeCard} from "@/components/soulforge-card";
import {ReactNode} from "react";

type Props = {
  id: number;
  action?: ReactNode;
  exhausted?: boolean;
  sx?: SxProps;
};

export function TagCard({id, action, exhausted, sx}: Props) {
  const fullAbility = tags.find(v => v.id === id);
  if (fullAbility === undefined || fullAbility === null) {
    return null;
  }

  return (
    <SoulforgeCard exhausted={exhausted} sx={sx}>
      <CardHeader
        title={fullAbility.name}
        slotProps={{title: {typography: "h6"}}}
        action={action}
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
