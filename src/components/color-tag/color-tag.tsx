import { colorClass, COLORS } from "@/theme/colors";

export default function ColorTag({
  color,
  active = true,
}: {
  color: COLORS;
  active?: boolean;
}) {
  const bgColor = colorClass(color, "bg");
  return (
    <div className="flex gap-x-3 items-center">
      <span
        className={`w-4 h-4 rounded-full ${bgColor} ${active ? "bg-opacity-100" : "bg-opacity-25"}`}
      ></span>
      {color[0].toLocaleUpperCase() + color.slice(1).toLowerCase()}
    </div>
  );
}
