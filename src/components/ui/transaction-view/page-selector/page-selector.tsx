import PageButton from "./page-button/page-button";

const calculateEachSidePage = ({
  currentPage,
  maxSidePage,
  lastPageNumber,
}: {
  currentPage: number;
  maxSidePage: number;
  lastPageNumber: number;
}): { left: number; right: number } => {
  const leftAvailable = currentPage - 2;
  const rightAvailable = lastPageNumber - currentPage - 1;

  const result = { left: 0, right: 0 };

  if (leftAvailable < maxSidePage && rightAvailable < maxSidePage) {
    return { left: leftAvailable, right: rightAvailable };
  }

  if (leftAvailable < maxSidePage && rightAvailable >= maxSidePage) {
    result.left = leftAvailable;
    result.right = Math.min(
      maxSidePage + (maxSidePage - leftAvailable),
      rightAvailable,
    );
  }

  if (leftAvailable >= maxSidePage && rightAvailable < maxSidePage) {
    result.left = Math.min(
      maxSidePage + (maxSidePage - rightAvailable),
      leftAvailable,
    );
    result.right = rightAvailable;
  }

  if (leftAvailable >= maxSidePage && rightAvailable >= maxSidePage) {
    result.left = maxSidePage;
    result.right = maxSidePage;
  }

  return result;
};

export default function PageSelector({
  currentPage,
  lastPageNumber,
  maxSidePage,
}: {
  currentPage: number;
  lastPageNumber: number;
  updatePage: (page: number) => void;
  maxSidePage: number;
}) {
  const pageCount = calculateEachSidePage({
    maxSidePage: maxSidePage - 1,
    currentPage,
    lastPageNumber: lastPageNumber,
  });

  return (
    <div className="flex gap-x-4">
      <PageButton page={1} currentPage={currentPage} />
      <LeftPageRest currentPage={currentPage} pageToDisplay={pageCount.left} />
      {currentPage > 1 && currentPage < lastPageNumber && (
        <PageButton page={currentPage} currentPage={currentPage} />
      )}
      <RightPageRest
        currentPage={currentPage}
        maxPage={lastPageNumber}
        pageToDisplay={pageCount.right}
      />
      <PageButton page={lastPageNumber} currentPage={currentPage} />
    </div>
  );
}

function LeftPageRest({
  currentPage,
  pageToDisplay,
}: {
  currentPage: number;
  pageToDisplay: number;
}) {
  const shouldDisplayDots = currentPage - 2 > pageToDisplay;
  return (
    <>
      {Array.from({ length: pageToDisplay }).map((_, index) =>
        index !== 0 ? (
          <PageButton
            key={index}
            currentPage={currentPage}
            page={currentPage - pageToDisplay + index}
          />
        ) : (
          <PageButton
            key={index}
            currentPage={currentPage}
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
}: {
  currentPage: number;
  pageToDisplay: number;
  maxPage: number;
}) {
  const shouldDisplayDots = currentPage + pageToDisplay < maxPage - 1;
  return (
    <>
      {Array.from({ length: pageToDisplay }).map((_, index) =>
        index + 1 !== pageToDisplay ? (
          <PageButton
            key={index}
            page={currentPage + index + 1}
            currentPage={currentPage}
          />
        ) : (
          <PageButton
            key={index}
            page={shouldDisplayDots ? "..." : currentPage + index + 1}
            currentPage={currentPage}
          />
        ),
      )}
    </>
  );
}
