import { ModalWindow } from "components/UI/ModalWindow";
import styled from "styled-components";

import SuccessIcon from "assets/icons/icon-order-confirmed.svg?react";
import { Button } from "components/UI/Button";
import { useAppDispatch } from "redux/redux-hooks";
import { resetToDefault } from "redux/root-actions";
import { OrderList } from "./OrderList";
import { OrderTotal } from "./OrderTotal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
    text-align: left;
    line-height: 1.2;
  }

  & > p {
    color: ${(props) => props.theme.color.natural_500};
  }

  & > div {
    width: 100%;
    background-color: ${(props) => props.theme.color.natural_50};
    border-radius: ${(props) => props.theme.borderRadius.small};
    margin: 1.75rem 0;
  }
`;

function Order() {
  const dispatch = useAppDispatch();

  return (
    <ModalWindow>
      <Wrapper>
        <SuccessIcon />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy food!</p>
        <div>
          <OrderList />
          <OrderTotal />
        </div>
        <Button $primary onClick={() => dispatch(resetToDefault())}>
          Start New Order
        </Button>
      </Wrapper>
    </ModalWindow>
  );
}

export { Order };
