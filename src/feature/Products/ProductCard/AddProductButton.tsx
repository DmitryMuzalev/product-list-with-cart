import styled from "styled-components";
import { Button } from "components/UI/Button";
import CartIcon from "assets/icons/icon-add-to-cart.svg";

type AddProductButtonType = {
  cb: () => void;
};

const Wrapper = styled(Button)`
  width: 100%;
  max-width: 10rem;
  display: flex;
  align-items: center;
  column-gap: 0.625rem;
  background-color: ${(props) => props.theme.color.natural_50};
  border: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.color.natural_400};
  transition: all ${(props) => props.theme.transitionDuration};

  &:hover {
    border-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
  }
`;

function AddProductButton({ cb }: AddProductButtonType) {
  return (
    <Wrapper onClick={cb}>
      <img src={CartIcon} alt="cart" />
      <span>Add to Cart</span>
    </Wrapper>
  );
}

export { AddProductButton };
