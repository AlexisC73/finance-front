import { PropsWithChildren } from "react";

export default function DropdownButton({
  children,
  action,
}: PropsWithChildren & { action: () => void; fullWidth?: boolean }) {
  return (
    <button type="button" className="w-full text-left" onClick={action}>
      {children}
    </button>
  );
}
