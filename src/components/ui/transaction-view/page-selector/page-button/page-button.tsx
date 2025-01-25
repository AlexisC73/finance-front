export default function PageButton({
  currentPage,
  action,
  ...rest
}:
  | {
      page: number;
      currentPage: number;
      action: (page: number) => void;
    }
  | {
      page: "...";
      currentPage: number;
      action: (page: number) => void;
      side: "prev" | "next";
      lastPageNumber: number;
    }) {
  const active = currentPage === Number(rest.page);

  const updatePage = () => {
    if (rest.page === "...") {
      if (rest.side === "prev") {
        return action(Math.max(currentPage - 5, 1));
      }
      return action(Math.min(currentPage + 5, rest.lastPageNumber));
    }
    action(rest.page);
  };

  return (
    <button
      className={`w-10 h-10 rounded-2 border border-beige-500 text-preset-4 flex items-center justify-center hover:text-white hover:bg-beige-500 hover:bg-op-100 ${active ? "bg-grey-900 text-white" : "border-beige-500"}`}
      onClick={updatePage}
    >
      {rest.page}
    </button>
  );
}
