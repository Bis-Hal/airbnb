import type { Config } from "tailwindcss";

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
        'usa': 'url("/usa.jpeg")',
      },
      backgroundColor:{
        // "blue-green" : "19E4E4",
        "gray" : "333333",
        "secondary-color" : "AD419B",
        "logo" : "FD868A",
        "primary-color" : "000000"
      }
    
    },
  },
  plugins: [],
};
export default config;
