/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
          fontFamily: {
            'sans': ['Londrina Solid', 'Staatliches', 'Fira Sans', 'sans-serif'],
          },
          colors: {
              surface: {
                primary: {
                    default: '#F2ECE0',
                    hover: '#F5F0E6',
                    pressed: '#C2BDB3',
                },

          highlight: {
            default: "#E2E6B0",
            hover: "#D9DE98",
            pressed: "#C8CF6A",
          },

          overlay: "#BE5206",
          menukort: "#D9DE98",
          formular: "#FAF7F3",
          formular_felter: "#",
          formular_knap: "#FCE7CF",
          footer: "#C3E6FF",
        },

        tekst: {
          primary: {
            default: "#364908",
            hover: "#4D6C40",
            pressed: "#2B3A06",
            darker: "#2B3A06",
          },

          secondary: {
            default: "#F7F4EC",
            darker: "#F5F0E6",
          },

          tertiary: {
            default: "#684010",
            hover: "#53330D",
            pressed: "#3E260A",
            darker: "#53330D",
          },

          accent: {
            default: "#EE6607",
            disabled: "#F8C29C",
          },
        },

        link: {
          default: "#FAF7F3",
          hover: "#FCFBF9",
          pressed: "#F7F4EC",
          disabled: "#F2ECE0",
        },

        card: {
          default: "#FCFBF9",
          hover: "#E2E6B0",
          pressed: "#F7F4EC",
        },

        knap: {
          primary: {
            default: "#EE6607",
            hover: "#F18539",
            pressed: "#BE5206",
            disabled: "#F5A36A",
          },

          secondary: {
            default: "#F0890F",
            hover: "#F3A13F",
            pressed: "#C06E0C",
            disabled: "#F6B86F",
          },

          cta: {
            default: "#EE6607",
            hover: "#F18539",
            pressed: "#BE5206",
            disabled: "#F5A36A",
          },
        },

        ikon: {
          primary: {
            default: "#364908",
            hover: "#4D6C40",
            pressed: "#2B3A06",
          },

          some: {
            default: "#684010",
            hover: "#866640",
            pressed: "#53330D",
          },
        },

        badge: "#E2E6B0",
      },
      spacing: {
        mobile: {
          h1_bottom: {
            index: "1.75rem",
            other: "3rem",
          },

          h2_bottom: "1.25rem",
          h3_bottom: "1rem",
          h4_bottom: "0.875rem",
          gap: "2.25rem",
          card_bottom: "3rem",
          button_top: "3rem",
          button_gap: "1rem",
          furniture_margin: "6rem",
        },

        desktop: {
          h1_bottom: {
            index: "2remrem",
            other: "5rem",
          },

          h2_bottom: "1.5rem",
          h3_bottom: "1.25rem",
          h4_bottom: "1rem",
          gap: "7rem",
          card_bottom: "5rem",
          button_top: "4rem",
          button_gap: "2.25rem",
          furniture_margin: "11rem",
        },
      },
    },
  },
};