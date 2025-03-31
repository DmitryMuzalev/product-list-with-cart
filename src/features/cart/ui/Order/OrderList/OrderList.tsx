import styled from "styled-components";
import { selectCart } from "features/cart/model/cartSlice";
import { OrderListItem } from "./OrderListItem/OderListItem";
import { useAppSelector } from "common/hooks";

const Wrapper = styled.ul`
  width: 100%;
`;

function OrderList() {
  const cartList = useAppSelector(selectCart);

  return (
    <Wrapper>
      {cartList.map((item, index) => {
        return <OrderListItem key={index} {...item} />;
      })}
    </Wrapper>
  );
}

export { OrderList };
