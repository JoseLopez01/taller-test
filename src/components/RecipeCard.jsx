import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Link from '@mui/icons-material/Link';
import Save from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';

const Container = styled(Card)(() => ({
  boxShadow: '0px 6px 12px #E2E8EE',
}));

function RecipeCard({ recipe, showSave, onSave, onDelete }) {
  const { name, image, url, source } = recipe;

  const handleOnLink = () => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      <CardHeader
        title={name}
        subheader={source}
        data-testid="recipe-card-header"
      />
      <CardMedia
        image={image}
        title="Image title"
        height="300"
        component="img"
        data-testid="recipe-card-image"
      />
      <CardActions>
        <IconButton color="info" onClick={handleOnLink}>
          <Link />
        </IconButton>
        {!showSave && (
          <IconButton
            color="error"
            onClick={onDelete}
            data-testid="recipe-card-delete-button"
          >
            <Delete />
          </IconButton>
        )}
        {showSave && (
          <IconButton
            color="success"
            onClick={onSave}
            data-testid="recipe-card-save-button"
          >
            <Save />
          </IconButton>
        )}
      </CardActions>
    </Container>
  );
}

export default RecipeCard;
