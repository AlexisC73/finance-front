import { BUDGETS } from "@/helpers/data";
import React from "react";
import BudgetCircle from "../budget-circle/budget-circle";
import SpendingSummaryItem from "./spending-item/spending-item";

export default function SpendingSummaryWidget() {
  return (
    <div className="bg-white rounded-3 flex flex-col items-center py-6 px-5 gap-y-8 md:flex-row md:gap-x-8 xl:flex-col md:p-8">
      <div className="flex md:flex-1 min-w-60 justify-center items-center">
        <BudgetCircle budgets={BUDGETS} />
      </div>
      <div className="w-full md:w-74 flex flex-col gap-y-6">
        <h3 className="text-5 line-height-120% font-bold">Spending Summary</h3>
        <ul className="flex flex-col gap-y-4">
          {BUDGETS.map((budget, index) => (
            <React.Fragment key={budget.name}>
              <SpendingSummaryItem budget={budget} />
              {index !== BUDGETS.length - 1 && (
                <div id="separator" className="bg-grey-100 h-px w-full"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
