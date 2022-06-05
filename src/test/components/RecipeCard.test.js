import { render, screen } from '@testing-library/react';

import RecipeCard from '../../components/RecipeCard';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  source: 'Test Source',
  url: 'https://www.test.com',
  image: 'https://www.test.com/image.jpg',
};

describe('RecipeCard Component', () => {
  const setup = (showSave = true) => {
    const onSave = jest.fn();
    const onDelete = jest.fn();

    render(
      <RecipeCard
        recipe={testRecipe}
        showSave={showSave}
        onDelete={onDelete}
        onSave={onSave}
      />
    );
  };

  it('should render name and source in header', () => {
    setup();
    const header = screen.getByTestId('recipe-card-header');
    expect(header).toHaveTextContent('Test Recipe');
    expect(header).toHaveTextContent('Test Source');
  });

  it('should render image', () => {
    setup();

    const image = screen.getByTestId('recipe-card-image');
    expect(image).toHaveAttribute('src', 'https://www.test.com/image.jpg');
  });

  it('should show save button is showSave is true', () => {
    setup();

    const saveButton = screen.getByTestId('recipe-card-save-button');
    expect(saveButton).toBeInTheDocument();
  });

  it('should not show delete button if showSave is true', () => {
    setup();

    const deleteButton = screen.queryByTestId('recipe-card-delete-button');
    expect(deleteButton).not.toBeInTheDocument();
  });

  it('should show delete button if showSave is false', () => {
    setup(false);

    const deleteButton = screen.getByTestId('recipe-card-delete-button');
    expect(deleteButton).toBeInTheDocument();
  });
});
