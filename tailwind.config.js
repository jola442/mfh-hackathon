/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fjalla: ['Fjalla One', 'sans-serif']
      },
      colors: {
        'primary': "rgba(0, 60, 117)",
        'secondary': "#7ab6b5",
        'reddish': "#c6416f",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        neumorphic: '8px 8px 15px rgba(163, 163, 163, 0.7), -8px -8px 15px rgba(255, 255, 255, 0.8)',
        neumorphicHover: '4px 4px 8px rgba(163, 163, 163, 0.7), -4px -4px 8px rgba(255, 255, 255, 0.8)'
      },

      borderRadius: {
        'neumorphic': '12px',
      },
      backgroundImage: {
        'bright-gradient': 'linear-gradient(135deg, #5a8df4, #92e8e4, #ffecd1)'
      },
      screens: {
        "wide": "1440px"
      },
      width: {
        'min-1000': 'min(1000px, 100%)',
      },
    },
  },
  plugins: [],
}