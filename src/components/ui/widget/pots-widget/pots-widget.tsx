import { PotsIconOutline } from "@/assets/icons/icons";
import { WidgetHeader } from "../widget-header/widget-header";
import PotsDetailList from "./pots-detail-list/pots-detail-list";

export function PotsWidget() {
  return (
    <div className="bg-white flex w-full flex-col py-6 px-5 gap-y-5 rounded-3 md:p-8">
      <WidgetHeader title="Pots" href="/pots" linkName="See Details" />
      <div className="w-full flex flex-col gap-y-5">
        <div className="w-full flex bg-beige-100 rounded-3 py-5 px-4 items-center gap-x-4">
          <PotsIconOutline className="text-10 text-green" />
          <div className="flex w-full flex-col">
            <div className="flex flex-col gap-y-2.75">
              <h3 className="text-3.5 line-height-150% text-grey-500">
                Total Saved
              </h3>
              <p className="text-8 line-height-120% font-bold">$850</p>
            </div>
          </div>
        </div>
        <PotsDetailList />
      </div>
    </div>
  );
}
