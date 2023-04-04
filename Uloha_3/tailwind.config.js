module.exports = {
  purge: false,
  theme: {
    screens: {
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xs: { max: '500px' },
    },
    colors: {
      transparent: 'transparent',
      dim: 'rgb(253,253,253)',
      error: '#ff3180',
      black: {
        5: 'rgba(0, 0, 0, .08)',
        10: 'rgba(0, 0, 0, .12)',
        20: 'rgba(0, 0, 0, .24)',
        30: 'rgba(0,0,0,.36)',
        50: 'rgba(0,0,0,.54)',
        70: 'rgba(0,0,0,.75)',
        80: 'rgba(0,0,0,.85)',
        default: '#000',
      },
      white: {
        40: 'rgba(255,255,255,.4)',
        50: 'rgba(255,255,255,.55)',
        80: 'rgba(255,255,255,.85)',
        default: '#fff',
      },
      theme: {
        6: 'rgba(102,131,222,.06)',
        7: 'rgba(102,131,222,.07)',
        8: 'rgba(46,73,136,.08)',
        10: 'rgba(102,131,222,.12)',
        default: '#667fdd',
        accent: '#476ad8',
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.black.5'),
    }),
    fontSize: {
      1: '0.625rem',
      2: '0.687rem',
      3: '0.75rem',
      4: '0.812rem',
      5: '0.875rem',
      6: '1rem',
      7: '1.125rem',
      8: '1.25rem',
      9: '1.375rem',
      10: '1.5rem',
      11: '1.625rem',
      12: '1.75rem',
      24: '3.5rem',
    },
    maxWidth: {
      none: 'none',
      full: '100%',
      xxl: '1920px',
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xs: '320px',
      xxs: '230px',
    },
    minWidth: (theme) => ({
      ...theme('maxWidth'),
    }),
    minHeight: (theme) => ({
      0: '0',
      full: '100%',
      screen: '100vh',
      ...theme('spacing'),
    }),
    spacing: {
      px: '1px',
      '2px': '2px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      96: '24rem',
      128: '32rem',
      160: '40rem',
    },
    scale: {
      0: '0',
      100: '1',
      105: '1.05',
      110: '1.1',
      120: '1.2',
      125: '1.25',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      width: 'width',
      grow: 'flex-grow',
    },
  },
  variants: {
    width: ['responsive', 'group-hover'],
    display: ['responsive', 'group-hover'],
    textColor: ['hover', 'focus', 'group-hover'],
  },
};
