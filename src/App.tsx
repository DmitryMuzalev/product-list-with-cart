import { Cart } from "./components/Cart/Cart";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <div>Products</div>
        <Cart />
      </Layout>
    </div>
  );
}

export default App;
