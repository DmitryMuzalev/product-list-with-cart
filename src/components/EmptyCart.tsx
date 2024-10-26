import styled from "styled-components";

import EmptyCartIcon from "../assets/icons/illustration-empty-cart.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;

  span {
    color: ${(props) => props.theme.color.natural_500};
    font-weight: ${(props) => props.theme.font.weight.semi_bold};
    font-size: 0.875rem;
  }
`;

function EmptyCart() {
  return (
    <Wrapper>
      <img src={EmptyCartIcon} alt="Empty Cart" />
      <span>Your added items will appear here</span>{" "}
    </Wrapper>
  );
}

export { EmptyCart };
