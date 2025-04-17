import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme, ThemeMode, themes } from '../themes/theme'


type ThemeContextType = {
  theme: Theme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({
  children,
  initialColorMode = 'light',
}: {
  children: React.ReactNode
  initialColorMode?: ThemeMode
}) => {
  const [mode, setMode] = useState<ThemeMode>(initialColorMode)

  useEffect(() => {
    const root = document.documentElement
    const theme = themes[mode]

    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })

    root.classList.toggle('dark', mode === 'dark')
  }, [mode])

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme: themes[mode], mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
