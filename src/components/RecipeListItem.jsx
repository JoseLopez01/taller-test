import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Save from '@mui/icons-material/Save';

function RecipeListItem({ name, image, source }) {
  return (
    <ListItem
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
    </ListItem>
  );
}

export default RecipeListItem;
