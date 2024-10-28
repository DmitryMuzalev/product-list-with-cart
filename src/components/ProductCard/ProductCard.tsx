import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo";
import { useState } from "react";

const Wrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

type Product = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

function ProductCard({ productData }: Product) {
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
