import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'state', headerName: 'UF', width: 115 },
  { field: 'newCases', headerName: 'Novos Casos', width: 115 },
  { field: 'totalCases', headerName: 'Total Casos', width: 115 },
  { field: 'newDeaths', headerName: 'Novos Óbitos', width: 115 },
  { field: 'deaths', headerName: 'Total Óbitos', width: 115 },
  { field: 'vaccinated', headerName: 'Total', width: 115 },
];

const Table = ({ results }: { results: any }) => (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid rows={results} columns={columns} rowsPerPageOptions={[30]} hideFooter />
      </Box>
    </Container>
  );

export default Table;
