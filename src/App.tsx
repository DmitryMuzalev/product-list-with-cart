import { Layout } from "components/UI/Layout";
import { Products } from "feature/Products/Products";
import { Cart } from "feature/Cart/Cart";
import { useSelector } from "react-redux";
import { selectOrder } from "feature/Order/order-slice";
import { Order } from "feature/Order/Order";

function App() {
  const showOrder = useSelector(selectOrder);

  return (
    <Layout>
      <Products />
      <Cart />
      {!!showOrder && <Order />}
    </Layout>
  );
}

export default App;
