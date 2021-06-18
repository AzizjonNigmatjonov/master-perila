module.exports = {
  mode:'jit',
  purge: [
    'index.html',
    'about.html',
    'projects.html',
    'accessories.html',
    'products.html',
    'contact.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs+sm': {'min': '320px', 'max': '767px'},
      'md+lg': {'min': '768px', 'max': '1200px'},
      'xs+lg': {'min': '320px', 'max': '1200px'},
      'xs': {'min': '320px', 'max': '467px'},
      'sm': {'min': '468px', 'max': '767px'},
      'md': {'min': '768px', 'max': '992px'},
      'lg': {'min': '993px', 'max': '1200px'},
      'xl': {'min': '1201px', 'max': '1800px'},
      '2xl': {'min': '1801px'},
      // 'xl': {'min': '1201px', 'max': '1535px'},
      // '2xl': {'min': '1536px'},
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'xs': '1rem',
        'sm': '1rem',
        'md': '4rem',
        'lg': '4rem',
        'xl': '0rem',
        '2xl': '12rem',
      },
    },
    extend: {
      colors: {
        'primary': '#e01d21',
      },
      backgroundImage: theme => ({
        'header': "url('images/header.jpg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
 
  plugins: [],
}
