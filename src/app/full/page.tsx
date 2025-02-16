import {Lore} from "@/components/lore";
import {Keystone} from "@/components/keystone";
import {Archetype} from "@/components/archetype";
import {Kinfolk} from "@/components/kinfolk";
import Grid from "@mui/material/Grid2";
import {TemporaryTags} from "@/components/temporary_tags";
import {Afflictions} from "@/components/afflictions";

export default function Page() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <main style={{width: "1000px"}}>
        <Lore sx={{mt: 2}}/>
        <Keystone sx={{mt: 2}}/>
        <Archetype sx={{mt: 2}}/>
        <Kinfolk sx={{mt: 2}}/>

        <Grid container spacing={2} sx={{mt: 2}}>
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
