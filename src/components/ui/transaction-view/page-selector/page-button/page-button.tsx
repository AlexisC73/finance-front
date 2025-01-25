export default function PageButton({
  page,
  currentPage,
}: {
  page: number | "...";
  currentPage: number;
}) {
  const active = currentPage === Number(page);
  return (
    <button
      className={`w-10 h-10 rounded-2 border border-beige-500 text-preset-4 flex items-center justify-center hover:text-white hover:bg-beige-500 hover:bg-op-100 ${active ? "bg-grey-900 text-white" : "border-beige-500"}`}
    >
      {page}
    </button>
  );
}
