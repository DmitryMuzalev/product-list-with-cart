import { ItemInfo } from "components/ItemInfo";
import styled from "styled-components";
import { CartItemType } from "types";
import { Thumbnail } from "./Thumbnail";

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  border-bottom: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.color.natural_100};

  & > span {
    color: ${(props) => props.theme.color.natural_900};
    font-weight: ${(props) => props.theme.font.weight.semi_bold};
    font-size: 1.125rem;
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    padding: 1rem;
    & > span {
      font-size: 1rem;
    }
  }
`;

function OrderListItem({
  name,
  image,
  price,
  quantity,
}: Omit<CartItemType, "category">) {
  return (
    <Wrapper>
      <Thumbnail src={image.thumbnail} alt={name} />
      <ItemInfo {...{ name, price, quantity }} />
      <span>{`$${(quantity * price)?.toFixed(2)}`}</span>
    </Wrapper>
  );
}

export { OrderListItem };
