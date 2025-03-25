import styled from "styled-components";

import { AddProductButton } from "./AddProductButton/AddProductButton";
import { CounterButton } from "./CounterButton/CounterButton";
import { useAppDispatch, useAppSelector } from "common/hooks";
import {
  addProduct,
  removeProduct,
  selectCartItem,
} from "features/cart/model/cartSlice";
import { Product } from "common/types";

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

function ProductCardInfo(product: Product) {
  const dispatch = useAppDispatch();

  const item = useAppSelector((state) => selectCartItem(state, product.id));

  const handlerAddProduct = () => dispatch(addProduct({ product }));
  const handlerRemoveProduct = () =>
    dispatch(removeProduct({ id: product.id }));

  return (
    <Wrapper>
      {!item ? (
        <AddProductButton cb={handlerAddProduct} />
      ) : (
        <CounterButton
          value={item.quantity}
          increment={handlerAddProduct}
          decrement={handlerRemoveProduct}
        />
      )}
      <p>{product.category}</p>
      <h3>{product.name}</h3>
      <span>{"$" + product.price.toFixed(2)}</span>
    </Wrapper>
  );
}

export { ProductCardInfo };
