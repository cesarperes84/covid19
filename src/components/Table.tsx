import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import format from "../utility/format";

const columns: GridColDef[] = [
  { field: 'state', headerName: 'UF', width: 115 },
  { field: 'newCases', headerName: 'Novos Casos', width: 115 },
  { field: 'totalCases', headerName: 'Total Casos', width: 115 },
  { field: 'newDeaths', headerName: 'Novos Óbitos', width: 115 },
  { field: 'deaths', headerName: 'Total Óbitos', width: 115 },
  { field: 'vaccinated', headerName: 'Total', width: 115 },
];

const Table = ({ results }: { results: any }) => {
  const rows = useMemo(() => {
    let items: any[] = [];
    let i = 0;
    results.map(
      ({
        state,
        newCases,
        totalCases,
        newDeaths,
        deaths,
        vaccinated,
      }: {
        state: string;
        newCases: string;
        totalCases: string;
        newDeaths: string;
        deaths: string;
        vaccinated: string;
      }) => {
        i = i + 1;
        if(i > 1) {
            items.push({
            id: i,
            state: format(state),
            newCases: format(newCases),
            totalCases: format(totalCases),
            newDeaths: format(newDeaths),
            deaths: format(deaths),
            vaccinated: format(vaccinated),
            });
        }
      }
    );
    return items;
  }, [results]);

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} rowsPerPageOptions={[30]} hideFooter />
      </Box>
    </Container>
  );
};

export default Table;
