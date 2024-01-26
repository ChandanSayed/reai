/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'onboard-bg': 'linear-gradient(180deg, #F2F5FC 0%, #ffffff 100%)'
      },
      colors: {
        'text-color': '#252f52',
        'bg-color': '#252F524D',
        'border-color': '#E9EAEE',
        'button-color': '#3B66F7',
        'button-disabled': '#9BB2FF',
        'color-yellow': '#FFF290',
        'sidebar-bg': '#EAEDF5',
        'off-color': '#9297A8',
        'bg-off-lime': '#CCFCB3',
        'off-blue': '#3B66F7'
      },
      maxWidth: {
        90: '90px',
        580: '580px',
        512: '512px',
        720: '720px',
        1024: '1024px'
      },
      width: {
        304: '304px',
        90: '90px'
      },
      borderRadius: {
        10: '10px'
      },
      fontSize: {
        15: '15px'
      },
      lineHeight: {
        29: '29px',
        39: '39px'
      },
      height: {
        18: '18px',
        712: '712px',
        90: '90px'
      },
      minHeight: {
        formHeight: '653.3px',
        712: '712px'
      },
      boxShadow: {
        'onboard-shadow': '0px 3px 20px #252F521A'
      }
    }
  },
  plugins: []
};
