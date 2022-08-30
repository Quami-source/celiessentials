/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pale_pink:"#fcedee",
        pale_blue:"#e6effc",
        primary:"#152910",
        dark:"#242424"
      }
    },
  },
  plugins: [],
}
