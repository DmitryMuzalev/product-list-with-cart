import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCart } from "./cart-slice";
import { CartListItem } from "./CartListItem";

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
