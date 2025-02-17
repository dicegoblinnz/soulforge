import {Lore} from "@/components/character/lore";
import {Keystone} from "@/components/character/keystone";
import {Archetype} from "@/components/character/archetype";
import {Kinfolk} from "@/components/character/kinfolk";
import Grid from "@mui/material/Grid2";
import {TemporaryTags} from "@/components/character/temporary_tags";
import {Afflictions} from "@/components/character/afflictions";
import {Resources} from "@/components/character/resources";

export default function Page() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <main style={{width: "1000px"}}>
        <Lore sx={{mt: 2}}/>
        <Resources sx={{mt: 4}}/>
        <Keystone sx={{mt: 2}}/>
        <Archetype sx={{mt: 2}}/>
        <Kinfolk sx={{mt: 2}}/>

        <Grid container spacing={2} sx={{mt: 2, mb: 8}}>
          <Grid size={6}>
            <TemporaryTags/>
          </Grid>

          <Grid size={6}>
            <Afflictions/>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
