import styled from "styled-components";

import SuccessIcon from "common/icons/icon-order-confirmed.svg?react";

import { OrderList } from "./OrderList/OrderList";
import { OrderTotal } from "./OrderTotal/OrderTotal";
import { useAppDispatch } from "common/hooks";
import { resetToDefault } from "common/actions";
import { ModalWindow } from "common/actions/ModalWindow";
import { Button } from "common/components/Button/Button";

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
