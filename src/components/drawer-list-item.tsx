'use client';

import {ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconProps, useTheme} from "@mui/material";
import Link from "next/link";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";
import {ReactNode} from "react";

interface Props {
  link: string;
  text: string;
  renderIcon?: (props: SvgIconProps) => ReactNode;
}

export function DrawerListItem({ link, text, renderIcon }: Props) {
  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const textSize = !isSmall ? "body1" : "h6";

  const listIcon = renderIcon !== undefined
    ? (
      <ListItemIcon>
        {renderIcon({})}
      </ListItemIcon>
    ) : null;

  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} href={link}>
        {listIcon}

        <ListItemText primary={text} slotProps={{primary: {typography: textSize}}} />
      </ListItemButton>
    </ListItem>
  );
}
