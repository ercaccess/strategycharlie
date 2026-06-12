import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: '#E0D6C8',
  			input: '#E0D6C8',
  			ring: '#1F513F',
  			background: '#F8F5EF',
  			foreground: '#1C1B17',
  			primary: {
  				DEFAULT: '#1F513F',
  				foreground: '#F8F5EF'
  			},
  			secondary: {
  				DEFAULT: '#ECE6DA',
  				foreground: '#1C1B17'
  			},
  			destructive: {
  				DEFAULT: '#EF4444',
  				foreground: '#FFFFFF'
  			},
  			muted: {
  				DEFAULT: '#ECE6DA',
  				foreground: '#1C1B17'
  			},
  			accent: {
  				DEFAULT: '#ECE6DA',
  				foreground: '#1C1B17'
  			},
  			popover: {
  				DEFAULT: '#F8F5EF',
  				foreground: '#1C1B17'
  			},
  			card: {
  				DEFAULT: '#F8F5EF',
  				foreground: '#1C1B17'
  			},
  			sidebar: {
  				DEFAULT: '#F8F5EF',
  				foreground: '#1C1B17',
  				primary: '#1F513F',
  				'primary-foreground': '#F8F5EF',
  				accent: '#ECE6DA',
  				'accent-foreground': '#1C1B17',
  				border: '#E0D6C8',
  				ring: '#1F513F'
  			},
  			chart: {
  				'1': '#1F513F',
  				'2': '#143828',
  				'3': '#ECE6DA',
  				'4': '#1C1B17',
  				'5': '#8BA397'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
