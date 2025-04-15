module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'capsy-blue': '#A3D5FF',
        'capsy-pink': '#FDE2E4',
        'capsy-lav': '#DCCFFB',
        'capsy-gray': '#DDE6ED',
      },
      fontFamily: {
        poetic: ['"Pacifico"', 'cursive'],
        body: ['"Lora"', 'serif']
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.05)'
      },
    },
  },
  plugins: [],
}
