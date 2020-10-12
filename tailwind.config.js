module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    fontFamily: {
      inter: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: {
        300: '#e5e5e5',
        500: '#b3b3b3',
        800: '#333333',
      },
      blue: { 500: '#18a0fb', 800: '#1370af' },
    },
    extend: {
      height: {
        7: '1.75rem',
      },
      fontSize: {
        xs: '.6875rem',
      },
      borderRadius: {
        default: '.375rem',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    borderWidth: ['responsive', 'focus-within'],
  },
  plugins: [],
};
