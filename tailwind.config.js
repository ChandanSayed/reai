/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'text-color': '#252f52',
        'bg-color': '#252F524D',
        'border-color': '#E9EAEE',
        'button-color': '#3B66F7',
        'button-disabled': '#9BB2FF'
      },
      maxWidth: {
        580: '580px'
      },
      borderRadius: {
        10: '10px'
      },
      fontSize: {
        15: '15px',
        30: '30px'
      },
      lineHeight: {
        29: '29px',
        39: '39px'
      }
    }
  },
  plugins: []
};
