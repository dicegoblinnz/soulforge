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
              <Tab label="Lore" value="1" />
              <Tab label="Keystone" value="2" />
              <Tab label="Archetype" value="3" />
              <Tab label="Kinfolk" value="4" />
              <Tab label="Temporary Tags" value="5" />
              <Tab label="Afflictions" value="6" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Lore/>
          </TabPanel>

          <TabPanel value="2">
            <Keystone/>
          </TabPanel>

          <TabPanel value="3">
            <Archetype/>
          </TabPanel>

          <TabPanel value="4">
            <Kinfolk/>
          </TabPanel>

          <TabPanel value="5">
            <TemporaryTags/>
          </TabPanel>

          <TabPanel value="6">
            <Afflictions/>
          </TabPanel>
        </TabContext>
      </main>
    </div>
  );
}
