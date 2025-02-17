'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  SxProps
} from "@mui/material";
import {DataGrid, GridColDef, gridClasses} from "@mui/x-data-grid";
import { alpha } from '@mui/material/styles';
import {tags} from "@/data/v1/tags";
import {lighten, darken} from "@mui/system/colorManipulator/colorManipulator";


const columns: GridColDef<(typeof tags)[number]>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 600,
  },
  {
    field: 'categories',
    headerName: 'Categories',
    width: 150,
  },
  {
    field: 'afflictions',
    headerName: 'Afflictions',
    width: 150,
  },
  {
    field: 'tags',
    headerName: 'Tags',
    width: 150,
  },
];


type Props = {
  sx?: SxProps;
};

export function TagDataView({sx}: Props) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={sx}>
      <Typography
        variant="h5"
        component="h5"
      >
        Tag data view
      </Typography>

      <Card sx={{mt: 2}}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            sx={{minHeight: "420px", maxHeight: "80vh"}}
          >
            <DataGrid
              rows={tags}
              columns={columns}
              rowHeight={38}
              columnHeaderHeight={42}
              getRowClassName={params => params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd' }
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 12,
                  },
                },
              }}
              pageSizeOptions={[
                {value: 12, label: "12"},
                {value: 24, label: "24"},
                {value: 48, label: "48"}
              ]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                ['& .MuiDataGrid-topContainer']: {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                },
                ['& .MuiDataGrid-row:hover']: {
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  },
                },
                [`& .${gridClasses.row}.even`]: {
                  backgroundColor: darkMode ? lighten(theme.palette.background.default, 0.1) : darken(theme.palette.background.default, 0.1),
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

