import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,astro}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // daisyui設定
  daisyui: {
    themes: ['light'],
    darkTheme: 'light',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};
