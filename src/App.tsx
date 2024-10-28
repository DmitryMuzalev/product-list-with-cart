import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Products/Products";
import { Layout } from "./components/UI/Layout";

function App() {
  return (
    <Layout>
      <Products />
      <Cart />
    </Layout>
  );
}

export default App;
