import styled from "styled-components";
import { ProductType } from "types";
import { useAppDispatch, useAppSelector } from "redux/redux-hooks";
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
  selectCartItemQuantity,
} from "feature/Cart/cart-slice";
import { AddProductButton } from "./AddProductButton";
import { CounterButton } from "./CounterButton";

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

  & > p {
    color: ${(props) => props.theme.color.natural_500};
    font-size: 0.875rem;
  }

  & > span {
    font-weight: ${(props) => props.theme.font.weight.semi_bold};
    color: ${(props) => props.theme.color.primary};
  }
`;

function ProductCardInfo({ name, price, category, image }: ProductType) {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector((state) =>
    selectCartItemQuantity(state, name)
  );

  const handlerAddProductBtn = () =>
    dispatch(addProduct({ name, price, category, image }));

  const handlerIncrement = () => {
    dispatch(incrementQuantity(name));
  };

  const handlerDecrement = () => {
    dispatch(decrementQuantity(name));
  };

  return (
    <Wrapper>
      {!quantity ? (
        <AddProductButton cb={handlerAddProductBtn} />
      ) : (
        <CounterButton
          value={quantity}
          increment={handlerIncrement}
          decrement={handlerDecrement}
        />
      )}
      <p>{category}</p>
      <h3>{name}</h3>
      <span>{"$" + price.toFixed(2)}</span>
    </Wrapper>
  );
}

export { ProductCardInfo };
