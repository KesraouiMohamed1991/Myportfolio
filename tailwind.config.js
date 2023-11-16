module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000',
      'white': '#fff',
      'gray': {
        '100': '#f7fafc',
        '200': '#edf2f7',
        '300': '#e2e8f0',
        '400': '#cbd5e0',
        '500': '#a0aec0',
        '600': '#718096',
        '700': '#4a5568',
        '800': '#2d3748',
        '900': '#1a202c',
      },
      'red': {
        '100': '#fff5f5',
        '200': '#fed7d7',
        '300': '#feb2b2',
        '400': '#fc8181',
        '500': '#f56565',
        '600': '#e53e3e',
        '700': '#c53030',
        '800': '#9b2c2c',
        '900': '#742a2a',
      },
   
      // Add more default Tailwind CSS colors here
      // ...
      'text': '#f4f2f8',
      'background': '#040406',
      'primary': '#bccea1',
      'secondary': '#110c17',
      'accent': '#7f9d53',
      'olive':'#20221E'
    },

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'Poppins': ['Poppins'],
      'body': ['Open Sans'],
      'Bebas': ['Bebas Neue']
    },

    extend: {
  
    },
  },
  plugins: [],
};

