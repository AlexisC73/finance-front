interface BudgetTransactionProps {
  to: string;
  amount: string;
  date: string;
  imageUrl: string;
}

export default function BudgetTransaction({
  amount,
  date,
  to,
  imageUrl,
}: BudgetTransactionProps) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <img
          src={imageUrl}
          className="w-8 h-8 rounded-full object-cover hidden md:block"
        />
        <p className="text-preset-5-bold">{to}</p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-preset-5-bold">${Number(amount).toFixed(2)}</p>
        <p className="text-preset-5 text-grey-500">{date}</p>
      </div>
    </li>
  );
}
