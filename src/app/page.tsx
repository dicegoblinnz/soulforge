'use client';

import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {Lore} from "@/components/character/lore";
import {Archetype} from "@/components/character/archetype";
import {Keystone} from "@/components/character/keystone";
import {Kinfolk} from "@/components/character/kinfolk";
import {TemporaryTags} from "@/components/character/temporary_tags";
import {Afflictions} from "@/components/character/afflictions";
import Grid from "@mui/material/Grid2";
import {Resources} from "@/components/character/resources";


export default function Home() {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <main style={{width: "1000px"}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} >
              <Tab label="Core" value="1" />
              <Tab label="Self" value="2" />
              <Tab label="Status" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Lore/>
            <Resources sx={{mt: 4}}/>
            <Keystone sx={{mt: 4}}/>
          </TabPanel>

          <TabPanel value="2">
            <Archetype/>
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
        </TabContext>
      </main>
    </div>
  );
}
