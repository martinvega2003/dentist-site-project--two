/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004AAD", // Dental clinic blue
        accent: "#00C49A", // Positive green
        textHighlight: "#F4F4F4", // Inspired by the hero text color in the image
        neutralLight: "#F5F5F5", // Light background
        neutralDark: "#1A202C", // Dark text and overlays
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // For headlines
        body: ["Open Sans", "sans-serif"], // For body text
      },
    },
  },
  plugins: [],
}

