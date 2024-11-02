import styled from "styled-components";
import { CartItemType } from "types";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: start;
  text-align: left;
  flex-direction: column;
  row-gap: 0.25rem;

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

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    h3 {
      font-size: 0.875rem;
    }
  }
`;

function ItemInfo({
  name,
  quantity,
  price,
  full,
}: Omit<CartItemType, "image" | "category"> & { full?: boolean }) {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <div>
        <span>{`x${quantity}`}</span>
        <span>{`@$${price?.toFixed(2)}`}</span>
        {full && <span>{`$${(quantity * price)?.toFixed(2)}`}</span>}
      </div>
    </Wrapper>
  );
}

export { ItemInfo };
