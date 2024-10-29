import styled from "styled-components";
import { Order } from "./Order/Order";
//import { EmptyCart } from "./EmptyCart";

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
  return (
    <Wrapper>
      <h2>{`Your Cart (1)`}</h2>
      <Order />
      {/* <EmptyCart /> */}
    </Wrapper>
  );
}

export { Cart };
