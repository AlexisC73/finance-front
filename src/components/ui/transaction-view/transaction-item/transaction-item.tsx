export default function TransactionItem({
  date,
  amount,
  category,
  gain,
  imageUrl,
  sender,
}: {
  date: string;
  category: string;
  sender: string;
  imageUrl: string;
  amount: string;
  gain: boolean;
}) {
  return (
    <li className="flex items-center gap-x-3">
      <img
        src={imageUrl}
        alt=""
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col gap-y-1 flex-1">
        <p className="text-preset-4-bold">{sender}</p>
        <p className="text-preset-5">{category}</p>
      </div>
      <div className="flex flex-col gap-y-1 items-end">
        <p className={`text-preset-4-bold ${gain ? "text-green" : ""}`}>
          {gain ? "+" : "-"}${Number(amount).toFixed(2)}
        </p>
        <p className="text-preset-5">{date}</p>
      </div>
    </li>
  );
}
