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
  Toolbar,
  Typography,
  useTheme,
  SxProps, styled, SvgIconProps
} from "@mui/material";
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
import {DrawerListItem} from "@/components/drawer-list-item";

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


  const renderHomeIcon = (props: SvgIconProps) => {
    return <HomeIcon {...props} />
  };

  const renderFullscreenIcon = (props: SvgIconProps) => {
    return <FullscreenIcon {...props} />
  };

  const renderTableViewIcon = (props: SvgIconProps) => {
    return <TableViewIcon {...props} />
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderSpinnerIcon = (_: SvgIconProps) => {
    return <CircularProgress size="24px" thickness={4}/>
  };


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
            <GradientBox height={appBarSize} display="flex" alignItems="center" justifyContent="center">
              <Typography variant={!isSmall ? "h6" : "h5"} sx={{textAlign: "center"}}>SoulForge</Typography>
            </GradientBox>
            <Divider/>

            <DrawerListItem
              link="/"
              text="Home"
              renderIcon={renderHomeIcon}
            />
            <DrawerListItem
              link="/full"
              text="Full"
              renderIcon={renderFullscreenIcon}
            />
            <DrawerListItem
              link="/data"
              text="Data"
              renderIcon={renderTableViewIcon}
            />

            <Divider sx={{mt: "auto"}}/>

            <DrawerListItem
              link="/loading"
              text="Loading page"
              renderIcon={renderSpinnerIcon}
            />
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
