import React, { JSX } from 'react'
import { CssBaseline } from '@mui/material'
import { useMediaQuery, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import lightTheme from './lightTheme'
import darkTheme from './darkTheme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(() => (prefersDarkMode ? darkTheme : lightTheme), [prefersDarkMode])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
