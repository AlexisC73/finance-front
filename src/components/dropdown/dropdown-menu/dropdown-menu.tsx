import { PropsWithChildren } from "react";

export default function DropdownMenu({
  children,
  isOpen,
  customClassName = "",
}: PropsWithChildren & { isOpen: boolean; customClassName?: string }) {
  return (
    <ul
      hidden={!isOpen}
      className={`absolute right-0 bg-white px-5 py-3 rounded-2 shadow-lg flex flex-col whitespace-nowrap gap-y-3 ${customClassName}`}
    >
      {children}
    </ul>
  );
}

export function DropdownMenuItem({
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

export function DropdownSeparator() {
  return <li className="h-px w-full bg-grey-100" />;
}
