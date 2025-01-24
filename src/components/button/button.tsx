import { PropsWithChildren } from "react";

type Type = "primary" | "secondary" | "tertiary" | "destroy";

export default function Button({
  children,
  type = "primary",
  action,
}: PropsWithChildren & {
  type?: Type;
  action?: () => void;
}) {
  const buttonStyles: { [key in Type]: string } = {
    destroy:
      "text-white bg-red text-preset-4-bold p-4 rounded-2 hover:bg-opacity-80",
    primary:
      "text-white bg-grey-900 hover:bg-grey-500 p-4 rounded-2 text-preset-4-bold",
    secondary:
      "bg-beige-100 hover:bg-white border border-px border-transparent hover:border-beige-500 p-4 rounded-2 text-preset-4-bold",
    tertiary: "text-grey-500 text-preset-4 hover:text-grey-900",
  };
  return (
    <button onClick={action} className={buttonStyles[type]}>
      {children}
    </button>
  );
}
