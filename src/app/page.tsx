'use client';

import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Card, Stack, Tab, Typography, useTheme} from "@mui/material";
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
import {DownloadCharacterButton} from "@/components/download-character";
import {LoadCharacterButton} from "@/components/load-character";


export default function Home() {
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <CharacterProvider>
      <div style={{display: "flex", justifyContent: "center", marginTop: theme.spacing(2)}}>
        <main style={{width: "1000px"}}>
          <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Typography variant="h4" color="textPrimary">
              Character sheet
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <DownloadCharacterButton variant="contained"/>
              <LoadCharacterButton variant="contained" color="secondary"/>
            </Stack>
          </Box>

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
        </main>
      </div>
    </CharacterProvider>
  );
}
