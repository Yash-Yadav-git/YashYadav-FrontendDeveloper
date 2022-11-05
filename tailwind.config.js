/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://wallpapercave.com/wp/wp2284541.jpg')",
        hero2:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-fantasy-starry-banner-skynightilluminatebanner-background-image_57935.jpg')",
      },
    },
    backgroundPosition: {
      bottom: "center 3%",
    },
  },
  plugins: [],
};
