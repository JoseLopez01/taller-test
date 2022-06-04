import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const SearchContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '50%',
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" align="center">
          Recipes App
        </Typography>
        <SearchContainer>
          <TextField
            label="Search"
            placeholder="Search a recipe"
            variant="outlined"
            color="secondary"
            fullWidth
          />
        </SearchContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
