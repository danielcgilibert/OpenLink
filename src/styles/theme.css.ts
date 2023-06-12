import { style, createTheme } from '@vanilla-extract/css'

export const [mainTheme, vars] = createTheme({
  body: {
    backgroundColor: 'white'
  },
  color: {
    text: 'var(--primary)'
  },
  lengths: {
    mediumGap: '30px'
  }
})

// export const neon = createTheme(vars, {
//   body: {
//     backgroundColor: 'black'
//   },
//   color: {
//     text: 'red'
//   },
//   lengths: {
//     mediumGap: '30px'
//   }
// })

// Consuming the theme
export const titleStyle = style({
  color: vars.color.text
})

export const mainStyle = style({
  background: vars.body.backgroundColor
})
