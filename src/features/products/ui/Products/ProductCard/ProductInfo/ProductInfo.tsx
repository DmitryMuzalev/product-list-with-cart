import { S } from "./ProductInfo.styles";

import { useAppDispatch, useAppSelector } from "common/hooks";
import { Product } from "common/types";

import {
  addProduct,
  removeProductUnit,
  selectCartItem,
} from "features/cart/model/cartSlice";

import { AddProductButton } from "./AddProductButton/AddProductButton";
import { CounterButton } from "./CounterButton/CounterButton";

function ProductInfo(product: Product) {
  const dispatch = useAppDispatch();

  const item = useAppSelector((state) => selectCartItem(state, product.id));

  const handlerIncrementProductQuantity = () =>
    dispatch(addProduct({ product }));

  const handlerDecrementProductQuantity = () =>
    dispatch(removeProductUnit({ id: product.id }));

  return (
    <S.Wrapper>
      {!item ? (
        <AddProductButton cb={handlerIncrementProductQuantity} />
      ) : (
        <CounterButton
          value={item.quantity}
          increment={handlerIncrementProductQuantity}
          decrement={handlerDecrementProductQuantity}
        />
      )}
      <S.Category>{product.category}</S.Category>
      <h3>{product.name}</h3>
      <S.Price>{"$" + product.price.toFixed(2)}</S.Price>
    </S.Wrapper>
  );
}

export { ProductInfo };
