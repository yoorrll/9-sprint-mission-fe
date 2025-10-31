import styles from './ItemList.module.css';
import ItemCard from '../ItemCard/ItemCard';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

export default function BestItemList() {
  const { bestProducts } = useContext(ProductContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>베스트 상품</h2>
      </div>
      <div className={styles.bestItemList}>
        {bestProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
