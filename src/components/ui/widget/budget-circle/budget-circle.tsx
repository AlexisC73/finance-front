import { useLayoutEffect, useRef } from "react";

export default function BudgetCircle({
  budgets,
}: {
  budgets: {
    name: string;
    goal: string;
    current: string;
    color: string;
    colorName: string;
  }[];
}) {
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
    getGradient(budgets);
  });
  return (
    <div
      ref={circleRef}
      className="flex items-center justify-center w-full max-w-60 aspect-square rounded-full mx-auto xl:mx-0 relative"
    >
      <div className="w-68% h-68% bg-white rounded-full opacity-25 absolute"></div>
      <div className="w-60% h-60% bg-white rounded-full flex justify-center items-center flex-col gap-y-2">
        <p className="font-bold line-height-120% text-8">
          ${budgets.reduce((curr, acc) => curr + Number(acc.current), 0)}
        </p>
        <p className="text-3 line-height-150% text-grey-500">
          of ${budgets.reduce((curr, acc) => curr + Number(acc.goal), 0)} limit
        </p>
      </div>
    </div>
  );
}
