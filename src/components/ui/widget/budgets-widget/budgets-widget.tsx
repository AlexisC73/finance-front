import { useLayoutEffect, useRef } from "react";
import { WidgetHeader } from "../widget-header/widget-header";
import BudgetsItem from "./budgets-item/budgets-item";

const BUDGETS = [
  {
    name: "Entertainment",
    goal: "50",
    current: "10",
    color: "#277C78",
    colorName: "green",
  },
  {
    name: "Bills",
    goal: "750",
    current: "208",
    color: "#3F82B2",
    colorName: "blue",
  },
  {
    name: "Dining Out",
    goal: "75",
    current: "70",
    color: "#F2CDAC",
    colorName: "yellow",
  },
  {
    name: "Personal Care",
    goal: "100",
    current: "50",
    color: "#626070",
    colorName: "grey",
  },
];

export default function BudgetsWidget() {
  const circleRef = useRef<HTMLDivElement>(null);

  const getGradient = (
    budgets: { name: string; goal: string; color: string }[],
  ) => {
    const totalAmount = budgets.reduce(
      (acc, curr) => acc + parseInt(curr.goal),
      0,
    );
    const colorPercentages = budgets.map((budget) => ({
      color: budget.color,
      percentage: Math.round((parseInt(budget.goal) / totalAmount) * 100),
    }));

    let currentPercentage = 0;

    const gradientsCSS = colorPercentages.map((colorPercentage) => {
      const cssProperty = `${colorPercentage.color} ${currentPercentage}% ${currentPercentage + colorPercentage.percentage}%`;
      currentPercentage += colorPercentage.percentage;
      return cssProperty;
    });

    if (!circleRef.current) {
      return;
    }

    circleRef.current.style.background = `conic-gradient(${gradientsCSS.join(", ")})`;
  };

  useLayoutEffect(() => {
    getGradient(BUDGETS);
  });

  return (
    <div className="bg-white px-5 py-6 rounded-3 flex flex-col gap-y-5 md:p-8">
      <WidgetHeader title="Budgets" href="/budgets" linkName="See Details" />
      <div className="flex flex-col flex-1 gap-y-4 md:flex-row md:justify-center items-center md:gap-x-4">
        <div
          ref={circleRef}
          className="flex items-center justify-center w-full max-w-60 aspect-square rounded-full mx-auto xl:mx-0 relative"
        >
          <div className="w-68% h-68% bg-white rounded-full opacity-25 absolute"></div>
          <div className="w-60% h-60% bg-white rounded-full flex justify-center items-center flex-col gap-y-2">
            <p className="font-bold line-height-120% text-8">
              ${BUDGETS.reduce((curr, acc) => curr + Number(acc.current), 0)}
            </p>
            <p className="text-3 line-height-150% text-grey-500">
              of ${BUDGETS.reduce((curr, acc) => curr + Number(acc.goal), 0)}{" "}
              limit
            </p>
          </div>
        </div>
        <div className="grid cols-2 gap-4 md:flex md:flex-col">
          {BUDGETS.map((budget) => (
            <BudgetsItem
              amount={budget.goal}
              title={budget.name}
              color={budget.colorName}
              key={budget.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
