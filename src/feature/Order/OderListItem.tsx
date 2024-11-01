import { ItemInfo } from "components/ItemInfo";
import styled from "styled-components";
import { CartItemType } from "types";

const Wrapper = styled.li``;

//! OrderPreview

function OrderListItem({
  name,
  image,
  price,
  quantity,
}: Omit<CartItemType, "category">) {
  return (
    <Wrapper>
      <ItemInfo {...{ name, price, quantity }} />
    </Wrapper>
  );
}

export { OrderListItem };
