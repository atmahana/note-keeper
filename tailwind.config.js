/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#f59e0b",
          "primary-focus": "#92400e",
          secondary: "#fef3c7",
          "secondary-focus": "#fcd34d",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#f59e0b",
          "primary-focus": "#92400e",
          secondary: "#fef3c7",
          "secondary-focus": "#fcd34d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
