import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SearchRecipe from './components/SearchRecipe';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center">
          Recipes App
        </Typography>
        <SearchRecipe />
      </Container>
    </ThemeProvider>
  );
}

export default App;
