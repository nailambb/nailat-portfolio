
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],

  theme: {
    extend: {
      colors: {
        floral: {
          amaranth: "#933B5B",
          pink: "#B5728A",
          blush: "#D9A6B5",
        },

        botanical: {
          dark: "#0A3323",
          sage: "#AABEB2",
          moss: "#839958",
          olive: "#A99D7E",
        },

        paper: {
          cream: "#F7F4D5",
          chalk: "#E9DCC3",
        },
      },

      fontFamily: {
        serif: [
          "Cormorant Garamond",
          "Georgia",
          "Cambria",
          ...defaultTheme.fontFamily.serif,
        ],

        sans: [
          "DM Sans",
          "Inter",
          "system-ui",
          ...defaultTheme.fontFamily.sans,
        ],

        handwritten: [
          "Caveat",
          "cursive",
        ],

        mono: [
          "Courier New",
          "Menlo",
          ...defaultTheme.fontFamily.mono,
        ],
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        sway: "sway 5s ease-in-out infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        sway: {
          "0%, 100%": {
            transform: "rotate(-4deg)",
          },
          "50%": {
            transform: "rotate(4deg)",
          },
        },
      },
    },
  },

  plugins: [],
};