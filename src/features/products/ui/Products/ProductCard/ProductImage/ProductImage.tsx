import { S } from "./ProductImage.styles";
import { Product } from "common/types";
import { useAppSelector } from "common/hooks";
import { selectCartItem } from "features/cart/model/cartSlice";

type ProductImageProps = Omit<Product, "price" | "category">;

function ProductImage(props: ProductImageProps) {
  const { id, name, image } = props;
  const item = useAppSelector((state) => selectCartItem(state, id));

  return (
    <S.Wrapper $active={!!item}>
      <picture>
        <source
          media="(max-width: 576px)"
          srcSet={`${image.mobile} 576w`}
          sizes="576px"
        />
        <source
          media="(max-width: 768px)"
          srcSet={`${image.tablet} 768w`}
          sizes="768px"
        />
        <source srcSet={`${image.desktop} 1280w`} sizes="1280px" />
        <img src={image.desktop} alt={name} />
      </picture>
    </S.Wrapper>
  );
}

export { ProductImage };
