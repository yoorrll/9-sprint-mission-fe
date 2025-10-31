import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import BestItemList from '../../components/ProductList/BestItemList';
import ItemList from '../../components/ProductList/ItemList';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className={styles.productList}>
        <BestItemList />
        <ItemList />
      </main>
      <Footer />
    </>
  );
}
