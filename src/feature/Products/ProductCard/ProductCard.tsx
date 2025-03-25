import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo";

import { ProductType } from "types";

const Wrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

function ProductCard(product: ProductType) {
  const { id, name, image } = product;

  return (
    <Wrapper>
      <ProductCardImage {...{ id, name, image }} />
      <ProductCardInfo {...product} />
    </Wrapper>
  );
}

export { ProductCard };
