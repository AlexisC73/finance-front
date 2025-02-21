import { PropsWithChildren } from "react";

export default function DropdownMenu({
  children,
  isOpen,
}: PropsWithChildren & { isOpen: boolean }) {
  return (
    <ul
      hidden={!isOpen}
      className="absolute right-0 bg-white px-5 py-3 rounded-2 shadow-xl flex flex-col whitespace-nowrap gap-y-3"
    >
      {children}
    </ul>
  );
}

export function DropdownMenuItem({
  children,
  isRed = false,
}: PropsWithChildren & { isRed?: boolean }) {
  return (
    <li className={`text-preset-4 ${isRed ? "text-red" : "text-grey-900"}`}>
      {children}
    </li>
  );
}
