/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      blue: '#1fb6ff',
      white: '#FFFFFF',
      orange: '#ff7849',
      green: '#6AAA64',
      yellow: '#CEB02C',
      gray: '#939B9F',
      'gray-dark': '#818181',
      'gray-light': '#D3D6DA'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        miniheaderLigh: '#F3F3F3',
        miniheaderDark: ' rgba(218, 220, 224, 0.03)',
        'modal-light-opacity': 'rgba(243, 243, 243, 0.89)',
        'modal-dark-opacity': 'rgba(38, 43, 60, 0.89)',
        'header-dark': 'rgba(218, 220, 224, 0.03)',
        darKBlue:"#202537",
        lightWhite:"#DADCE0"
        
      }
    }
  },
  plugins: []
}
