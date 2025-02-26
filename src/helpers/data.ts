import { COLORS } from "@/theme/colors";

export enum CATEGORIES {
  "ENTERNTAINMENT" = "Enterntainment",
  "BILLS" = "Bills",
  "GROCERIES" = "Groceries",
  "DINING_OUT" = "Dining Out",
  "TRANSPORTATION" = "Transportation",
  "PERSONAL_CARE" = "Personal Care",
  "EDUCTION" = "Education",
}

export const CATEGORIES_LIST = [
  CATEGORIES.ENTERNTAINMENT,
  CATEGORIES.BILLS,
  CATEGORIES.GROCERIES,
  CATEGORIES.DINING_OUT,
  CATEGORIES.TRANSPORTATION,
  CATEGORIES.PERSONAL_CARE,
  CATEGORIES.EDUCTION,
];

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

export const BUDGETS_TRANSACTIONS: {
  name: string;
  maxSpent: string;
  spent: string;
  color: COLORS;
  transactions: {
    id: string;
    to: string;
    amount: string;
    date: string;
    imageUrl: string;
  }[];
}[] = [
  {
    name: "Enterntainment",
    maxSpent: "50",
    color: COLORS.GREEN,
    spent: "15",
    transactions: [
      {
        id: "1",
        to: "James Thompson",
        amount: "5",
        date: "11 Aug 2024",
        imageUrl: "https://placehold.co/500",
      },
      {
        id: "2",
        to: "Pixel Playground",
        amount: "5",
        date: "11 Aug 2024",
        imageUrl: "https://placehold.co/500",
      },
      {
        id: "3",
        to: "Rina Sato",
        amount: "5",
        date: "13 Jul 2024",
        imageUrl: "https://placehold.co/500",
      },
    ],
  },
  {
    color: COLORS.TURQUOISE,
    name: "Bills",
    maxSpent: "750",
    spent: "150",
    transactions: [
      {
        id: "1",
        to: "James Thompson",
        amount: "50",
        date: "11 Aug 2024",
        imageUrl: "https://placehold.co/500",
      },
      {
        id: "2",
        to: "Pixel Playground",
        amount: "100",
        date: "11 Aug 2024",
        imageUrl: "https://placehold.co/500",
      },
    ],
  },
];

export const POTS: {
  id: number;
  name: string;
  color: COLORS;
  saved: string;
  goal: string;
}[] = [
  {
    id: 1,
    name: "Savings",
    color: COLORS.GREEN,
    saved: "159",
    goal: "2000",
  },
  {
    id: 2,
    name: "Concert Tickets",
    color: COLORS.NAVY,
    saved: "110",
    goal: "150",
  },
  {
    id: 3,
    name: "Gift",
    color: COLORS.CYAN,
    saved: "40",
    goal: "60",
  },
  {
    id: 4,
    name: "New Laptop",
    color: COLORS.YELLOW,
    saved: "10",
    goal: "1000",
  },
  {
    id: 5,
    name: "Holiday",
    color: COLORS.PURPLE,
    saved: "531",
    goal: "1440",
  },
];

export const TRANSACTIONS: {
  id: number;
  date: string;
  category: string;
  sender: string;
  imageUrl: string;
  amount: string;
  gain: boolean;
}[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    date: "29 Aug 2024",
    category: "Personal Care",
    sender: "Bravo Zen Spa",
    imageUrl: "https://placehold.co/500",
    amount: (Math.random() * 100).toFixed(2),
    gain: Math.random() > 0.5,
  })),
];

export const SORT_OPTIONS = [
  "Latest",
  "Oldest",
  "A to Z",
  "Z to A",
  "Highest",
  "Lowest",
];

export const RECURRING_TRANSACTIONS: {
  id: string;
  to: string;
  amount: string;
  date: string;
  imageUrl: string;
  error: boolean;
}[] = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  to: "James Thompson",
  amount: "$" + (Math.random() * 100).toFixed(2),
  date: "Monthly-6th",
  imageUrl: "https://placehold.co/500",
  error: Math.random() > 0.5,
}));

export const COLORS_TAG: { color: COLORS; available: boolean }[] = [
  { color: COLORS.GREEN, available: false },
  { color: COLORS.YELLOW, available: false },
  { color: COLORS.CYAN, available: false },
  { color: COLORS.NAVY, available: false },
  { color: COLORS.RED, available: true },
  { color: COLORS.PURPLE, available: true },
  { color: COLORS.TURQUOISE, available: true },
];
