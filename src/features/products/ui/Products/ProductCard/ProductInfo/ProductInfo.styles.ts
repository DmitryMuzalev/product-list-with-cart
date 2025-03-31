import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 40px 0 10px 0;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & > button,
  & > div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Category = styled.p`
  color: ${(props) => props.theme.color.natural_500};
  font-size: 0.875rem;
`;

const Price = styled.span`
  font-weight: ${(props) => props.theme.font.weight.semi_bold};
  color: ${(props) => props.theme.color.primary};
`;

export const S = {
  Wrapper,
  Category,
  Price,
};
