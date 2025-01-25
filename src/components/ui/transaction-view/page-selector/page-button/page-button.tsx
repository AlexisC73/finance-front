export default function PageButton({
  text,
  active,
}: {
  text: string;
  active: boolean;
}) {
  return (
    <button
      className={`w-10 h-10 rounded-2 border border-beige-500 text-preset-4 flex items-center justify-center ${active ? "bg-grey-900 text-white" : "border-beige-500"}`}
    >
      {text}
    </button>
  );
}
