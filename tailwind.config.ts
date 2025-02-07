import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          50: '#F3F2F2',
          100: '#DADADA',
          200: '#B5B4B3',
          300: '#918E8C',
          400: '#6C6966',
          500: '#0A0908', // Correct original shade
          600: '#2F2C2A',
          700: '#2A2725',
          800: '#211E1D',
          900: '#191615',
        },
        deepBlue: {
          50: '#E7ECEE',
          100: '#C3CCD2',
          200: '#9FAAB5',
          300: '#7B8999',
          400: '#57687C',
          500: '#22333B', // Correct original shade
          600: '#2B3A4F',
          700: '#22313F',
          800: '#1A2730',
          900: '#121E21',
        },
        beige: {
          50: '#FDFDFB',
          100: '#F7F6F2',
          200: '#F0ECE7',
          300: '#E9E2DC',
          400: '#E2D8D1',
          500: '#EAE0D5', // Correct original shade
          600: '#C1B7AD',
          700: '#A79F93',
          800: '#8C877A',
          900: '#726F60',
        },
        tan: {
          50: '#F7F3F0',
          100: '#EDE1D8',
          200: '#E3CEC1',
          300: '#D9BCAA',
          400: '#CFAB93',
          500: '#C6AC8F', // Correct original shade
          600: '#AF856B',
          700: '#997158',
          800: '#825D46',
          900: '#6C4935',
        },
        brown: {
          50: '#FAF3E0',   // Very Light Brown
          100: '#E3D0B5',  // Light Brown
          200: '#D1BFA4',  // Soft Brown
          300: '#B89C7A',  // Medium Light Brown
          400: '#A77B59',  // Medium Brown
          500: '#5E503F',  // Correct original shade
          600: '#4E3C2C',  // Dark Brown
          700: '#3E2D1B',  // Darker Brown
          800: '#2E1E0B',  // Very Dark Brown
          900: '#1F0F00',  // Near Black Brown
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
