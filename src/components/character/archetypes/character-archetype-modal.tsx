'use client';

import {Box, Button, Card, CardContent, CardHeader, Modal} from "@mui/material";
import {useState} from "react";
import {archetypes} from "@/data/v1/archetypes";
import {ArchetypeCard} from "@/components/character/archetypes/archetype-card";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '80vh',
};

export function CharacterArchetypeModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
      >
        Select
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Card sx={{width: "1200px", maxWidth: "80vw", ...style}}>
          <CardHeader
            title="Select Archetype"
            sx={{pb: 0}}
          />
          <CardContent>
            <Box sx={{maxHeight: "60vh", overflowY: 'auto'}}>
              {archetypes.map((a, i) => (
                <ArchetypeCard key={i} archetype={a} onSelect={handleClose} sx={{mt: 4}}/>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

