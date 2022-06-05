import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

import RecipeListItem from './RecipeListItem';

const Container = styled('div')(() => ({
  marginTop: '20px',
  width: '100%',
}));

function RecipesList({ setSelectedRecipe, recipes }) {
  return (
    <Container>
      <List data-testid="recipes-list">
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
