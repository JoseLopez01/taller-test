import { useEffect, useState } from 'react';

import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

import RecipeListItem from './RecipeListItem';
import { db } from '../firebase';

const Container = styled('div')(() => ({
  marginTop: '20px',
  width: '100%',
}));

function RecipesList({ setSelectedRecipe }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const recipes = await db.collection('recipes').get();
      setRecipes(recipes.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    fetchRecipes();
  }, []);

  return (
    <Container>
      <List>
        {recipes.map((recipe, i) => (
          <RecipeListItem
            key={i}
            {...recipe}
            setSelectedRecipe={() => setSelectedRecipe(recipe)}
          />
        ))}
      </List>
    </Container>
  );
}

export default RecipesList;
