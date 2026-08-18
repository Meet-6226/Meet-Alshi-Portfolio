/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090A0A',
        surface: {
          DEFAULT: '#17181A',
          monitor: '#101112',
          keyboard: '#202124',
          secondary: '#292B2D',
        },
        primary: {
          DEFAULT: '#F2F1EC',
          muted: '#85878A',
        },
        accent: {
          DEFAULT: '#C8F36A',
          hover: '#b5de5a',
        },
        border: 'rgba(242, 241, 236, 0.08)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'surface': '0 4px 24px -4px rgba(0, 0, 0, 0.6)',
        'surface-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.8)',
        'accent-glow': '0 0 20px rgba(200, 243, 106, 0.25)',
      },
    },
  },
  plugins: [],
}
