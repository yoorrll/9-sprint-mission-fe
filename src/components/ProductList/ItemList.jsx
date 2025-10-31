import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';
import styles from './ItemList.module.css';
import searchIcon from '../../assets/icons/ic_search.png';
import Pagination from '../Pagination/Pagination';
import ItemCard from '../ItemCard/ItemCard';
import { getProductList } from '../../api/ProductService';

export default function ItemList() {
  const { sort, setSort, currentPage, setCurrentPage } =
    useContext(ProductContext);

  const [pageProducts, setPageProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openBtn, setOpenBtn] = useState(false);

  const toggleDropdown = () => setOpenBtn((prev) => !prev);

  const handleSortChange = (value) => {
    setSort(value);
    setCurrentPage(1);
    setOpenBtn(false);
  };

  useEffect(() => {
    async function fetchPage() {
      setLoading(true);
      try {
        const res = await getProductList({
          page: currentPage,
          pageSize: 10,
          orderBy: sort,
        });
        setPageProducts(res.list);
      } finally {
        setLoading(false);
      }
    }
    fetchPage();
  }, [currentPage, sort]);

  if (loading) return <div>로딩중...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>판매 중인 상품</h2>
        <div className={styles.activeContainer}>
          <div className={styles.active}>
            <img
              className={styles.searchIcon}
              src={searchIcon}
              alt="검색 아이콘"
            />
            <input
              className={styles.inputSearch}
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <div className={styles.selectBtn}>
            <button className={styles.select} onClick={toggleDropdown}>
              {sort === 'recent' ? '최신순' : '좋아요순'}
            </button>
            {openBtn && (
              <ul className={styles.optionList}>
                <li
                  className={styles.optionRecent}
                  onClick={() => handleSortChange('recent')}
                >
                  최신순
                </li>
                <li
                  className={styles.optionFavorite}
                  onClick={() => handleSortChange('favorite')}
                >
                  좋아요순
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={styles.itemList}>
        {pageProducts.map((product) => (
          <ItemCard key={product.id} product={product} size="small" />
        ))}
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
