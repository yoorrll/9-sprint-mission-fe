import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';
import styles from './Pagination.module.css';
import arrowLeft from '../../assets/icons/ic_arrow_left.png';
import arrowRight from '../../assets/icons/ic_arrow_right.png';

export default function Pagination() {
  const { totalCount, currentPage, setCurrentPage } =
    useContext(ProductContext);

  const totalPages = Math.ceil(totalCount / 10);
  const GROUP_SIZE = 5;
  const [pageGroup, setPageGroup] = useState(1);

  useEffect(() => {
    const newGroup = Math.ceil(currentPage / GROUP_SIZE);
    setPageGroup(newGroup);
  }, [currentPage]);

  const startPage = (pageGroup - 1) * GROUP_SIZE + 1;
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);

  const handlePageClick = (page) => setCurrentPage(page);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={styles.navButton}
      >
        <img className={styles.arrowBtn} src={arrowLeft} alt="이전 버튼" />
      </button>

      {pages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => handlePageClick(page)}
          className={currentPage === page ? styles.active : ''}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={styles.navButton}
      >
        <img className={styles.arrowBtn} src={arrowRight} alt="다음 버튼" />
      </button>
    </div>
  );
}
