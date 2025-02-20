import { Niconne } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#92A8D1',
        dark: '#6B89B6',
        darkest: '#4B6A8B',
        light: '#B5C7E3',
        lightest: '#DDE4F1',
      },
      contrast: '#282828',
    },
    fontFamily: {
      sans: ['Inter var', 'Inter', 'sans-serif'],
      cursive: ['Niconne', 'Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
