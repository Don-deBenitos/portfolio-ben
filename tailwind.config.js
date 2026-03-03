/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#6b8e23',
          hover: '#556b2f',
          light: '#b8c4a8',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          glass: 'var(--bg-glass)',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      animation: {
        'photo-glow': 'photo-glow 3s ease-in-out infinite',
        'cta-pulse': 'cta-pulse 2.5s ease-in-out infinite',
        'skill-in': 'skill-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'progress-fill': 'progress-fill 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'photo-glow': {
          '0%, 100%': { boxShadow: 'var(--shadow), 0 0 0 8px rgba(107, 142, 35, 0.15)' },
          '50%': { boxShadow: 'var(--shadow), 0 0 24px 10px rgba(107, 142, 35, 0.25)' },
        },
        'cta-pulse': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(107, 142, 35, 0.35)' },
          '50%': { boxShadow: '0 4px 28px rgba(107, 142, 35, 0.5)' },
        },
        'skill-in': {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-percent, 0%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(107, 142, 35, 0.15)' },
          '50%': { boxShadow: '0 0 32px rgba(107, 142, 35, 0.25)' },
        },
      },
    },
  },
  plugins: [],
};
