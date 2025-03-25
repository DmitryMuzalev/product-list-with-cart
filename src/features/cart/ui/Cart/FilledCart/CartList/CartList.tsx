import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCart } from "features/cart/model/cartSlice";
import { CartListItem } from "./CartListItem/CartListItem";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

function CartList() {
  const cartList = useSelector(selectCart);

  return (
    <Wrapper>
      {cartList.map((item, index) => (
        <CartListItem key={index} {...item} />
      ))}
    </Wrapper>
  );
}

export { CartList };
