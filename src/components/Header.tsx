import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = (): JSX.Element => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 0,
      pb: 0,
    }}
  >
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Casos e óbitos por coronavírus no Brasil
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Confira como estão os casos da COVID-19 no seu estado segundo os dados oficiais das
        secretarias estaduais de saúde
      </Typography>
    </Container>
  </Box>
);

export default Header;
