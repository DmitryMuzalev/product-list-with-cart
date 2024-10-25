import styled from "styled-components";
import { ProductCardButton } from "./ProductCardButton";

type ProductCardInfoProps = {
  name: string;
  category: string;
  price: number;
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const Wrapper = styled.div`
  position: relative;
  padding: 40px 0 10px 0;

  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & > button,
  & > div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > p {
    color: ${(props) => props.theme.color.natural_500};
    font-size: 0.875rem;
  }

  & > span {
    font-weight: ${(props) => props.theme.font.weight.semi_bold};
    color: ${(props) => props.theme.color.primary};
  }
`;

function ProductCardInfo({
  category,
  name,
  price,
  counter,
  increment,
  decrement,
}: ProductCardInfoProps) {
  return (
    <Wrapper>
      <ProductCardButton
        counter={counter}
        decrement={decrement}
        increment={increment}
      />
      <p>{category}</p>
      <h3>{name}</h3>
      <span>{"$" + price.toFixed(2)}</span>
    </Wrapper>
  );
}

export { ProductCardInfo };
