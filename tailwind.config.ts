import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pan: {
          primary: "#1a6b4a",    // Verde Amazônia
          secondary: "#2d9e6e",  // Verde Claro
          accent: "#3ecf8e",     // Verde Água
          bg: "#f8f4ee",         // Creme (fundo)
          alert: "#8b5e3c",      // Terra (alertas)
          text: "#1c1c1c",       // Texto escuro
          darkBg: "#0f1f17",     // Fundo modo escuro
          darkText: "#e8f5ee",   // Texto modo escuro
        }
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        base: ['18px', '1.5'],
        lg: ['22px', '1.5'],
        xl: ['24px', '1.5'],
        '2xl': ['28px', '1.3'],
      },
      minHeight: {
        'touch': '56px',
        'touch-sm': '48px',
      }
    },
  },
  plugins: [],
};
export default config;
