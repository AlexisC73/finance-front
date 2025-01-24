export enum COLORS {
  "GREEN" = "GREEN",
  "CYAN" = "CYAN",
  "BLUE" = "BLUE",
  "NAVY" = "NAVY",
  "YELLOW" = "YELLOW",
  "ORANGE" = "ORANGE",
  "GOLD" = "GOLD",
  "PINK" = "PINK",
  "ARMY_GREEN" = "ARMY_GREEN",
  "RED" = "RED",
  "NAVY_GREY" = "NAVY_GREY",
  "MAGENTA" = "MAGENTA",
  "PURPLE" = "PURPLE",
  "TURQUOISE" = "TURQUOISE",
  "BROWN" = "BROWN",
}

export const THEME_COLORS: { [key in COLORS]: string } = {
  CYAN: "#82C9D7",
  GREEN: "#277C78",
  NAVY: "#626070",
  YELLOW: "#F2CDAC",
  BLUE: "#3F82B2",
  ORANGE: "#BE6C49",
  GOLD: "#CAB361",
  PINK: "#AF81BA",
  ARMY_GREEN: "#7F9161",
  RED: "#C94736",
  NAVY_GREY: "#97A0AC",
  MAGENTA: "#934F6F",
  PURPLE: "#826CB0",
  TURQUOISE: "#597C7C",
  BROWN: "#93674F",
};

export const colorClass = (color: COLORS, target: "bg" | "border"): string => {
  const classes: { [key in COLORS]: string } = {
    BLUE: "blue",
    CYAN: "cyan",
    GREEN: "green",
    NAVY: "navy",
    YELLOW: "yellow",
    ORANGE: "orange",
    GOLD: "gold",
    PINK: "pink",
    ARMY_GREEN: "army-green",
    RED: "red",
    NAVY_GREY: "navy-grey",
    MAGENTA: "magenta",
    PURPLE: "purple",
    TURQUOISE: "turquoise",
    BROWN: "brown",
  };

  return `${target}-${classes[color]}`;
};
