import { style, createTheme } from '@vanilla-extract/css'
import { vars } from '../theme.css'

export const dark = createTheme(vars, {
  body: {
    backgroundColor: 'black'
  },
  color: {
    text: 'white'
  },
  lengths: {
    mediumGap: '30px'
  }
})
