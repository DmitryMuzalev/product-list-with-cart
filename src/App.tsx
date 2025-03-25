import { Layout } from "components/UI/Layout";
import { Products } from "feature/Products/Products";
import { Cart } from "feature/Cart/Cart";
import { useSelector } from "react-redux";
import { Order } from "feature/Order/Order";
import { selectIsOrdered } from "feature/Cart/cartSlice";

function App() {
  const showOrder = useSelector(selectIsOrdered);

  return (
    <Layout>
      <Products />
      <Cart />
      {!!showOrder && <Order />}
    </Layout>
  );
}

export default App;
