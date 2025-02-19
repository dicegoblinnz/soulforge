'use client';

import {
  AppBar,
  Box,
  CircularProgress,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  SxProps, styled
} from "@mui/material";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ReturnHome} from "@/components/return-home";
import {PropsWithChildren, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import TableViewIcon from '@mui/icons-material/TableView';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import dynamic from "next/dynamic";
import {useSettingsContext} from "@/context/settings/settings-context";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";

const DynamicScrollTop = dynamic(() => import('@/components/scroll-top'), {ssr: false});

const GradientBox = styled(Box)`
  background: linear-gradient(50deg, ${p => p.theme.palette.primary.main}35, ${p => p.theme.palette.primary.main}15);
`;

type Props = {
  sx?: SxProps;
} & PropsWithChildren;

export function AppbarDrawer({sx, children}: Props) {
  const [open, setOpen] = useState(false);
  const settings = useSettingsContext();
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const appBarSize = !isSmall ? "64px" : "72px";
  const buttonSize = !isSmall ? "medium" : "large";

  return (
    <>
      <AppBar position="fixed" sx={{minHeight: appBarSize, ...sx}}>
        <Toolbar  sx={{minHeight: appBarSize}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize={buttonSize} />
          </IconButton>

          <ReturnHome/>

          <div style={{flexGrow: 1}}/>

          <IconButton onClick={() => settings.onUpdate('themeMode', !darkMode ? 'dark': 'light')} color="inherit" size={buttonSize}>
            {theme.palette.mode === 'dark' ? <Brightness4Icon fontSize={buttonSize} /> : <Brightness7Icon fontSize={buttonSize} />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" sx={{minHeight: appBarSize}}/>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box width={250} height="100%" onClick={() => setOpen(false)}>
          <List sx={{p: 0, display: "flex", flexDirection: "column", height: "100%"}}>
            <GradientBox height={64} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h6" sx={{textAlign: "center"}}>SoulForge</Typography>
            </GradientBox>
            <Divider/>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/full">
                <ListItemIcon>
                  <FullscreenIcon />
                </ListItemIcon>
                <ListItemText primary="Full" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/data">
                <ListItemIcon>
                  <TableViewIcon />
                </ListItemIcon>
                <ListItemText primary="Data" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{mt: "auto"}}/>

            <ListItem disablePadding>
              <ListItemButton component={Link} href="/loading">
                <ListItemIcon>
                  <CircularProgress size="24px" thickness={4}/>
                </ListItemIcon>
                <ListItemText primary="Loading page" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {children}

      <DynamicScrollTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </DynamicScrollTop>
    </>
  );
}
