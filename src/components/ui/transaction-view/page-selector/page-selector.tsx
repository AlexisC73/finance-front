import PageButton from "./page-button/page-button";

const calculateEachSidePage = ({
  currentPage,
  maxPages,
  lastPageNumber,
}: {
  currentPage: number;
  maxPages: number;
  lastPageNumber: number;
}): { left: number; right: number } => {
  const leftAvailable = currentPage - 2;
  const rightAvailable = lastPageNumber - currentPage - 1;

  const maxLeft = Math.floor(maxPages / 2);
  const maxRight = Math.ceil(maxPages / 2);

  const result = { left: 0, right: 0 };

  if (leftAvailable < maxLeft / 2 && rightAvailable < maxRight / 2) {
    return { left: leftAvailable, right: rightAvailable };
  }

  if (leftAvailable < maxLeft && rightAvailable >= maxRight) {
    result.left = leftAvailable;
    result.right = Math.min(
      maxRight + (maxRight - leftAvailable),
      rightAvailable,
    );
  }

  if (leftAvailable >= maxLeft && rightAvailable < maxRight) {
    result.left = Math.min(maxLeft + (maxLeft - rightAvailable), leftAvailable);
    result.right = rightAvailable;
  }

  if (leftAvailable >= maxLeft && rightAvailable >= maxRight) {
    result.left = maxLeft;
    result.right = maxRight;
  }

  return result;
};

export default function PageSelector({
  currentPage,
  lastPageNumber,
  totalPage,
  updatePage,
}: {
  currentPage: number;
  lastPageNumber: number;
  updatePage: (page: number) => void;
  totalPage: number;
}) {
  const pageCount = calculateEachSidePage({
    maxPages: totalPage - 1,
    currentPage,
    lastPageNumber: lastPageNumber,
  });

  return (
    <div className="flex gap-x-4">
      <PageButton action={updatePage} page={1} currentPage={currentPage} />
      <LeftPageRest
        updatePage={updatePage}
        currentPage={currentPage}
        lastPageNumber={lastPageNumber}
        pageToDisplay={pageCount.left}
      />
      {currentPage > 1 && currentPage < lastPageNumber && (
        <PageButton
          action={updatePage}
          page={currentPage}
          currentPage={currentPage}
        />
      )}
      <RightPageRest
        updatePage={updatePage}
        currentPage={currentPage}
        maxPage={lastPageNumber}
        lastPageNumber={lastPageNumber}
        pageToDisplay={pageCount.right}
      />
      <PageButton
        action={updatePage}
        page={lastPageNumber}
        currentPage={currentPage}
      />
    </div>
  );
}

function LeftPageRest({
  currentPage,
  pageToDisplay,
  updatePage,
  lastPageNumber,
}: {
  currentPage: number;
  pageToDisplay: number;
  updatePage: (page: number) => void;
  lastPageNumber: number;
}) {
  const shouldDisplayDots = currentPage - 2 > pageToDisplay;
  return (
    <>
      {Array.from({ length: pageToDisplay }).map((_, index) =>
        index !== 0 ? (
          <PageButton
            action={updatePage}
            key={index}
            currentPage={currentPage}
            page={currentPage - pageToDisplay + index}
          />
        ) : (
          <PageButton
            key={index}
            action={updatePage}
            currentPage={currentPage}
            lastPageNumber={lastPageNumber}
            side="prev"
            page={
              shouldDisplayDots ? "..." : currentPage - pageToDisplay + index
            }
          />
        ),
      )}
    </>
  );
}

function RightPageRest({
  currentPage,
  pageToDisplay,
  maxPage,
  updatePage,
  lastPageNumber,
}: {
  currentPage: number;
  pageToDisplay: number;
  maxPage: number;
  updatePage: (page: number) => void;
  lastPageNumber: number;
}) {
  const shouldDisplayDots = currentPage + pageToDisplay < maxPage - 1;
  return (
    <>
      {Array.from({ length: pageToDisplay }).map((_, index) =>
        index + 1 !== pageToDisplay ? (
          <PageButton
            action={updatePage}
            key={index}
            page={currentPage + index + 1}
            currentPage={currentPage}
          />
        ) : (
          <PageButton
            action={updatePage}
            key={index}
            lastPageNumber={lastPageNumber}
            side="next"
            page={shouldDisplayDots ? "..." : currentPage + index + 1}
            currentPage={currentPage}
          />
        ),
      )}
    </>
  );
}
