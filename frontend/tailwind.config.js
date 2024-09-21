/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              customBg: '#0F0F10', // Background color
              customText: '#E7E7E4', // Text color
              courseBg: '#3D3D43', // Course card background color
            },
          },
    },
    plugins: [],
}