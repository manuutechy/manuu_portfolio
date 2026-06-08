import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'accent': 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'border': 'var(--color-border)',
        'nav-bg': 'var(--color-nav-bg)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        sora: ['var(--font-sora)'],
        dm: ['var(--font-dm-sans)'],
      },
      fontSize: {
        'h1': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h1-mobile': ['40px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h2': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['32px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h3': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-large': ['20px', { lineHeight: '1.7' }],
        'body-large-mobile': ['18px', { lineHeight: '1.7' }],
        'body-default': ['17px', { lineHeight: '1.75' }],
        'body-default-mobile': ['16px', { lineHeight: '1.75' }],
        'small-label': ['13px', { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'mono-size': ['14px', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        'pill': '100px',
        'card': '12px',
        'input': '8px',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'nav': 'var(--shadow-nav)',
      },
      spacing: {
        'section-y': '140px',
        'section-y-mobile': '80px',
      },
    },
  },
  plugins: [],
} satisfies Config
