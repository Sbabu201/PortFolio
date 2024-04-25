module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0%)', easing: 'ease-in-out' },
          '50%': { transform: 'translateX(100%)', easing: 'ease-in-out' },
          '100%': { transform: 'translateX(0%)', easing: 'ease-in-out' },
        },
      },
      animation: {
        scrollRight: 'scrollRight 10s linear infinite ', // Adjust duration for desired speed
      },
    },
  },
  plugins: [],
}