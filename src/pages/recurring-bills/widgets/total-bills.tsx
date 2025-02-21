import { BillsIconOutline } from "@/assets/icons/icons";

export default function TotalBills() {
  return (
    <div
      id="total-bills"
      className="bg-grey-900 text-white flex gap-x-5 items-center px-5 py-6 rounded-3 md:items-start md:flex-col md:p-6 md:pt-9.5 md:gap-y-8"
    >
      <BillsIconOutline className="text-10" />
      <div className="flex flex-col gap-y-2.75">
        <p className="text-preset-4">Total Bills</p>
        <p className="text-preset-1">$384.98</p>
      </div>
    </div>
  );
}
