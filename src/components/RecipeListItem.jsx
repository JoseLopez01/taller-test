import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const Container = styled(ListItemButton)(() => ({
  '&:first-of-type': {
    borderRadius: '4px 4px 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 4px 4px',
  },
}));

function RecipeListItem({ name, image, source, setSelectedRecipe }) {
  return (
    <Container
      disableGutters
      divider
      onClick={setSelectedRecipe}
      data-testid="recipe-list-item-container"
    >
      <ListItemAvatar>
        <Avatar alt={name} src={image} data-testid="recipe-list-item-avatar" />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={source} />
    </Container>
  );
}

export default RecipeListItem;
