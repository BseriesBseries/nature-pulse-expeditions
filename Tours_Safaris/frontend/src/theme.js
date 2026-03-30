import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B5A2B', // Earthy brown
      light: '#C19A6B',
      dark: '#5D3A1A',
    },
    secondary: {
      main: '#D4AF37', // Gold accent
      light: '#F4C542',
      dark: '#996515',
    },
    background: {
      default: '#FDFBF7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C1810',
      secondary: '#5C4033',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: {
      fontWeight: 400,
      fontSize: '4rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 400,
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 400,
      fontSize: '2.5rem',
    },
    body1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 400,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #E8E0D5',
        },
      },
    },
  },
});

export default theme;