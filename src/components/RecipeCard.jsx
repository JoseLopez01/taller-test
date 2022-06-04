import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Link from '@mui/icons-material/Link';
import { styled } from '@mui/material/styles';

const Container = styled(Card)(() => ({
  boxShadow: '0px 6px 12px #E2E8EE',
}));

function RecipeCard() {
  return (
    <Container>
      <CardHeader title="Recipe Title" subheader="Subheader" />
      <CardMedia
        image="https://source.unsplash.com/random"
        title="Image title"
        height="300"
        component="img"
      />
      <CardActions>
        <IconButton color="error">
          <Delete />
        </IconButton>
        <IconButton color="info">
          <Link />
        </IconButton>
      </CardActions>
    </Container>
  );
}

export default RecipeCard;
