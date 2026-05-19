import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        'accent-amber': '#f59e0b',
        'accent-emerald': '#10b981',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#1f2937',
          secondary: '#374151',
          accent: '#14b8a6',
          neutral: '#1e293b',
          'base-100': '#0f172a',
          'base-200': '#1e293b',
          'base-300': '#334155',
          'base-content': '#e2e8f0',
          info: '#38bdf8',
          success: '#4ade80',
          warning: '#facc15',
          error: '#fb7185',
        },
      },
      {
        light: {
          primary: '#1e293b',
          secondary: '#475569',
          accent: '#0d9488',
          neutral: '#e2e8f0',
          'base-100': '#ffffff',
          'base-200': '#f1f5f9',
          'base-300': '#e2e8f0',
          'base-content': '#1e293b',
          info: '#0ea5e9',
          success: '#22c55e',
          warning: '#eab308',
          error: '#ef4444',
        },
      },
    ],
  },
  plugins: [daisyui],
};
