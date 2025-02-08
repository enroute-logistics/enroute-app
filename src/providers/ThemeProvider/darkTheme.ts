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
      paper: 'rgba(30, 33, 42, 0.8)', // Glassmorphic Effect
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
    borderRadius: 16,
  },
  components: {
    // BUTTON STYLING
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

    // CHIPS
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '2px 4px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
          },
        },
        label: {
          fontWeight: 600,
        },
      },
    },

    // BADGES
    MuiBadge: {
      styleOverrides: {
        badge: {
          background: 'linear-gradient(135deg, #14F195, #00FFA3)',
          color: '#000',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          padding: '4px 8px',
          borderRadius: '12px',
        },
      },
    },

    // DRAWER (Sidebar)
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(20, 22, 30, 0.7)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },

    // TOOLTIP
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: 'rgba(255, 255, 255, 0.15)',
          color: '#fff',
          fontSize: '0.9rem',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          padding: '8px 12px',
        },
        arrow: {
          color: 'rgba(255, 255, 255, 0.15)',
        },
      },
    },

    // MODALS
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'rgba(30, 33, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.6)',
          borderRadius: 16,
          padding: '20px',
        },
      },
    },

    // APP BAR (Navbar)
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 12, 18, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },

    // MENU (Dropdowns)
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: 'rgba(20, 22, 30, 0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.5)',
          borderRadius: 12,
        },
      },
    },

    // CARD COMPONENTS
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

    // TEXTFIELD (Inputs)
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

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px',
        },
      },
    },
  },
})

export default darkTheme
