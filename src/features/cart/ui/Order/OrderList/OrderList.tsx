import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCart } from "features/cart/model/cartSlice";
import { OrderListItem } from "./OrderListItem/OderListItem";

const Wrapper = styled.ul`
  width: 100%;
`;

function OrderList() {
  const cartList = useSelector(selectCart);

  return (
    <Wrapper>
      {cartList.map((item, index) => {
        return <OrderListItem key={index} {...item} />;
      })}
    </Wrapper>
  );
}

export { OrderList };
