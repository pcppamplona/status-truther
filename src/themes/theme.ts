// src/theme.ts

export type Theme = {
    primaryColor: string
    secondaryColor: string
    bgPrimaryColor: string
    bgSecondaryColor: string
    titleColor: string
    paragraphColor: string
  }
  
  export const lightTheme: Theme = {
    primaryColor: '#10B981',
    secondaryColor: '',
    bgPrimaryColor: '#fafafa',
    bgSecondaryColor: '#F9FAFB',
    titleColor: '#111827',
    paragraphColor: '#475467'
  }
  
  export const darkTheme: Theme = {
    primaryColor: '#10B981',
    secondaryColor: '',
    bgPrimaryColor: '#2C2C2C',
    bgSecondaryColor: '#272727',
    titleColor: '#ffffff',
    paragraphColor: "#F9FAFB"
  }
  
  export const themes = {
    light: lightTheme,
    dark: darkTheme,
  } as const
  
  export type ThemeMode = keyof typeof themes
  