import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
      fontSize: {
        '2xs': '0.55rem',
      },
      transitionProperty: {
        'width': 'width',
        'left-top': 'left, top',
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        montserrat: ['var(--font-montserrat)'],
      },
      grayscale: {
        50: '50%',
      },
      scale: {
        '-100': '-1',
      },
      screens: {
        '3xl': { 'raw': '(min-width: 1920px)' },
        '4xl': { 'raw': '(min-width: 2560px)' },
      },
      colors: {
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        'gray-transparent': 'rgba(0,0,0,0.5)',
        fire: 'var(--color-fire)',
        water: 'var(--color-water)',
        dark: 'var(--color-dark)',
        earth: 'var(--color-earth)',
        light: 'var(--color-light)',
        basic: 'var(--color-basic)',
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500',
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('tailwind-scrollbar')({ nocompatible: true }), require("tailwindcss-animation-delay")],
} satisfies Config;