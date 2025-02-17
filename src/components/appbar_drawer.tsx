'use client';

import {
  AppBar, Box,
  Button, Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography
} from "@mui/material";
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {ReturnHome} from "@/components/return_home";
import {PropsWithChildren, useState} from "react";
import HomeIcon from '@mui/icons-material/Home';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import TableViewIcon from '@mui/icons-material/TableView';
import dynamic from "next/dynamic";

const DynamicScrollTop = dynamic(() => import('@/components/scroll_top'), {ssr: false});

export function AppbarDrawer({children}: PropsWithChildren) {
  const [open, setOpen] = useState(false);

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
