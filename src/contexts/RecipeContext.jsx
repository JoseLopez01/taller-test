import { createContext, useContext, useState } from 'react';

const context = createContext();

function RecipeContext() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const onOpenLink = () => {
    window.open(selectedRecipe.url, '_blank');
  };

  const onDelete = () => {
    setSelectedRecipe(null);
    console.log('delete', selectedRecipe);
  };

  return (
    <context.Provider
      value={{ selectedRecipe, setSelectedRecipe, onOpenLink, onDelete }}
    >
      RecipeContext
    </context.Provider>
  );
}

export function useRecipeContext() {
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeContext');
  }

  return useContext(context);
}

export default RecipeContext;
