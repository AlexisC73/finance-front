import { ModalCloseIcon } from "@/assets/icons/icons";
import Button from "@/components/button/button";
import CategorySelect from "@/components/form/category-select/category-select";
import ColorSelect from "@/components/form/color-select/color-select";
import MoneyInput from "@/components/form/money-input/money-input";
import { OverlayCtx } from "@/context/overlay/overlay";
import { COLORS } from "@/theme/colors";
import { FormEvent, useContext } from "react";

export default function EditBudgetModal({
  originalColor,
}: {
  originalColor: COLORS;
}) {
  const { closeOverlay } = useContext(OverlayCtx);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.forEach((value) => {
      console.log(value);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white py-6 px-5 rounded-3 flex flex-col gap-y-5 md:p-8 md:max-w-560px"
    >
      <div className="flex justify-between items-center">
        <p className="text-preset-2 md:text-preset-1">Edit Budget</p>
        <button
          type="button"
          onClick={closeOverlay}
          className="text-8 text-grey-500"
        >
          <ModalCloseIcon />
        </button>
      </div>
      <p className="text-preset-4 text-grey-500">
        As your budgets change, feel free to update your spending limits.
      </p>
      <div className="flex flex-col gap-y-4">
        <CategorySelect label="Budget Category" name="selected-category" />
        <MoneyInput name="max-spending" label="Maximum Spending" />
        <ColorSelect
          label="Color Tag"
          inputName="selected-color"
          originalColor={originalColor}
        />
      </div>
      <Button>Save Changes</Button>
    </form>
  );
}
