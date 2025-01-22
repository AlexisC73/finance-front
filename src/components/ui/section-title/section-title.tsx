import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return <h1 className="text-8 font-bold line-height-120%">{children}</h1>;
}
