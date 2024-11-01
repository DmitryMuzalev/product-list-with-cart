import { ModalWindow } from "components/UI/ModalWindow";
import styled from "styled-components";

import SuccessIcon from "assets/icons/icon-order-confirmed.svg";
import { Button } from "components/UI/Button";
import { useAppDispatch } from "redux/redux-hooks";
import { resetToDefault } from "redux/root-actions";
import { OrderList } from "./OrderList";
import { Total } from "components/Total";

const Wrapper = styled.div``;

function Order() {
  const dispatch = useAppDispatch();

  return (
    <ModalWindow>
      <Wrapper>
        <SuccessIcon />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy food!</p>
        <OrderList />
        <Total />
        <Button $primary onClick={() => dispatch(resetToDefault())}>
          Start New Order
        </Button>
      </Wrapper>
    </ModalWindow>
  );
}

export { Order };
