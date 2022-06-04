import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import RecipeCard from './components/RecipeCard';
import SearchRecipe from './components/SearchRecipe';
import RecipesList from './components/RecipesList';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center">
          Recipes App
        </Typography>
        <Grid container sx={{ mt: 1 }} spacing={2}>
          <Grid item xs={6}>
            <SearchRecipe setRecipes={setRecipes} />
            <RecipesList
              recipes={recipes}
              setSelectedRecipe={setSelectedRecipe}
            />
          </Grid>
          <Grid item xs={6}>
            {selectedRecipe && <RecipeCard recipe={selectedRecipe} />}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
