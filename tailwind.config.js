/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/src/assets/banner.jpg)",
        banner2: "url(/src/assets/banner_.jpg)",
        imageService: "url(/src/assets/imageService.jpg)",
        cofeImage: "url(/src/assets/cofeImage.jpg)",
        jantarImage: "url(/src/assets/jantarImage.jpg)",
        burguerImage: "url(/src/assets/burguerImage.jpg)",
        bgSignIn: "url(/src/assets/bgSignIn.jpg)"
      }
    },
  },
  plugins: [],
}
