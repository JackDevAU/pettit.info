import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class'],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
		"./tina/fields/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '90rem', // Add your desired width here (e.g., 1440px)
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'none',
							fontWeight: '500',
						},
						h1: {
							color: 'inherit',
						},
						h2: {
							color: 'inherit',
						},
						h3: {
							color: 'inherit',
						},
						h4: {
							color: 'inherit',
						},
						code: {
							color: 'inherit',
						},
						pre: {
							color: 'inherit',
							backgroundColor: 'rgb(243 244 246)',
						},
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;

// const config = {
// 	darkMode: ["class"],
// 	content: [
// 		"./pages/**/*.{ts,tsx}",
// 		"./components/**/*.{ts,tsx}",
// 		"./app/**/*.{ts,tsx}",
// 		"./src/**/*.{ts,tsx}",
// 		"./lib/**/*.{ts,tsx}",
// 		"./tina/fields/**/*.{ts,tsx}",
// 	],
// 	prefix: "",
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: "2rem",
// 			screens: {
// 				"2xl": "1400px",
// 			},
// 		},
// 		extend: {
// 			colors: {
// 				bg: "var(--bg)",
// 				main: "var(--main)",
// 				mainAccent: "var(--main-accent)",
// 				border: "hsl(var(--border))",
// 				input: "hsl(var(--input))",
// 				ring: "hsl(var(--ring))",
// 				background: "hsl(var(--background))",
// 				foreground: "hsl(var(--foreground))",
// 				primary: {
// 					DEFAULT: "hsl(var(--primary))",
// 					foreground: "hsl(var(--primary-foreground))",
// 				},
// 				secondary: {
// 					DEFAULT: "hsl(var(--secondary))",
// 					foreground: "hsl(var(--secondary-foreground))",
// 				},
// 				destructive: {
// 					DEFAULT: "hsl(var(--destructive))",
// 					foreground: "hsl(var(--destructive-foreground))",
// 				},
// 				muted: {
// 					DEFAULT: "hsl(var(--muted))",
// 					foreground: "hsl(var(--muted-foreground))",
// 				},
// 				accent: {
// 					DEFAULT: "hsl(var(--accent))",
// 					foreground: "hsl(var(--accent-foreground))",
// 				},
// 				popover: {
// 					DEFAULT: "hsl(var(--popover))",
// 					foreground: "hsl(var(--popover-foreground))",
// 				},
// 				card: {
// 					DEFAULT: "hsl(var(--card))",
// 					foreground: "hsl(var(--card-foreground))",
// 				},
// 			},
// 			borderRadius: {
// 				base: "var(--border-radius)",
// 				lg: "var(--radius)",
// 				md: "calc(var(--radius) - 2px)",
// 				sm: "calc(var(--radius) - 4px)",
// 			},
// 			boxShadow: {
// 				base: "4px 4px 0px 0px rgba(0,0,0,1)",
// 			},
// 			translate: {
// 				boxShadowX: "4px",
// 				boxShadowY: "4px",
// 			},
// 			fontWeight: {
// 				base: "500",
// 				heading: "700",
// 			},
// 			keyframes: {
// 				"accordion-down": {
// 					from: { height: "0" },
// 					to: { height: "var(--radix-accordion-content-height)" },
// 				},
// 				"accordion-up": {
// 					from: { height: "var(--radix-accordion-content-height)" },
// 					to: { height: "0" },
// 				},
// 			},
// 			animation: {
// 				"accordion-down": "accordion-down 0.2s ease-out",
// 				"accordion-up": "accordion-up 0.2s ease-out",
// 			},
// 		},
// 	},
// 	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
// } satisfies Config;

// export default config;
