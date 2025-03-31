import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`;

const CartMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.natural_50};
  border-radius: ${(props) => props.theme.borderRadius.small};
  column-gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

export const S = {
  Wrapper,
  CartMessage,
};
