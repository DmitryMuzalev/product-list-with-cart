import { Layout } from "common/components/Layout/Layout";
import { useAppSelector } from "common/hooks";
import { selectIsOrdered } from "features/cart/model/cartSlice";
import { Cart } from "features/cart/ui/Cart/Cart";
import { Order } from "features/cart/ui/Order/Order";
import { Products } from "features/products/ui/Products/Products";

function App() {
  const showOrder = useAppSelector(selectIsOrdered);

  return (
    <Layout>
      <Products />
      <Cart />
      {!!showOrder && <Order />}
    </Layout>
  );
}

export default App;
