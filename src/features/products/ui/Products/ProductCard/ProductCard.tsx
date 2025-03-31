import { S } from "./ProductCard.styles";
import { Product } from "common/types";
import { ProductImage } from "./ProductImage/ProductImage";
import { ProductInfo } from "./ProductInfo/ProductInfo";

function ProductCard(props: Product) {
  const { id, name, image } = props;

  return (
    <S.Wrapper>
      <ProductImage {...{ id, name, image }} />
      <ProductInfo {...props} />
    </S.Wrapper>
  );
}

export { ProductCard };
