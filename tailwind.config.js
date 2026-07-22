/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-surface': 'rgba(255, 255, 255, 0.1)',
        'glass-highlight': 'rgba(255, 255, 255, 0.5)',
        'dark-glass-border': 'rgba(255, 255, 255, 0.08)',
        'dark-glass-surface': 'rgba(0, 0, 0, 0.4)',
        'accent': 'rgb(var(--accent))',
        'accent-hover': 'rgb(var(--accent-hover))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 80% 0%, hsla(189,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.15) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,0.15) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,0.15) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,0.15) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,23%,0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,26%,0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,27%,0.1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,30%,0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,26%,0.1) 0px, transparent 50%)',
      },
      dropShadow: {
        'spatial': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'spatial-dark': '0 20px 40px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'mesh': 'mesh 20s ease-in-out infinite alternate',
      },
      keyframes: {
        mesh: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(-2%, 2%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        }
      },
    },
  },
  plugins: [],
}
