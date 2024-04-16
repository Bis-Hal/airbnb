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
        'city': 'url("/images/city.png")',
        'half': 'linear-gradient(to right, black 50%, white 50%)',
      },
      colors:{
        "primary" : "#000000",
        "secondary" : "#ffffff",
      },

    
    },
  },
  plugins: [],
};
export default config;
