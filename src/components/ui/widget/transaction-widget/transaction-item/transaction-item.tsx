export default function TransactionItem({
  destination,
  imageUrl,
  amount,
  date,
  gain,
}: {
  destination: string;
  imageUrl: string;
  amount: string;
  date: Date;
  gain: boolean;
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <li className="flex justify-between">
      <div className="flex gap-x-4 items-center">
        <img src={imageUrl} className="w-8 h-8 rounded-full object-cover" />
        <p>{destination}</p>
      </div>
      <div className="flex flex-col items-end gap-y-2">
        <p
          className={`font-bold text-3.5 line-height-150% ${gain ? "text-green" : "text-grey-900"}`}
        >
          {gain ? "+" : "-"}${amount}
        </p>
        <p className="text-3 text-grey-500 line-height-150%">
          {`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
        </p>
      </div>
    </li>
  );
}
