import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import RecipesForm from './components/RecipesForm';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center">
          Recipes App
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <RecipesForm />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
