import { S } from "./EmptyCart.styles";
import EmptyCartIcon from "common/icons/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <S.Wrapper>
      <img src={EmptyCartIcon} alt="Empty Cart" />
      <S.Description>Your added items will appear here</S.Description>
    </S.Wrapper>
  );
}

export { EmptyCart };
