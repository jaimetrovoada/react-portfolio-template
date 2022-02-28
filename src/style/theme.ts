import { createTheme } from '@mui/material'

export const gruvbox = createTheme({
  palette: {
    background: {
      paper: '#282828',
      default: '#504945',
    },
    text: {
      primary: '#ebdbb2',
      secondary: '#a89984',
    },
    primary: {
      main: '#fe8019',
    },
    secondary: {
      main: '#83a598',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.2em',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#ebdbb2',
          borderRadius: '16px',
        },
      },
    },
  },
})

export const catppuccin = createTheme({
  palette: {
    background: {
      paper: '#1E1E2E',
      default: '#302D41',
    },
    text: {
      primary: '#F8BD96',
      secondary: '#FAE3B0',
    },
    primary: {
      main: '#F28FAD',
    },
    secondary: {
      main: '#ABE9B3',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*::-webkit-scrollbar': {
          width: '0.2em',
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#F8BD96',
          borderRadius: '16px',
        },
      },
    },
  },
})

export const tokyonight = createTheme({
  palette: {
    background: {
      paper: '#F2F6FE',
    },
    text: {
      primary: '#0E1D38',
      secondary: '#2772FA',
    },
    primary: {
      main: '#2772FA',
    },
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
  },
})
