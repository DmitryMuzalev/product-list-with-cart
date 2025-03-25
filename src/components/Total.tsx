import { useSelector } from "react-redux";

import { selectCart } from "../feature/Cart/cartSlice";

function Total() {
  const cartList = useSelector(selectCart);

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <p>Order Total</p>
      <span>${total.toFixed(2)}</span>
    </>
  );
}

export { Total };
