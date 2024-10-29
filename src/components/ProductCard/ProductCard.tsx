import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo";
import { useState } from "react";
import { ProductType } from "../../types";

const Wrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

function ProductCard({ productData }: ProductType) {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <Wrapper>
      <ProductCardImage {...productData} counter={counter} />
      <ProductCardInfo
        {...productData}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </Wrapper>
  );
}

export { ProductCard };
