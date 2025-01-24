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
