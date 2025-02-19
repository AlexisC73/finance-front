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
    <li className="flex items-center md:grid md:cols-3 md:gap-x-8 xl:px-4">
      <div className="flex gap-x-3 flex-1 md:col-span-2">
        <img
          src={imageUrl}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col gap-y-1 flex-1 md:flex-row md:items-center md:justify-between">
          <p className="text-preset-4-bold">{sender}</p>
          <p className="text-preset-5  md:w-20 xl:w-30 text-grey-500">
            {category}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 items-end md:flex-row md:items-center md:justify-between md:gap-x-8">
        <p
          className={`text-preset-4-bold md:text-end ${gain ? "text-green" : ""}`}
        >
          {gain ? "+" : "-"}${Number(amount).toFixed(2)}
        </p>
        <p className="text-preset-5 md:order-first md:w-20 xl:w-30 text-grey-500">
          {date}
        </p>
      </div>
    </li>
  );
}
