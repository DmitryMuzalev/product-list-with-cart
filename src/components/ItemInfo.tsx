import styled from "styled-components";
import { CartItemType } from "types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  h3 {
    font-size: 1rem;
  }

  & > div {
    display: flex;
    column-gap: 0.5rem;

    span:nth-child(1) {
      color: ${(props) => props.theme.color.primary};
      font-weight: ${(props) => props.theme.font.weight.bold};
      margin-right: 0.5rem;
    }

    span:nth-child(2) {
      color: ${(props) => props.theme.color.natural_400};
    }

    span:nth-child(3) {
      color: ${(props) => props.theme.color.natural_500};
      font-weight: ${(props) => props.theme.font.weight.semi_bold};
    }
  }
`;

function ItemInfo({
  name,
  quantity,
  price,
}: Omit<CartItemType, "image" | "category">) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <div>
        <span>{`x${quantity}`}</span>
        <span>{`@$${price?.toFixed(2)}`}</span>
        <span>{`$${(quantity * price)?.toFixed(2)}`}</span>
      </div>
    </Wrapper>
  );
}

export { ItemInfo };
