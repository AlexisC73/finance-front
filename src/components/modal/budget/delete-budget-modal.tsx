import { ModalCloseIcon } from "@/assets/icons/icons";
import Button from "@/components/button/button";
import { OverlayCtx } from "@/context/overlay/overlay";
import { useContext } from "react";

export default function DeleteBudgetModal({
  budgetName,
  onConfirm,
}: {
  budgetName: string;
  onConfirm: () => Promise<void>;
}) {
  const { setOpen } = useContext(OverlayCtx);
  const closeOverlay = () => setOpen(false);

  const handleConfirm = () => {
    onConfirm().then(() => {
      closeOverlay();
    });
  };

  return (
    <div className="bg-white rounded-3 px-5 py-6 flex flex-col gap-y-5 md:p-8 md:max-w-140">
      <div id="modal-header" className="flex justify-between items-center">
        <p className="text-preset-2 md:text-preset-1">Delete '{budgetName}'</p>
        <button onClick={closeOverlay}>
          <ModalCloseIcon className="text-8 text-grey-500" />
        </button>
      </div>
      <p>
        Are you sure you want to delete this budget? This action cannot be
        reversed, and all the data inside it will be removed forever.
      </p>
      <Button action={handleConfirm} fullWidth type="destroy">
        Yes, Confirm Deletion
      </Button>
      <Button action={closeOverlay} fullWidth type="tertiary">
        No, I want to go back
      </Button>
    </div>
  );
}
