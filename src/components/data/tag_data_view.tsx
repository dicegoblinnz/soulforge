'use client';

import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  SxProps,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, gridClasses, GridToolbar } from "@mui/x-data-grid";
import { alpha } from "@mui/material/styles";
import { tags } from "@/data/v1/tags";
import { lighten, darken } from "@mui/system/colorManipulator/colorManipulator";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "description", headerName: "Description", width: 600 },
  { field: "categories", headerName: "Categories", width: 150 },
  { field: "tags", headerName: "Tags", width: 300 },
  { field: "afflictions", headerName: "Afflictions", width: 150 },
  { field: "id", headerName: "ID", width: 80 },
];

type Props = {
  sx?: SxProps;
};

export function TagDataView({ sx }: Props) {
  const theme = useTheme();

  // Use only the tags array (conditions removed)
  const combinedRows = useMemo(() => tags, []);

  // Create a unique list of categories (handling undefined values)
  const uniqueCategories = useMemo(() => {
    const catSet = new Set<string>();
    combinedRows.forEach((row) => {
      if (Array.isArray(row.categories)) {
        row.categories.forEach((cat) => {
          if (cat && typeof cat === "string" && cat.trim() !== "") {
            catSet.add(cat.trim());
          }
        });
      }
    });
    return Array.from(catSet);
  }, [combinedRows]);

  // Prepend "All" so users can view all categories.
  const categories = useMemo(() => ["All", ...uniqueCategories], [uniqueCategories]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter rows based on the selected category.
  const filteredRows = useMemo(() => {
    return combinedRows.filter((row) => {
      if (selectedCategory === "All") return true;
      if (Array.isArray(row.categories)) {
        return row.categories.some(
            (cat) =>
                cat && cat.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );
      }
      return false;
    });
  }, [combinedRows, selectedCategory]);

  return (
      <Box sx={sx}>
        <Typography variant="h5" component="h5">
          Tag data view
        </Typography>

        {/* Dropdown Filter */}
        <Box sx={{ mt: 2, mb: 2, width: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
                labelId="category-select-label"
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Box
                display="flex"
                flexDirection="column"
                sx={{ minHeight: "420px", maxHeight: "80vh" }}
            >
              <DataGrid
                  rows={filteredRows}
                  columns={columns}
                  rowHeight={38}
                  columnHeaderHeight={42}
                  getRowClassName={(params) =>
                      params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                  }
                  initialState={{
                    pagination: { paginationModel: { pageSize: 12 } },
                  }}
                  pageSizeOptions={[
                    { value: 12, label: "12" },
                    { value: 24, label: "24" },
                    { value: 48, label: "48" },
                  ]}
                  checkboxSelection
                  disableRowSelectionOnClick
                  slots={{ toolbar: GridToolbar }}
                  slotProps={{ toolbar: { showQuickFilter: true } }}
                  sx={{
                    ["& .MuiDataGrid-topContainer"]: {
                      backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                    },
                    ["& .MuiDataGrid-row:hover"]: {
                      "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.2),
                      },
                    },
                    [`& .${gridClasses.row}.even`]: {
                      backgroundColor:
                          theme.palette.mode === "dark"
                              ? lighten(theme.palette.background.default, 0.1)
                              : darken(theme.palette.background.default, 0.1),
                    },
                  }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
  );
}
