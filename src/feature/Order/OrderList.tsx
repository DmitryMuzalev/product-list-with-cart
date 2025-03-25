import { selectCart } from "feature/Cart/cartSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { OrderListItem } from "./OderListItem";

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
