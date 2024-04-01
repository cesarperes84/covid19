import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

type CardsProps = {
  label: string;
  value: string;
};

const Cards = ({ cards }: { cards: any }): JSX.Element => (
  <Container sx={{ py: 8 }} maxWidth="xl">
    <Grid container spacing={4}>
      {cards.map(({ label, value }: CardsProps) => (
        <Grid item key={label} xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
                {label}
              </Typography>
              <Typography component="h2" variant="h2" sx={{ color: 'red', fontWeight: 'bold', fontSize: '3rem' }}>
                {value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Cards;
