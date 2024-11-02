import styled from "styled-components";

import { CartList } from "./CartList";
import { CartMessage } from "./CartMessage";
import { Button } from "components/UI/Button";
import { useAppDispatch } from "redux/redux-hooks";
import { confirmOrder } from "feature/Order/order-slice";
import { CartTotal } from "./CartTotal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`;

function FilledCart() {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <CartList />
      <CartTotal />
      <CartMessage />
      <Button $primary onClick={() => dispatch(confirmOrder())}>
        Confirm Order
      </Button>
    </Wrapper>
  );
}

export { FilledCart };
