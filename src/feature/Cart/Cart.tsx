import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectCart } from "./cart-slice";

import { EmptyCart } from "./EmptyCart";
import { FilledCart } from "./FilledCart";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding: 2rem 1.5rem;
  border-radius: ${(props) => props.theme.borderRadius.small};

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

  const quantityProducts = !cartList.length
    ? 0
    : cartList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Wrapper>
      <h2>{`Your Cart (${quantityProducts})`}</h2>
      {quantityProducts ? <FilledCart /> : <EmptyCart />}
    </Wrapper>
  );
}

export { Cart };
