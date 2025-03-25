import { selectCart } from "features/cart/model/cartSlice";
import { useSelector } from "react-redux";

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
