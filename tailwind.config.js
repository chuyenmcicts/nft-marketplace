module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#1d3754',
        'secondary': '#b74e00',
        'dark-color': '#202128',
        'dark-color-1': '#2a2b33',
        'gray-color-1': '#E3E1E3',
        'gray-color-2': '#888888',
        'gray-color-3': '#4F4F4F',
        'active': '#228bf2',
        'accept': '#00e541',
        'reject': '#e20036',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
      },
    },
    screens: {
      lg: { max: '1440px' },
      md: { max: '990px' },
      sm: { max: '600px' },
      xs: { max: '400px' },
      minmd: '1800px',
      minlg: '2000px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
