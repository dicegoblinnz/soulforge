'use client';

import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    SxProps
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Ability } from "@/components/character/ability";
import { idToCharacterAbility } from "@/data/v1/converters";

type Props = {
    sx?: SxProps;
};

export const TemporaryTags: React.FC<Props> = ({ sx }) => {
    // Delay rendering until after mount to avoid hydration mismatches.
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Box sx={sx}>
            <Typography variant="h5" component="h5">
                Temporary Tags
            </Typography>

            {/* Abilities Section */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid xs={12}>
                    <Ability ability={idToCharacterAbility(0)} />
                </Grid>
                <Grid xs={12}>
                    <Ability ability={idToCharacterAbility(0)} />
                </Grid>
                <Grid xs={12}>
                    <Ability ability={idToCharacterAbility(0)} />
                </Grid>
            </Grid>
        </Box>
    );
};
