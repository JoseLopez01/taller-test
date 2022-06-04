import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import RecipeListItem from './RecipeListItem';

const Container = styled('div')(() => ({
  marginTop: '20px',
  width: '100%',
}));

function RecipesList({ recipes = [] }) {
  return (
    <Container>
      <List>
        {recipes.map((recipe, i) => (
          <RecipeListItem key={i} {...recipe} />
        ))}
      </List>
    </Container>
  );
}

export default RecipesList;
