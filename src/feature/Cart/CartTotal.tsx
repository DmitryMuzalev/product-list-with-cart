import { Total } from "components/Total";
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

function CartTotal() {
  return (
    <Wrapper>
      <Total />
    </Wrapper>
  );
}

export { CartTotal };
