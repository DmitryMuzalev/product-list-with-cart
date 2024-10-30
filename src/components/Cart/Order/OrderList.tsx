import styled from "styled-components";
import { OrderListItem } from "./OrderListItem";
import { useSelector } from "react-redux";
import { selectOrder } from "../../../redux/slices/order-slice";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

function OrderList() {
  const orderList = useSelector(selectOrder);

  return (
    <Wrapper>
      {orderList.map((item, index) => (
        <OrderListItem key={index} {...item} />
      ))}
    </Wrapper>
  );
}

export { OrderList };
