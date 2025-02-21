import { PropsWithChildren } from "react";

export default function DropdownButton({
  children,
  action,
  fullWidth = false,
}: PropsWithChildren & { action: () => void; fullWidth?: boolean }) {
  return (
    <button className={fullWidth ? "w-full" : ""} onClick={action}>
      {children}
    </button>
  );
}
