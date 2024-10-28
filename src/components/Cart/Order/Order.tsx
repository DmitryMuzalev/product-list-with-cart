import styled from "styled-components";

import { OrderList } from "./OrderList";
import { OrderTotal } from "./OrderTotal";
import { OrderMessage } from "./OrderMessage";
import { Button } from "../../UI/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`;

function Order() {
  return (
    <Wrapper>
      <OrderList />
      <OrderTotal />
      <OrderMessage />
      <Button $primary>Confirm Order</Button>
    </Wrapper>
  );
}

export { Order };
