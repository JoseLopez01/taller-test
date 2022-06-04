import { styled } from '@mui/material/styles';

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
  backgroundColor: '#000',
}));

function RecipesList({ recipes }) {
  return <Container>RecipesList</Container>;
}

export default RecipesList;
