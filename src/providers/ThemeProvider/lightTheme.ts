import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0052D4',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#F3F4F6',
      paper: 'rgba(255, 255, 255, 1)',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
  shape: {
    borderRadius: 16, // More rounded feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 15px rgba(0, 82, 212, 0.3)',
          },
          '&.Mui-selected': {
            borderRadius: 12,
            backgroundColor: 'rgba(0, 82, 212, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.)',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
        },
      },
    },
  },
})

export default theme
