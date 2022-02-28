/* eslint-disable require-jsdoc */
import React from 'react'
import { Page } from 'components'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { gruvbox, catppuccin, tokyonight } from 'style/theme'
import { AboutMe, Projects, Socials, Bonus, Skills, Work } from 'views'
import { SelectChangeEvent } from '@mui/material/Select'

function App() {
  const [theme, setTheme] = React.useState('gruvbox')

  const handleThemeChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as string)
  }

  const getTheme = () => {
    switch (theme) {
      case 'catppuccin':
        return catppuccin
      case 'tokyonight':
        return tokyonight
      default:
        return gruvbox
    }
  }
  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Page themeChanger={handleThemeChange} currentTheme={theme}>
        <AboutMe />
        <Skills />
        <Work />
        <Socials />
        <Bonus />
        <Projects />
      </Page>
    </ThemeProvider>
  )
}

export default App
