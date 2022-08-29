import AppBarMui from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppBar = (): JSX.Element => (
    <AppBarMui position="relative">
    <Toolbar>
      <Typography variant="h5" color="inherit" noWrap fontWeight="bold">
        Corona Vírus pelo Brasil
      </Typography>
    </Toolbar>
  </AppBarMui>
);

export default AppBar;
