import styled from "styled-components";
const Wrapper = styled.div<{ $padding?: string; $mobilePadding?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.$padding || "0.5rem 0"};
  column-gap: 1rem;

  span {
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-size: 1.5rem;
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    padding: ${(props) => props.$mobilePadding || props.$padding || "0.5rem 0"};
  }
`;

export const S = {
  Wrapper,
};
