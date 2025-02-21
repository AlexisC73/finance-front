import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SigninPage from "./pages/auth/signin/signin-page";
import AuthLayout from "./layout/auth/auth-layout";
import SignupPage from "./pages/auth/signup/signup-page";
import SidebarLayout from "./layout/sidebar-layout";
import BudgetsPage from "./pages/Budgets";
import PotsPage from "./pages/Pots";
import RecurringBillsPage from "./pages/recurring-bills/Recurring-bills";
import TransactionsPage from "./pages/Transactions";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/signin",
          Component: () => <SigninPage />,
        },
        {
          path: "/auth/signup",
          Component: () => <SignupPage />,
        },
      ],
    },
    {
      path: "/",
      Component: () => <SidebarLayout />,
      children: [
        { path: "/", Component: () => <HomePage /> },
        { path: "/budgets", Component: () => <BudgetsPage /> },
        { path: "/pots", Component: () => <PotsPage /> },
        { path: "/recurring-bills", Component: () => <RecurringBillsPage /> },
        { path: "/transactions", Component: () => <TransactionsPage /> },
      ],
    },
  ]);
