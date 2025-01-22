import SummaryItem from "./summary-item/summary-item";

export default function Summary() {
  const summary = [
    { title: "Current Balance", value: "$4,836.00", color: "black" },
    { title: "Income", value: "$3,814.25" },
    { title: "Expenses", value: "$1,700.50" },
  ];
  return (
    <ul className="flex w-full flex-col gap-y-3 md:flex-row md:gap-x-6">
      {summary.map((item, index) => (
        <SummaryItem
          key={index}
          title={item.title}
          value={item.value}
          color={item.color}
        />
      ))}
    </ul>
  );
}
