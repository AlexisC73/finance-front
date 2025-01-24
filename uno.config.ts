import { defineConfig, presetUno } from "unocss";
import { COLORS } from "./src/theme/colors";

const borderSafelist: { [key in COLORS]: string } = {
  BLUE: "border-blue",
  CYAN: "border-cyan",
  GREEN: "border-green",
  NAVY: "border-navy",
  YELLOW: "border-yellow",
  ARMY_GREEN: "border-army-green",
  BROWN: "border-brown",
  GOLD: "border-gold",
  MAGENTA: "border-magenta",
  NAVY_GREY: "border-navy-grey",
  ORANGE: "border-orange",
  PINK: "border-pink",
  PURPLE: "border-purple",
  RED: "border-red",
  TURQUOISE: "border-turquoise",
};

const backgroundSafelist: { [key in COLORS]: string } = {
  BLUE: "bg-blue",
  CYAN: "bg-cyan",
  GREEN: "bg-green",
  NAVY: "bg-navy",
  YELLOW: "bg-yellow",
  ARMY_GREEN: "bg-army-green",
  BROWN: "bg-brown",
  GOLD: "bg-gold",
  MAGENTA: "bg-magenta",
  NAVY_GREY: "bg-navy-grey",
  ORANGE: "bg-orange",
  PINK: "bg-pink",
  PURPLE: "bg-purple",
  RED: "bg-red",
  TURQUOISE: "bg-turquoise",
};

const safelist = [
  ...Object.values(borderSafelist),
  ...Object.values(backgroundSafelist),
];

export default defineConfig({
  presets: [presetUno()],
  safelist,
  theme: {
    colors: {
      beige: {
        100: "#f5f5dc",
        500: "#f8f4f0",
      },
      grey: {
        900: "#201F24",
        500: "#696868",
        300: "#B3B3B3",
        100: "#F2F2F2",
      },
      green: {
        DEFAULT: "#277C78",
      },
      yellow: {
        DEFAULT: "#F2CDAC",
      },
      cyan: {
        DEFAULT: "#82C9D7",
      },
      navy: {
        DEFAULT: "#626070",
        grey: "#97A0AC",
      },
      red: {
        DEFAULT: "#C94736",
      },
      purple: {
        DEFAULT: "#826CB0",
      },
      turquoise: {
        DEFAULT: "#597C7C",
      },
      brown: {
        DEFAULT: "#93674F",
      },
      magenta: {
        DEFAULT: "#934F6F",
      },
      blue: {
        DEFAULT: "#3F82B2",
      },
      "army-green": {
        DEFAULT: "#7F9161",
      },
      pink: {
        DEFAULT: "#AF81BA",
      },
      gold: {
        DEFAULT: "#CAB361",
      },
      orange: {
        DEFAULT: "#BE6C49",
      },
    },
  },
});
