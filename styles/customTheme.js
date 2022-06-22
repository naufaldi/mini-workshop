import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Card from './components/Card'

/**
 * Dark Mode
 */
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
/**
 * Custom theme base on style guide
 */
const customTheme = extendTheme({
  config,
  fontSizes: {
    base: '16px',
    sm: '14px',
    xs: '12px',
    md: '18px',
    lg: '20px',
    xl: '24px',
  },
  colors: {
    pinkPong: {
      100: '#FFE1E9',
      200: '#FFA0B7',
      500: '#FF426F',
    },
    pakgreen: {
      100: '#B4EDD4',
      500: '#3BFFAD',
    },
  },
  styles: {
    global: {
      'html, body': {
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
      },
      body: {
        overflow: 'hidden',
      },
    },
  },
  components: {
    Button,
    Card,
  },
})

export default customTheme
