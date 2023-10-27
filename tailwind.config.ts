import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: '#E2F0F9',
        secondary: '#B0DDE4',
        tertiary: '#286FB4',
        quaternary: '#FFFFFF',
        quinary: '#DF4C73',
      },
    },
  },
}
export default config
