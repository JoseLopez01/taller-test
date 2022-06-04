import { useState } from 'react';

import SearchRecipe from './SearchRecipe';
import RecipesList from './RecipesList';

function RecipesForm() {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <SearchRecipe setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </>
  );
}

export default RecipesForm;
