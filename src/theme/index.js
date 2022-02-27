const breakpoints = {
  lg: '768px',
};

export default {
  color: {
    'blue-900': 'hsl(217, 19%, 35%)',
    'blue-700': 'hsl(214, 17%, 51%)',
    'blue-500': 'hsl(212, 23%, 69%)',
    'blue-300': 'hsl(210, 46%, 95%)',
    'blue-100': 'hsl(210, 46%, 100%)',
  },
  devices: {
    laptop: `@media(min-width: ${breakpoints.lg})`,
  },
  font: {
    size: {
      mobile: {
        normal: '.8125rem',
        big: '1rem',
      },
      laptop: {
        normal: '.8125rem',
        big: '1.25rem',
      },
    },
    weight: {
      regular: 500,
      bold: 700,
    },
  },
  sizes: {
    br: '.5rem',
    brCircle: '50%',
    mobile: '20.4375rem',
    laptop: '45.625rem',
    full: '100%',
  },
};
