// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/customTheme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
