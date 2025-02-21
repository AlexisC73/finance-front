import { PropsWithChildren } from "react";

export default function DropdownButton({
  children,
  action,
}: PropsWithChildren & { action: () => void }) {
  return <button onClick={action}>{children}</button>;
}
