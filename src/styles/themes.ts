import { mainTheme } from './theme.css'
import { dark } from './themes/darkTheme.css'

export interface IThemes {
  [key: string]: string
}

export const themes: IThemes = {
  dark: dark,
  light: mainTheme
} as const
