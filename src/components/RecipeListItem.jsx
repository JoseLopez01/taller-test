import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Save from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';

const Container = styled(ListItem)(() => ({
  '&:hover': {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
  },
  '&:first-of-type': {
    borderRadius: '4px 4px 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 4px 4px',
  },
}));

function RecipeListItem({ name, image, source }) {
  return (
    <Container
      disableGutters
      divider
      secondaryAction={
        <IconButton color="secondary">
          <Save />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={name} src={image} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={source} />
    </Container>
  );
}

export default RecipeListItem;
