import styled, { css } from "styled-components";

type ButtonPropsType = {
  $primary?: boolean;
};

const Button = styled.button<ButtonPropsType>`
  width: 100%;
  padding: 10px 25px;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.font.weight.semi_bold};
  color: inherit;
  background-color: ${(props) => props.theme.color.primary};

  ${(props) =>
    props.$primary &&
    css<ButtonPropsType>`
      color: ${(props) => props.theme.color.natural_50};
      padding: 17px 40px;
      font-size: 1rem;
      transition: background-color ${(props) => props.theme.transitionDuration};
      &:hover {
        background-color: ${(props) => props.theme.color.natural_800};
      }
    `}
`;

export { Button };
