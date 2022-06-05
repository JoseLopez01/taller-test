import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import RecipeCard from './components/RecipeCard';
import SearchRecipe from './components/SearchRecipe';
import RecipesList from './components/RecipesList';
import { db } from './firebase';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    db.collection('recipes').onSnapshot((snapshot) => {
      setRecipes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const onSelectNewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsNew(true);
  };

  const onSelectListRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsNew(false);
  };

  const onSave = () => {
    setRecipes([...recipes, selectedRecipe]);
    setIsNew(false);
    db.collection('recipes').doc(selectedRecipe.id).set(selectedRecipe);
  };

  const onDelete = () => {
    setRecipes(recipes.filter((r) => r.id !== selectedRecipe.id));
    db.collection('recipes').doc(selectedRecipe.id).delete();
    setSelectedRecipe(null);
    setIsNew(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center">
          Recipes App
        </Typography>
        <Grid container sx={{ mt: 1 }} spacing={2}>
          <Grid item xs={6}>
            <SearchRecipe
              setRecipes={setRecipes}
              setSelectedRecipe={onSelectNewRecipe}
            />
            <RecipesList
              recipes={recipes}
              setSelectedRecipe={onSelectListRecipe}
            />
          </Grid>
          <Grid item xs={6}>
            {selectedRecipe && (
              <RecipeCard
                recipe={selectedRecipe}
                showSave={isNew}
                onSave={onSave}
                onDelete={onDelete}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
