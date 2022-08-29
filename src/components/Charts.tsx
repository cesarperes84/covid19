import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart'), {
  ssr: false,
});

const Charts = ({ cards, total }: { cards: any; total: any }): JSX.Element => (
  <Container sx={{ py: 8 }} maxWidth="xl">
    <Grid container spacing={4}>
      {cards.map(({ id, label }: { id: string, label: string}) => (
        <Chart label={label} id={id} total={total} />
      ))}
    </Grid>
  </Container>
);

export default Charts;
