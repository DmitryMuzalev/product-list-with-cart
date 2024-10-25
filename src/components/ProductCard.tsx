import styled from "styled-components";
import { ProductCardButton } from "./ProductCardButton";
import { ProductCardImage } from "./ProductCardImage";

const Wrapper = styled.article`
  border: 1px solid red;
  overflow: hidden;
`;

function ProductCard() {
  const testProduct = {
    image: {
      thumbnail: "./images/image-waffle-thumbnail.jpg",
      mobile: "./images/image-waffle-mobile.jpg",
      tablet: "./images/image-waffle-tablet.jpg",
      desktop: "./images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  };

  return (
    <Wrapper>
      <ProductCardImage image={testProduct.image} name={testProduct.name} />
      <ProductCardButton />
      <div>
        <p>{testProduct.category}</p>
        <h3>{testProduct.name}</h3>
        <span>{"$" + testProduct.price}</span>
      </div>
    </Wrapper>
  );
}

export { ProductCard };
