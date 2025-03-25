import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectCart } from "features/cart/model/cartSlice";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { FilledCart } from "./FilledCart/FilledCart";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding: 2rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.small};
  align-self: start;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
    margin-bottom: 1.5rem;
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    padding: 1.25rem 1rem;
  }
`;

function Cart() {
  const cartList = useSelector(selectCart);
  const isEmptyCart = cartList.length === 0;

  const totalProducts = isEmptyCart
    ? 0
    : cartList.reduce((total, item) => total + item.quantity, 0);

  return (
    <Wrapper>
      <h2>{`Your Cart (${totalProducts})`}</h2>
      {isEmptyCart ? <EmptyCart /> : <FilledCart />}
    </Wrapper>
  );
}

export { Cart };
