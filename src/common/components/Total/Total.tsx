import { S } from "./Total.styles";

import { useAppSelector } from "common/hooks";
import { selectCart } from "features/cart/model/cartSlice";

interface TotalProps {
  padding?: string;
  mobilePadding?: string;
}

function Total({ padding, mobilePadding }: TotalProps) {
  const cartList = useAppSelector(selectCart);

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <S.Wrapper $padding={padding} $mobilePadding={mobilePadding}>
      <p>Order Total</p>
      <span>${total.toFixed(2)}</span>
    </S.Wrapper>
  );
}

export { Total };
