/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // All JS and JSX files in src folder
    "./component/**/*.{js,ts,jsx,tsx}" // Add component folder if it contains JSX files
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'hsl(0deg 0% 9.8%)', // HSL format is fine
        green: '#3EFFB4', // Correct hex format
        darkBlue: '#3023AE', // Correct hex format
        lightBlue: '#53A0FD', // Correct hex format
      },
    },
  },
  plugins: [],
}
