import styled from "styled-components";
import { OrderListItem } from "./OrderListItem";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

function OrderList() {
  return (
    <Wrapper>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </Wrapper>
  );
}

export { OrderList };
