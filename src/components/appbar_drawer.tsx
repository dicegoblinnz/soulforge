'use client';

import {
  AppBar,
  Box,
  Button,
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
  useTheme
} from "@mui/material";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ReturnHome} from "@/components/return_home";
import {PropsWithChildren, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import TableViewIcon from '@mui/icons-material/TableView';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import dynamic from "next/dynamic";
import {useSettingsContext} from "@/context/settings/settings-context";

const DynamicScrollTop = dynamic(() => import('@/components/scroll_top'), {ssr: false});

type Props = {
} & PropsWithChildren;

export function AppbarDrawer({children}: Props) {
  const [open, setOpen] = useState(false);
  const settings = useSettingsContext();
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <ReturnHome/>

          <div style={{flexGrow: 1}}/>

          <Button color="inherit">Download</Button>
          <Button color="inherit">Load</Button>

          <IconButton onClick={() => settings.onUpdate('themeMode', !darkMode ? 'dark': 'light')} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness5Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box width={250} onClick={() => setOpen(false)}>
          <List sx={{p: 0}}>
            <Box height={64} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h6" sx={{textAlign: "center"}}>SoulForge</Typography>
            </Box>
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
