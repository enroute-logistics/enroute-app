import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007AFF', // Vibrant Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B6B', // Neon Coral
    },
    background: {
      default: '#F8F9FA', // Soft Off-White
      paper: 'rgba(255, 255, 255, 0.8)', // Glassmorphic Effect
    },
    text: {
      primary: '#121212',
      secondary: '#5A5A5A',
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
    // BUTTONS
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
            boxShadow: '0px 4px 20px rgba(0, 122, 255, 0.3)',
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
          background: 'rgba(0, 0, 0, 0.05)',
          color: '#121212',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            background: 'rgba(0, 0, 0, 0.1)',
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
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },

    // TOOLTIP
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: 'rgba(0, 0, 0, 0.15)',
          color: '#121212',
          fontSize: '0.9rem',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          padding: '8px 12px',
        },
        arrow: {
          color: 'rgba(0, 0, 0, 0.15)',
        },
      },
    },

    // MODALS
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
          borderRadius: 16,
          padding: '20px',
        },
      },
    },

    // APP BAR (Navbar)
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },

    // MENU (Dropdowns)
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
          borderRadius: 12,
        },
      },
    },

    // CARD COMPONENTS
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(15px)',
          borderRadius: 16,
          boxShadow: '0px 8px 20px rgba(0,0,0,0.1)',
          padding: '20px',
        },
      },
    },

    // TEXTFIELD (Inputs)
    MuiTextField: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: 10,
          '& input': {
            color: '#121212',
          },
          '& label': {
            color: '#5A5A5A',
          },
          '&:hover': {
            background: 'rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },

    // LIST ITEMS
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px',
          '&:hover': {
            background: 'rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
  },
})

export default lightTheme
