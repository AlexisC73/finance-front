import { COLORS } from "@/theme/colors";

export const BUDGETS: {
  name: string;
  goal: string;
  current: string;
  color: COLORS;
}[] = [
  {
    name: "Entertainment",
    goal: "50",
    current: "15",
    color: COLORS.GREEN,
  },
  {
    name: "Bills",
    goal: "750",
    current: "150",
    color: COLORS.CYAN,
  },
  {
    name: "Dining Out",
    goal: "75",
    current: "133",
    color: COLORS.YELLOW,
  },
  {
    name: "Personal Care",
    goal: "100",
    current: "40",
    color: COLORS.NAVY,
  },
];
