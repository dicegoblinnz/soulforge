'use client';

import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Card, Tab, useTheme} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {Lore} from "@/components/character/lore";
import {CharacterArchetype} from "@/components/character/archetypes/character-archetype";
import {Keystone} from "@/components/character/keystone";
import {Kinfolk} from "@/components/character/kinfolk";
import {TemporaryTags} from "@/components/character/temporary_tags";
import {Afflictions} from "@/components/character/afflictions";
import Grid from "@mui/material/Grid2";
import {Resources} from "@/components/character/resource/resources";
import {CharacterProvider} from "@/context/character/character-provider";
import {useBreakpointMediaQuery} from "@/hooks/use-screen-breakpoints";
import {MainHeader} from "@/components/main/main-header";


export default function Home() {
  const [value, setValue] = useState('1');
  const theme = useTheme();
  const isSmall = useBreakpointMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <CharacterProvider>
      <main style={{maxWidth: "100%", margin: theme.spacing(2), display: "flex", justifyContent: "center"}}>
        <Box sx={{maxWidth: isSmall ? "100%" : "1000px"}}>
          <MainHeader isSmall={isSmall}/>

          <Lore sx={{mt: 4}}/>

          <TabContext value={value}>
            <Card variant="outlined" sx={{mt: 4}}>
              <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <TabList onChange={handleChange}>
                  <Tab label="Core" value="1"/>
                  <Tab label="Self" value="2"/>
                  <Tab label="Status" value="3"/>
                </TabList>
              </Box>

              <TabPanel value="1">
                <Resources/>
                <Keystone sx={{mt: 4}}/>
              </TabPanel>

              <TabPanel value="2">
                <CharacterArchetype/>
                <Kinfolk sx={{mt: 4}}/>
              </TabPanel>

              <TabPanel value="3">
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <TemporaryTags/>
                  </Grid>

                  <Grid size={6}>
                    <Afflictions/>
                  </Grid>
                </Grid>
              </TabPanel>
            </Card>
          </TabContext>
        </Box>
      </main>
    </CharacterProvider>
  );
}
