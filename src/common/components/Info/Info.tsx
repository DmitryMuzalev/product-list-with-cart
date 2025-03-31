import styled from "styled-components";

type InfoProps = {
  name: string;
  price: number;
  quantity: number;
  variant?: "default" | "compact";
  showTotal?: boolean;
  showAtPrice?: boolean;
};

const Wrapper = styled.div<{ $variant: "default" | "compact" }>`
  flex-grow: 1;
  display: flex;
  align-items: start;
  text-align: left;
  flex-direction: column;
  row-gap: ${(props) => (props.$variant === "compact" ? "0.1rem" : "0.25rem")};

  h3 {
    font-size: ${(props) =>
      props.$variant === "compact" ? "0.875rem" : "1rem"};
  }

  .price-row {
    display: flex;
    column-gap: 0.5rem;
    font-size: ${(props) =>
      props.$variant === "compact" ? "0.875rem" : "1rem"};
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    h3 {
      font-size: 0.875rem;
    }
  }
`;

const Quantity = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-right: 0.5rem;
`;

const Price = styled.span<{ $type?: "secondary" | "total" }>`
  ${(props) => {
    switch (props.$type) {
      case "secondary":
        return `color: ${props.theme.color.natural_400};`;
      case "total":
        return `color: ${props.theme.color.natural_500}; font-weight: ${props.theme.font.weight.semi_bold};`;
      default:
        return "";
    }
  }}
`;

function Info(props: InfoProps) {
  const {
    name,
    price,
    quantity,
    variant = "default",
    showTotal = false,
  } = props;

  return (
    <Wrapper $variant={variant}>
      <h3>{name}</h3>
      <div className="price-row">
        <Quantity>{`x${quantity}`}</Quantity>
        <Price $type="secondary">{`@$${price.toFixed(2)}`}</Price>
        {showTotal && (
          <Price $type="total">{`$${(quantity * price).toFixed(2)}`}</Price>
        )}
      </div>
    </Wrapper>
  );
}

export { Info };

/*
import { CartItem } from "common/types";
import styled from "styled-components";

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

function Info({
  name,
  quantity,
  price,
  full,
}: Omit<CartItem, "id" | "image"> & { full?: boolean }) {
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

export { Info };
*/
