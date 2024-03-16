/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        balloons: `url(/src/components/images/high quality/bal.webp)`,
        aniSky: `url(/src/components/images/high quality/anisky.jpg)`,
        headerimg: `url(/src/components/images/high quality/headerimg.jpg)`,
        tower: `url(/src/components/images/high quality/thatimg.webp)`,
        snow: `url(/src/components/images/Ani-icons/snow.svg)`,
        brokenclouds: `url(/src/components/images/Ani-icons/brokenclouds.svg)`,
        clearsky: `url(/src/components/images/Ani-icons/clearsky.svg)`,
        fewclouds: `url(/src/components/images/Ani-icons/fewclouds.svg)`,
        mist: `url(/src/components/images/Ani-icons/mist.svg)`,
        rain: `url(/src/components/images/Ani-icons/rain.svg)`,
        scatteredclouds: `url(/src/components/images/Ani-icons/scatteredclouds.svg)`,
        showerrain: `url(/src/components/images/Ani-icons/showerrain.svg)`,
        thunderstorm: `url(/src/components/images/Ani-icons/thunderstorm.svg)`,
      },
    },
  },
  plugins: [],
};
