import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Include app folder
    './src/components/**/*.{js,ts,jsx,tsx,mdx}', // Include components folder
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Include pages folder
    './public/**/*.{js,ts,jsx,tsx,mdx}', // Optional: include public folder if needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0070f3',
        secondary: '#ff4081',
      },
    },
  },
  plugins: [],
};

export default config;
