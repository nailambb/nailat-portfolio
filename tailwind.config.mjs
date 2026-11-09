import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Fallback chains: If a custom font fails to load, use standard fallbacks
        serif: ['Georgia', 'Cambria', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', 'system-ui', ...defaultTheme.fontFamily.sans],
        mono: ['Courier New', 'Menlo', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
