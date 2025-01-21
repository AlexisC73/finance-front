import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
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
      "navy-grey": {
        DEFAULT: "#97A0AC",
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
