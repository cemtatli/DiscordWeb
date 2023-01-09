/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      tanker: "Tanker",
    },
    extend: {
      colors: {
        "discord-blue": "#2e5de5",
        "discord-black": "#24282E",
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
