import { Image } from "common/components/Image/Image";
import { useAppSelector } from "common/hooks";
import { Product } from "common/types";
import { selectCartItem } from "features/cart/model/cartSlice";
import styled from "styled-components";

const Wrapper = styled(Image)<{ $active: boolean }>`
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 2px
      ${(props) => (props.$active ? props.theme.color.primary : "transparent")};
  }
`;

function ProductCardImage({
  id,
  name,
  image,
}: Omit<Product, "price" | "category">) {
  const item = useAppSelector((state) => selectCartItem(state, id));

  return (
    <Wrapper $active={!!item}>
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
    </Wrapper>
  );
}

export { ProductCardImage };
