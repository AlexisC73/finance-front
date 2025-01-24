export enum COLORS {
  "GREEN" = "GREEN",
  "CYAN" = "CYAN",
  "BLUE" = "BLUE",
  "NAVY" = "NAVY",
  "YELLOW" = "YELLOW",
}

export const THEME_COLORS: { [key in COLORS]: string } = {
  CYAN: "#82C9D7",
  GREEN: "#277C78",
  NAVY: "#626070",
  YELLOW: "#F2CDAC",
  BLUE: "#3F82B2",
};

export const colorClass = (color: COLORS, target: "bg" | "border"): string => {
  const classes: { [key in COLORS]: string } = {
    BLUE: "blue",
    CYAN: "cyan",
    GREEN: "green",
    NAVY: "navy",
    YELLOW: "yellow",
  };

  return `${target}-${classes[color]}`;
};
