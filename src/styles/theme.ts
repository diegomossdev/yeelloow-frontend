export default {
  grid: {
    container: '120rem',
    gutter: '2.4rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family: {
      base: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    },
    regular: 400,
    medium: 600,
    bold: 700,
    sizes: {
      xxxsmall: '0.8rem',
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      xxxlarge: '4.0rem',
    },
  },
  colors: {
    primary: '#34ccf5',
    secondary: '#d81d64',
    tertiary: '#edca38',
    admin: {
      colorized: {
        100: 'rgba(255, 158, 107, 1)',
        200: 'rgba(255, 96, 132, 1)',
        300: 'rgba(169, 60, 153, 1)',
      },
      gray: {
        100: 'rgba(240, 240, 245, 1)',
        200: 'rgba(116, 130, 156, 1)',
        300: 'rgba(90, 90, 90, 1)',
        400: 'rgba(56, 56, 56, 1)',
      },
    },
    yeelloow: 'rgba(254, 198, 1, 1)',
    gray: {
      50: '#FAFAFA',
      100: '#F2F2F2',
      200: '#EDEDED',
      300: '#DADADA',
      400: '#999999',
      500: '#777777',
      600: '#747576',
      700: '#555555',
      800: '#444444',
      900: '#222222',
    },
    status: {
      success: {
        default: '#25B000',
        defaultHover: '#1D8A00',
        pastel: '#DAF2D4',
      },
      warning: {
        default: '#EFB520',
        pastel: '#FAECCA',
      },
      error: {
        default: '#ff4d4f',
        pastel: '#FCE2E7',
      },
      disabled: '#E8E8E8',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
} as const;
