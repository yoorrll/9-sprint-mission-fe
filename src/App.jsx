import { ProductProvider } from './context/ProductContext';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  return (
    <ProductProvider>
      <ProductPage />
    </ProductProvider>
  );
}

export default App;
