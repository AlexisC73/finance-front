import { PropsWithChildren } from "react";

export default function DropdownMenuItem({
  children,
  isRed = false,
  isBold = false,
  disabled = false,
  action,
}: PropsWithChildren & {
  isRed?: boolean;
  isBold?: boolean;
  action?: () => void;
  disabled?: boolean;
}) {
  return (
    <li
      className={`text-preset-4 ${isRed ? "text-red" : "text-grey-900"} ${isBold ? "font-bold" : ""}`}
    >
      <button disabled={disabled} onClick={action} className="w-full text-left">
        {children}
      </button>
    </li>
  );
}
