/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn .5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
				},
			},
    },
  },
  plugins: [],
}