import { assertNever } from "@/helpers/exhaustive-guard";

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

export const backgroundColors = (color: COLORS) => {
  switch (color) {
    case COLORS.GREEN:
      return "bg-green";
    case COLORS.BLUE:
      return "bg-blue";
    case COLORS.CYAN:
      return "bg-cyan";
    case COLORS.NAVY:
      return "bg-navy";
    case COLORS.YELLOW:
      return "bg-yellow";
    default:
      assertNever(color);
  }
};

export const borderColor = (color: COLORS) => {
  switch (color) {
    case COLORS.GREEN:
      return "border-green";
    case COLORS.BLUE:
      return "border-blue";
    case COLORS.CYAN:
      return "border-cyan";
    case COLORS.NAVY:
      return "border-navy";
    case COLORS.YELLOW:
      return "border-yellow";
    default:
      assertNever(color);
  }
};
