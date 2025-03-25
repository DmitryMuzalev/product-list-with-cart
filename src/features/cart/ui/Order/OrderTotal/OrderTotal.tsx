import { Total } from "common/components/Total/Total";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  column-gap: 1rem;

  span {
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-size: 1.5rem;
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    padding: 1rem;
  }
`;

function OrderTotal() {
  return (
    <Wrapper>
      <Total />
    </Wrapper>
  );
}

export { OrderTotal };
