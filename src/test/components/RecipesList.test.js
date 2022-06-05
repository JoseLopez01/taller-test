import { render, screen } from '@testing-library/react';
import RecipesList from '../../components/RecipesList';

const testRecipes = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: `Test Recipe ${i + 1}`,
  source: `Test Source ${i + 1}`,
  url: `https://www.test.com/${i + 1}`,
  image: `https://www.test.com/image${i + 1}.jpg`,
}));

describe('RecipesList Component', () => {
  const setup = () => {
    render(<RecipesList recipes={testRecipes} setSelectedRecipe={jest.fn()} />);
  };

  it('Should have 10 recipes', () => {
    setup();
    const recipeList = screen.getAllByTestId('recipe-list-item-container');
    expect(recipeList.length).toBe(10);
  });
});
