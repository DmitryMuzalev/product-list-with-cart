import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "./cart-slice";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  column-gap: 1rem;

  span {
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-size: 1.5rem;
  }
`;

function CartTotal() {
  const cartList = useSelector(selectCart);

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Wrapper>
      <p>Order Total</p>
      <span>${total.toFixed(2)}</span>
    </Wrapper>
  );
}

export { CartTotal };
