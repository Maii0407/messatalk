import { useState, createContext } from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        background: 'none',
        backgroundColor: 'transparent',
        color: 'gray.500',
        border: '2px solid',
        borderColor: 'gray.500'
      }
    }
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.800',
        color: 'gray.500'
      },
    }
  }
})

export const GlobalContext = createContext( null );

export default function App({ Component, pageProps }) {
  const [ userValue, setUserValue ] = useState( null );

  return (
    <GlobalContext.Provider value={{ userValue, setUserValue }} >
      <ChakraProvider theme={ theme }>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalContext.Provider>
  ) 
}
