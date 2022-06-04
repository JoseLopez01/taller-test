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

function RecipeCard({ recipe }) {
  const { id, name, image, url, source } = recipe;

  const handleOnLink = () => {
    window.open(url, '_blank');
  };

  const handleOnDelete = () => {
    console.log('delete', id);
  };

  return (
    <Container>
      <CardHeader title={name} subheader={source} />
      <CardMedia
        image={image}
        title="Image title"
        height="300"
        component="img"
      />
      <CardActions>
        <IconButton color="error" onClick={handleOnDelete}>
          <Delete />
        </IconButton>
        <IconButton color="info" onClick={handleOnLink}>
          <Link />
        </IconButton>
      </CardActions>
    </Container>
  );
}

export default RecipeCard;
