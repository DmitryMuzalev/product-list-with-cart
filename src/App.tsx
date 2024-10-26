import { Cart } from "./components/Cart";
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
