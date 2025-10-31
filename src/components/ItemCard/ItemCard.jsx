import styles from './ItemCard.module.css';
import heartIcon from '../../assets/icons/ic_heart.png';

export default function ItemCard({ product, size = '' }) {
  return (
    <div className={styles.itemCard}>
      <img
        className={`${styles.productImg} ${
          size === 'small' ? styles.small : ''
        }`}
        alt="제품 사진"
        src={product.images}
      />
      <div className={styles.contents}>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.price}>{product.price.toLocaleString()}원</p>
        <div className={styles.heart}>
          <img className={styles.heartIcon} src={heartIcon} />
          <span className={styles.heartCount}>{product.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}
