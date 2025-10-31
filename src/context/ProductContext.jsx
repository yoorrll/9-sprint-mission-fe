import { createContext, useState, useEffect } from 'react';
import { getProductList } from '../api/ProductService';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('recent');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);

        const [itemRes, bestRes] = await Promise.all([
          getProductList({
            page: currentPage,
            pageSize: 10,
            orderBy: 'recent',
          }),
          getProductList({
            page: 1,
            pageSize: 4,
            orderBy: 'favorite',
          }),
        ]);

        setProducts(itemRes.list);
        setTotalCount(itemRes.totalCount);
        setBestProducts(bestRes.list);
      } catch (err) {
        setError(err);
        console.error('Product get error:', err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [currentPage]);

  return (
    <ProductContext.Provider
      value={{
        products,
        bestProducts,
        sort,
        setSort,
        totalCount,
        currentPage,
        setCurrentPage,
        loading,
        error,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
