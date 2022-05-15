module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['iranyekan'],
      'serif': ['iranyekan'],
      'mono': ['iranyekan'],
      'body': ['"iranyekan"']
    }
  },
  variants: {
    space: ['responsive', 'direction'],
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwindcss-dir')(),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
  daisyui: {
    rtl: true,
    themes: [
      {
        'mytheme': {
          'primary': '#a31515',
          'primary-focus': '#640c0c',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#ff000000',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
