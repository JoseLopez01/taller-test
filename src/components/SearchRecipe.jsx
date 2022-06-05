import { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

import searchRecipes from '../helpers/search-recipes';

const SearchContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

function SearchRecipe() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  const loading = open && search.length > 0 && searchResults.length === 0;

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
        setSearchResults(recipes);
      });
    }
  }, [search]);

  return (
    <SearchContainer>
      <Autocomplete
        sx={{ width: '100%' }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option, value) => option.id === value}
        getOptionLabel={(option) => option.name}
        options={searchResults}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            placeholder="Search a recipe"
            variant="outlined"
            color="secondary"
            onChange={debouncedSearch}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </SearchContainer>
  );
}

export default SearchRecipe;
