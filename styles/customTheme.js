import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
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
});

export default customTheme;
