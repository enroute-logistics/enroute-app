import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007AFF', // Neon Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B', // Vibrant Coral
    },
    background: {
      default: '#0D0F14', // Deep Charcoal
      paper: 'rgba(30, 33, 42, 1)', // Glassmorphic
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#AAB3C0',
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
          background: 'linear-gradient(135deg, #007AFF 0%, #9F00C5 100%)',
          color: '#fff',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 20px rgba(0, 122, 255, 0.4)',
            background: 'linear-gradient(135deg, #009FFF 0%, #B700F5 100%)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 33, 42, 0.8)',
          backdropFilter: 'blur(15px)',
          borderRadius: 16,
          boxShadow: '0px 10px 30px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 10,
          '& input': {
            color: '#ffffff',
          },
          '& label': {
            color: '#AAB3C0',
          },
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 33, 42, 0.8)',
          backdropFilter: 'blur(15px)',
          borderRadius: 16,
          boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
          padding: '20px',
        },
      },
    },
  },
})

export default darkTheme
