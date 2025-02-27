export default function MoneyInput({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <div id="money-input">
      <label className="text-preset-5-bold text-grey-500" htmlFor={name}>
        {label}
      </label>
      <div className="flex gap-x-3 py-3 px-5 bg-white border border-beige-500 rounded-2 items-center">
        <label htmlFor={name} className="text-preset-4 text-beige-500">
          $
        </label>
        <input
          id={name}
          type="text"
          name={name}
          placeholder="e.g. 2000"
          defaultValue={defaultValue}
          className="flex-1 outline-none text-preset-4"
        />
      </div>
    </div>
  );
}
