import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage/ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo/ProductCardInfo";
import { Product } from "common/types";

const Wrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

function ProductCard(product: Product) {
  const { id, name, image } = product;

  return (
    <Wrapper>
      <ProductCardImage {...{ id, name, image }} />
      <ProductCardInfo {...product} />
    </Wrapper>
  );
}

export { ProductCard };
