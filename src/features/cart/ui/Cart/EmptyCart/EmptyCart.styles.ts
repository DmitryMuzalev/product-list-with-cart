import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
`;

const Description = styled.span`
  color: ${(props) => props.theme.color.natural_500};
  font-weight: ${(props) => props.theme.font.weight.semi_bold};
  font-size: 0.875rem;
`;

export const S = { Wrapper, Description };
