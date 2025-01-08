import { extendTheme } from '@chakra-ui/react'
import "@fontsource-variable/inter"; // Defaults to wght axis
import "@fontsource-variable/inter/wght.css"; // Specify axis
import "@fontsource-variable/inter/wght-italic.css"; // Specify axis and style
import '@fontsource/yeseva-one';
import '@fontsource-variable/playfair-display';





const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display Variable', 'serif'`,
    body: `'Playfair Display Variable', 'serif'`,
  },
})

export default theme