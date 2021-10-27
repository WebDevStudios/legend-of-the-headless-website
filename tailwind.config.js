module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}'
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        gray: {
          950: '#111'
        }
      }
    }
  },
  plugins: [],
  future: {}
}
