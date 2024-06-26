import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      gray100: string
      gray200: string
      gray400: string
      gray500: string
      gray600: string
      gray700: string
      gray800: string
      gray900: string
      ignite300: string
      ignite500: string
      ignite700: string
      ignite900: string
    }
    fontSizes: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
      '8xl': string
      '9xl': string
    }
    fontWeights: {
      regular: string
      medium: string
      bold: string
    }
    fonts: {
      default: string
      code: string
    }
    lineHeights: {
      shorter: string
      short: string
      base: string
      tall: string
    }
    radii: {
      px: string
      xs: string
      sm: string
      md: string
      lg: string
      full: string
    }
    space: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      10: string
      12: string
      16: string
      20: string
      40: string
      64: string
      80: string
    }
  }
}
