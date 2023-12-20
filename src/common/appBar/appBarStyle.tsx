import { createTheme } from '@mui/material/styles';

const appBarStlye = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          margin: 0,
          backgroundColor: 'white',
          borderWidth: 0,
          borderColor: '#E5EAF2',
          borderStyle: 'solid',
          backdropFilter: 'blur(8px)',
          boxShadow: '0px 4px 12px -4px rgba(0, 0, 0, 0.25)',
          borderBottomWidth: 'thin',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        },
        h6: {
            marginRight: 2,
            display: 'flex', // Define 'display' as a string here
          },
          h5: {
            marginRight: 2,
            display: 'flex', // Define 'display' as a string here
            flexGrow: 1,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
            display: 'block', // Define 'display' as a string here
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          my: 2,
          color: 'black',
          display: 'block',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          p: 0,
        },
      },
    },
  },
});

export default appBarStlye;