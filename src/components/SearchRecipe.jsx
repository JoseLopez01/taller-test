import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import searchRecipes from '../helpers/search-recipes';

const SearchContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '50%',
}));

function SearchRecipe() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const debouncedSearch = useMemo(() => debounce(handleChange, 500), []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    if (search) {
      searchRecipes(search).then((recipes) => {
        setRecipes(recipes);
      });
    }
  }, [search]);

  console.log(recipes);

  return (
    <SearchContainer>
      <TextField
        label="Search"
        placeholder="Search a recipe"
        variant="outlined"
        color="secondary"
        fullWidth
        defaultValue=""
        onChange={debouncedSearch}
      />
    </SearchContainer>
  );
}

export default SearchRecipe;
