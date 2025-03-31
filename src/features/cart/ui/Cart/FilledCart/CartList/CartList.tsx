import styled from "styled-components";
import { selectCart } from "features/cart/model/cartSlice";
import { CartListItem } from "./CartListItem/CartListItem";
import { useAppSelector } from "common/hooks";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

function CartList() {
  const cartList = useAppSelector(selectCart);

  return (
    <Wrapper>
      {cartList.map((item, index) => (
        <CartListItem key={index} {...item} />
      ))}
    </Wrapper>
  );
}

export { CartList };
