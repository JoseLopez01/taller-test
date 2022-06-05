import { render, screen, fireEvent } from '@testing-library/react';

import RecipeListItem from '../../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  source: 'Test Source',
  url: 'https://www.test.com',
  image: 'https://www.test.com/image.jpg',
};

describe('RecipeListItem Component', () => {
  const setSelectedRecipe = jest.fn();

  const setup = () => {
    const { name, image, source } = testRecipe;

    render(
      <RecipeListItem
        image={image}
        name={name}
        setSelectedRecipe={setSelectedRecipe}
        source={source}
      />
    );
  };

  it('should render an image with the image src', () => {
    setup();

    const image = screen.getByAltText(testRecipe.name);
    expect(image).toHaveAttribute('src', testRecipe.image);
  });

  it('should have the name', () => {
    setup();

    const name = screen.getByText(testRecipe.name);
    expect(name).toBeInTheDocument();
  });

  it('should have the source', () => {
    setup();

    const source = screen.getByText(testRecipe.source);
    expect(source).toBeInTheDocument();
  });

  it('should call setSelectedRecipe when clicked', () => {
    setup();

    const item = screen.getByTestId('recipe-list-item-container');
    fireEvent.click(item);
    expect(setSelectedRecipe).toHaveBeenCalled();
  });
});
