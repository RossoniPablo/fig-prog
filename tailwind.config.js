/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rockSalt: ["Rock Salt", "cursive"],
        roadRage: ["Road Rage", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        BLACKPRIMARY: '#1B1B1B',
        BLACKSECONDARY: '#242424',
        YELLOW: '#FCC26B',
        WHITE: '#FFFFFF',
        BLACK: '#000000',
        GRAY: '#868686',
        LIGHTGRAY: '#8E8E8E'
      },
      screens: {
        'lg': '1024px',
        'xl': '1280px',
        'sm': '650px',
        '2xl': '1440px',
        'md': '768px'
      }

      // before: {
      //   content: '""',
      //   width: '4px',
      //   height: '26px',
      //   background: 'url("./img/line-item-atived.svg") no-repeat center center',
      //   position: 'absolute',
      //   left: '-10px', // ajuste conforme necessário
      //   top: '50%', // ajuste conforme necessário
      //   transform: 'translateY(-50%)', // centraliza verticalmente
      //   display: 'none', // oculta por padrão
      // },
    },
    plugins: [


    ],
  }

}

