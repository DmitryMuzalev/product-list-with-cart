import styled from "styled-components";

import { Button } from "common/components/Button/Button";
import { useAppDispatch } from "common/hooks";
import { CartList } from "./CartList/CartList";
import { CartTotal } from "./CartTotal/CartTotal";
import { CartMessage } from "./CartMessage/CartMessage";
import { confirmOrder } from "features/cart/model/cartSlice";

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
