import styled from "styled-components";

import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";
import { CartMessage } from "./CartMessage";
import { Button } from "components/UI/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
`;

function FilledCart() {
  return (
    <Wrapper>
      <CartList />
      <CartTotal />
      <CartMessage />
      <Button $primary>Confirm Order</Button>
    </Wrapper>
  );
}

export { FilledCart };