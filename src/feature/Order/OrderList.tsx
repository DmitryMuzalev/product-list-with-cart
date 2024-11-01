import { selectCart } from "feature/Cart/cart-slice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OrderListItem } from "./OderListItem";

const Wrapper = styled.ul``;

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
