import styled from "styled-components";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardInfo } from "./ProductCardInfo";

import { ProductType } from "../../types";

const Wrapper = styled.article`
  width: 100%;
  overflow: hidden;
`;

function ProductCard({ data }: { data: ProductType }) {
  const { name, image } = data;

  return (
    <Wrapper>
      <ProductCardImage {...{ name, image }} />
      <ProductCardInfo {...data} />
    </Wrapper>
  );
}

export { ProductCard };
