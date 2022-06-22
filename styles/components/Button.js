const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'xs',
      px: '20px',
      py: '12px',
    },
    lg: {
      fontSize: 'base',
      px: '20px', // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    white: {
      border: '1px solid',
      borderColor: 'white',
      color: 'blackAlpha.900',
      bg: 'white',
    },
    black: {
      bg: 'blackAlpha.900',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'lg',
    variant: 'black',
  },
}

export default Button
