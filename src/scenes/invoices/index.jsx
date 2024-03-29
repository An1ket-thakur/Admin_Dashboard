import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../Data/mockData";
import Header from "../../components/Header";

/**
 * Renders the Invoices component.
 * @returns {JSX.Element} The rendered component.
 */
const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    {
        field: 'cost',
        headerName: 'Cost',
        flex: 1,
        renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
        </Typography>
    ),
    },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
];

return (
    <Box m="20px">
        <Header title="INVOICES" subtitle="List of Invoices Balances" />
        <Box m="40px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": {
            border: 'none',
            color: `${colors.greenAccent[200]} !important`,
        },
        "& .MuiDataGrid-cell": {
            borderBottom: 'none',
        },
        "& .name-column--cell": {
            color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
        },
        }}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
    </Box>
    </Box>
);
};

export default Invoices;
