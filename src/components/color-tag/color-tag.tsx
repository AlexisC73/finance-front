import { colorClass, COLORS } from "@/theme/colors";

export default function ColorTag({
  color,
  disabled = false,
}: {
  color: COLORS;
  disabled?: boolean;
}) {
  const bgColor = colorClass(color, "bg");
  return (
    <div
      className={`flex gap-x-3 items-center ${disabled ? "opacity-25" : "opacity-100"}`}
    >
      <span className={`w-4 h-4 rounded-full ${bgColor} `}></span>
      {color[0].toLocaleUpperCase() + color.slice(1).toLowerCase()}
    </div>
  );
}
