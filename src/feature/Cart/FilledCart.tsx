import styled from "styled-components";

import { CartList } from "./CartList";
import { CartMessage } from "./CartMessage";
import { Button } from "components/UI/Button";
import { useAppDispatch } from "redux/redux-hooks";
import { CartTotal } from "./CartTotal";
import { confirmOrder } from "./cartSlice";

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
