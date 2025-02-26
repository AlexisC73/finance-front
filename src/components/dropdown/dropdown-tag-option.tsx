import { COLORS } from "@/theme/colors";
import ColorTag from "../color-tag/color-tag";

export default function DropdownTagOption({
  color,
  alreadyUse,
}: {
  color: COLORS;
  alreadyUse: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <ColorTag color={color} active={alreadyUse} />
      {alreadyUse ? (
        <span className="text-grey-500 text-preset-5">Already Used</span>
      ) : null}
    </div>
  );
}
