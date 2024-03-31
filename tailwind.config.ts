import type { Config } from "tailwindcss";
import { CITY_IMAGE, ENGLAND_IMAGE, USA_IMAGE } from "./app/utils/airBnbConstants";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': 'url("/logo.png")',
        'h-logo': 'url("/logo.jpeg")',
        'hero': 'url("/hero.webp")',
        'city': 'url("/city.png")',
        'airbnb': 'url("/airbnb.jpg")',
        'profile': 'url("/usa.jpeg")',
        'amsterdam': 'url("/amsterdam.png")',
        'madrid': 'url("/madrid.png")',
        'austria': 'url("/austria.png")',
        'berlin': 'url("/berlin.png")',
        'thailand': 'url("/thailand.png")',
        'england': 'url("/england.png")',
        'usa': 'url("/usa.png")',
      },
      colors:{
        "primary" : "#000000",
        "secondary" : "#ffffff"
      },

    
    },
  },
  plugins: [],
};
export default config;
