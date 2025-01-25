import { useState } from "react";
import NextPreviousPageButton from "./next-previous-page-button/prev-next-page-button";
import PageButton from "./page-button/page-button";

export default function PageSelector({
  currentPage,
  maxPage,
  updatePage,
}: {
  currentPage: number;
  maxPage: number;
  updatePage: (page: number) => void;
}) {
  const [lastMove, setLastMove] = useState<"prev" | "next">("next");

  const handlePageChange = (page: number, move: "prev" | "next") => {
    if (page < 1 || page > maxPage) return;
    setLastMove(move);
    updatePage(page);
  };

  return (
    <div
      id="page-list"
      className="flex gap-x-2 pt-6 md:justify-between mx-auto md:mx-none"
    >
      <NextPreviousPageButton
        action={() => handlePageChange(currentPage - 1, "prev")}
        type="previous"
      />
      <div className="gap-x-2 md:hidden flex">
        {maxPage > 4 ? (
          <>
            <PageButton active={currentPage === 1} text="1" />
            {currentPage <= 2 && (
              <PageButton active={currentPage === 2} text="2" />
            )}
            {((lastMove === "prev" && currentPage > 2) ||
              currentPage >= maxPage - 1) && (
              <PageButton text="..." active={false} />
            )}
            {currentPage > 2 && currentPage < maxPage - 1 && (
              <PageButton text={currentPage.toString()} active={true} />
            )}
            {((lastMove === "next" && currentPage < maxPage - 1) ||
              currentPage <= 2) && <PageButton text="..." active={false} />}
            {currentPage >= maxPage - 1 && (
              <PageButton
                active={currentPage === maxPage - 1}
                text={(maxPage - 1).toString()}
              />
            )}
            <PageButton
              active={currentPage === maxPage}
              text={maxPage.toString()}
            />
          </>
        ) : (
          <>
            {Array.from({ length: maxPage }, (_, i) => i + 1).map(
              (page, index) => (
                <PageButton
                  key={page}
                  active={currentPage === index + 1}
                  text={(index + 1).toString()}
                />
              ),
            )}
          </>
        )}
      </div>
      <div className="gap-x-2 hidden md:flex">
        {Array.from({ length: maxPage }, (_, i) => i + 1).map((page, index) => (
          <PageButton
            key={page}
            active={currentPage === index + 1}
            text={(index + 1).toString()}
          />
        ))}
      </div>
      <NextPreviousPageButton
        action={() => handlePageChange(currentPage + 1, "next")}
        type="next"
      />
    </div>
  );
}
