import styled from "styled-components";
import { Order } from "./Order/Order";
//import { EmptyCart } from "./EmptyCart";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding: 30px 25px;
  border-radius: 10px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.color.primary};
    margin-bottom: 1.5rem;
  }
`;

function Cart() {
  return (
    <Wrapper>
      <h2>{`Your Cart (1)`}</h2>
      <Order />
      {/* <EmptyCart /> */}
    </Wrapper>
  );
}

export { Cart };
