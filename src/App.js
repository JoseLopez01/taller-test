import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import RecipesForm from './components/RecipesForm';
import RecipeCard from './components/RecipeCard';

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
        <Grid container sx={{ mt: 1 }} spacing={2}>
          <Grid item xs={6}>
            <RecipesForm />
          </Grid>
          <Grid item xs={6}>
            <RecipeCard />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
