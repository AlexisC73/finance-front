import useOutsideClick from "@/hooks/use-outside-click";
import { ReactNode } from "react";

export default function Dropdown({
  children,
  closeDropdown,
}: {
  children: ReactNode[];
  closeDropdown: () => void;
}) {
  const ref = useOutsideClick({ callback: closeDropdown });
  return (
    <div ref={ref} className="relative w-full">
      {children}
    </div>
  );
}
