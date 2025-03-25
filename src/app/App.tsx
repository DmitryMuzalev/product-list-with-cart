import { Layout } from "common/components/Layout/Layout";
import { selectIsOrdered } from "features/cart/model/cartSlice";
import { Cart } from "features/cart/ui/Cart/Cart";
import { Order } from "features/cart/ui/Order/Order";
import { Products } from "features/products/ui/Products/Products";
import { useSelector } from "react-redux";

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
