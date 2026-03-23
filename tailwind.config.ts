// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         charcoal: {
//           DEFAULT: "#0C0C0C",
//           900: "#0C0C0C",
//           800: "#141414",
//           700: "#1C1C1C",
//           600: "#242424",
//           500: "#2E2E2E",
//         },
//         cream: {
//           DEFAULT: "#F4EFE6",
//           50: "#FDFAF5",
//           100: "#F9F4EC",
//           200: "#F4EFE6",
//           300: "#EDE4D4",
//           400: "#E0D5C2",
//         },
//         gold: {
//           DEFAULT: "#C8A96E",
//           light: "#DFC08A",
//           dark: "#A8893E",
//           50: "#FBF6ED",
//           100: "#F5EADA",
//         },
//         slate: {
//           warm: "#8A8580",
//           mid: "#6B6560",
//           light: "#C4BFB8",
//         },
//       },
//       fontFamily: {
//         display: ["var(--font-cormorant)", "Georgia", "serif"],
//         body: ["var(--font-outfit)", "system-ui", "sans-serif"],
//       },
//       fontSize: {
//         "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
//         "display-lg": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
//         "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
//         "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
//       },
//       spacing: {
//         "section": "7rem",
//         "section-sm": "4rem",
//       },
//       animation: {
//         "fade-up": "fadeUp 0.7s ease forwards",
//         "fade-in": "fadeIn 0.6s ease forwards",
//         "line-grow": "lineGrow 0.8s ease forwards",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(28px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         lineGrow: {
//           "0%": { width: "0" },
//           "100%": { width: "100%" },
//         },
//       },
//       backgroundImage: {
//         "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        charcoal: {
          DEFAULT: "#0F1923",
          900: "#0F1923",
          800: "#1A2635",
          700: "#223041",
          600: "#2A3A4D",
        },
        cream: {
          DEFAULT: "#EDE8DF",
          200: "#EDE8DF",
          300: "#DAD4CA",
        },
        gold: {
          DEFAULT: "#B8975A",
          light: "#C5A76F",
          dark: "#9E7F49",
        },
        slate: {
          warm: "#7A8A99",
          mid: "#5F6E7C",
          light: "#AAB6C2",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },

      spacing: {
        section: "7rem",
        "section-sm": "4rem",
      },

      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "line-grow": "lineGrow 0.8s ease forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },

      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;