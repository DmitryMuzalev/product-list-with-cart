import styled from "styled-components";

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

function OrderTotal() {
  return (
    <Wrapper>
      <p>Order Total</p>
      <span>$46.50</span>
    </Wrapper>
  );
}

export { OrderTotal };
