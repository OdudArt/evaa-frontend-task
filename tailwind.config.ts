/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '400px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: ['0.8125rem', '1rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.25rem'],
      lg: ['1.125rem', '1.35rem'],
      xl: ['1.25rem', '1.5rem'],
      '2xl': ['1.5rem', '1.87500rem'],
      '3xl': ['1.75rem', '2.1rem'],
      '4xl': ['2rem', '2.2rem'],
      '5xl': ['2.5rem', '2.625rem'],
      '6xl': ['3rem', '3.25rem']
    },
    fontFamily: {
      sans: [
        '"Gilroy"',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      display: [
        '"Hanson"',
        '"Phonk Sans"',
        '"Dela Gothic One"',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    fontWeight: {
      normal: '500',
      medium: '600',
      bold: '700',
      black: '800'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.25rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '876px'
      }
    },
    extend: {
      spacing: {
        9.5: '2.37500rem'
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        hero: {
          foreground: 'var(--hero-foreground)'
        },
        tabs: {
          DEFAULT: 'var(--tabs)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)'
        },
        link: {
          DEFAULT: 'var(--link)',
          foreground: 'var(--link-foreground)'
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
          shadow: 'var(--card-shadow)'
        },
        progress: {
          DEFAULT: 'var(--progress)',
          warning: 'var(--progress-warning)',
          danger: 'var(--progress-danger)'
        },
        banner: {
          foreground: 'var(--banner-foreground)'
        }
      },
      background: {
        'hero-green': 'var(--hero-green-background)'
      },
      backgroundImage: {
        hero: 'var(--hero-background)',
        'hero-black': 'var(--hero-black-background)',
        master: 'var(--master-background)',
        rainbow: 'var(--rainbow-background)',
        banner: 'var(--banner)'
      },
      boxShadow: {
        rewardCard: '0 -10px 15px rgba(0, 0, 0, 0.25)'
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius)',
        sm: '20px',
        xs: '10px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
