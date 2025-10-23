/** TailwindCSS configuration for MovieAI (Royal Purple theme) */
module.exports = {
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        royal: "#8B5CF6"
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};
