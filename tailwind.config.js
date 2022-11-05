/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://wallpapercave.com/wp/wp2284541.jpg')",
        hero2:
          "url('https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
      },
    },
    backgroundPosition: {
      bottom: "center 3%",
    },
  },
  plugins: [],
};
