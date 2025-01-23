import { COLORS } from "@/theme/colors";
import PotsDetailItem from "./pots-detail-item/pots-detail-item";

export default function PotsDetailList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <PotsDetailItem color={COLORS.GREEN} amount="$159" title="Savings" />
      <PotsDetailItem color={COLORS.CYAN} amount="$40" title="Gift" />
      <PotsDetailItem
        color={COLORS.NAVY}
        amount="$110"
        title="Concert Ticket"
      />
      <PotsDetailItem color={COLORS.YELLOW} amount="$10" title="New Laptop" />
    </div>
  );
}
