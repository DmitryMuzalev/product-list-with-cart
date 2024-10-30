import { useEffect } from "react";
import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Products/Products";
import { Layout } from "./components/UI/Layout";

import data from "./assets/moke/data.json";
import { loadProducts } from "./redux/slices/products-slice";
import { useAppDispatch } from "./redux/redux-hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts(data));
  }, []);

  return (
    <Layout>
      <Products />
      <Cart />
    </Layout>
  );
}

export default App;
