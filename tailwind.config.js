/** @type {import('tailwindcss').Config} */

const { join } = require('path');
const BASE_DIR = join(__dirname, 'src');
const VUE_FILE = join('**', '*.vue');

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx, vue}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [join(BASE_DIR, VUE_FILE), join(__dirname, '*.html')],
  },
  darkMode: 'class',
  theme: {
    // colors: {},
    borderRadius: {
      none: '0',
      sm: '.45rem',
      default: '.8rem',
      lg: '1.25rem',
      full: '9999px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
