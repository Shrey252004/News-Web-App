/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}"],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'serif'], // Adding Newsreader font
      },
    },
  },
  plugins: [],
};

