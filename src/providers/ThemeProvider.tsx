import React, { JSX } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'
import { useMediaQuery, CssBaseline } from '@mui/material'
import { useMemo } from 'react'

export const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
