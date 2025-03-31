import { S } from "./FilledCart.styles";

import CarbonNeutralIcon from "common/icons/icon-carbon-neutral.svg?react";

import { useAppDispatch } from "common/hooks";
import { CartList } from "./CartList/CartList";
import { Button } from "common/components/Button/Button";
import { confirmOrder } from "features/cart/model/cartSlice";
import { Total } from "common/components/Total/Total";

function FilledCart() {
  const dispatch = useAppDispatch();
  const handleConfirm = () => dispatch(confirmOrder());

  return (
    <S.Wrapper>
      <CartList />
      <Total />

      <S.CartMessage>
        <CarbonNeutralIcon />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </S.CartMessage>

      <Button $primary onClick={handleConfirm}>
        Confirm Order
      </Button>
    </S.Wrapper>
  );
}

export { FilledCart };
