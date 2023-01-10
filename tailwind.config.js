/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      tanker: "Tanker",
    },
    extend: {
      colors: {
        "discord-blue": "#2e5de5",
        "discord-black": "#24282E",
        "discord-white": "#f6f6f6",
        "discord-btn-hover": "#36393e",
        "discord-btn-hover-2": "#728bee",
      },
      width: {
        container: "1260px",
      },
    },
  },
  plugins: [],
};
