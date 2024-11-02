import { Total } from "components/Total";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  column-gap: 1rem;

  span {
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-size: 1.5rem;
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