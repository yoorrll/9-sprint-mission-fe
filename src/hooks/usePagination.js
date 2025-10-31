import { useState } from 'react';

export function usePagination({ initialPage = 1, pageSize = 10 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setTotalItems] = useState(0);

  const totalPages = Math.ceil(totalItems / pageSize);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return {
    currentPage,
    totalItems,
    totalPages,
    pageSize,
    setCurrentPage,
    setTotalItems,
    goToPage,
    prevPage,
    nextPage,
  };
}
