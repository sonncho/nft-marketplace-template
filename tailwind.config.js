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
      sm: '.125rem',
      default: '.8rem',
      lg: '1.25rem',
      full: '9999px',
    },
    extend: {},
  },
  plugins: [],
};

module.exports = config;
