import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AlbumImage from "../components/AlbumImage";
import PaginationButton from "./PaginationButton";

export default function Album({ albumData }) {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(albumData.length / itemsPerPage);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const setInitialPage = () => {
      setCurrentPage(1);
      setIsClient(true);
    };

    setInitialPage();
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setCurrentPage(1);
    }
  }, [isSmallScreen]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const displayedAlbums =
    isClient && isSmallScreen
      ? albumData.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : albumData;

  const getPageButtons = () => {
    const buttonList = [];
    let start = currentPage - 2;
    let end = currentPage + 2;

    if (start < 1) {
      end += 1 - start;
      start = 1;
    }

    if (end > totalPages) {
      start -= end - totalPages;
      end = totalPages;
      if (start < 1) {
        start = 1;
      }
    }

    for (let i = start; i <= end; i++) {
      buttonList.push(
        <button
          key={i}
          className={`mx-1 px-2 py-1 rounded-lg ${
            i === currentPage ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return buttonList;
  };

  return (
    <div>
      <div className="border border-solid border-gray-400 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 cursor-pointer">
        {displayedAlbums.map((album) => (
          <AlbumImage album={album} key={album.alt} />
        ))}
      </div>
      {isSmallScreen && (
        <div className="flex items-center justify-center mt-4">
          <PaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </PaginationButton>
          {currentPage > 3 && (
            <button
              className="mx-1 px-2 py-1 rounded-lg bg-gray-200"
              onClick={() => handlePageClick(1)}
            >
              1
            </button>
          )}
          {currentPage > 4 && <span>...</span>}
          {getPageButtons()}
          {currentPage < totalPages - 3 && <span>...</span>}
          {currentPage < totalPages - 2 && (
            <button
              className="mx-1 px-2 py-1 rounded-lg bg-gray-200"
              onClick={() => handlePageClick(totalPages)}
            >
              {totalPages}
            </button>
          )}
          <PaginationButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </PaginationButton>
        </div>
      )}
    </div>
  );
}
