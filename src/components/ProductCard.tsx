import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo";
import { useState } from "react";

const testProduct = {
  image: {
    thumbnail: "./images/image-creme-brulee-thumbnail.jpg",
    mobile: "./images/image-creme-brulee-mobile.jpg",
    tablet: "./images/image-creme-brulee-tablet.jpg",
    desktop: "./images/image-creme-brulee-desktop.jpg",
  },
  name: "Vanilla Bean Crème Brûlée",
  category: "Crème Brûlée",
  price: 7.0,
};

const Wrapper = styled.article`
  width: 250px;
  overflow: hidden;
`;

function ProductCard() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <Wrapper>
      <ProductCardImage {...testProduct} counter={counter} />
      <ProductCardInfo
        {...testProduct}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    </Wrapper>
  );
}

export { ProductCard };
