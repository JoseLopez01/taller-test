import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const SearchContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '50%',
}));

function SearchRecipe() {
  return (
    <SearchContainer>
      <TextField
        label="Search"
        placeholder="Search a recipe"
        variant="outlined"
        color="secondary"
        fullWidth
      />
    </SearchContainer>
  );
}

export default SearchRecipe;
