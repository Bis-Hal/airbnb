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
        'airbnb': 'url("/airbnb.jpg")',
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
