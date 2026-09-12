/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        proxiva: {
          navy: '#0f172a',    // deep navy
          blue: '#2563eb',    // electric blue
          indigo: '#4f46e5',  // indigo
          light: '#f1f5f9',   // light blue/grey
          success: '#16a34a', // green success
          pending: '#f59e0b', // amber pending
          error: '#dc2626',   // red error
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
