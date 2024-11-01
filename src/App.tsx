import { Layout } from "components/UI/Layout";
import { Products } from "feature/Products/Products";
import { Cart } from "feature/Cart/Cart";

function App() {
  return (
    <Layout>
      <Products />
      <Cart />
    </Layout>
  );
}

export default App;
