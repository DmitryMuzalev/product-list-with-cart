import styled from "styled-components";
import { useAppSelector } from "redux/redux-hooks";
import { ProductType } from "types";
import { selectCartItemQuantity } from "feature/Cart/cart-slice";
import { Image } from "components/Image";

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
  name,
  image,
}: Omit<ProductType, "price" | "category">) {
  const quantity = useAppSelector((state) =>
    selectCartItemQuantity(state, name)
  );

  return (
    <Wrapper $active={!!quantity}>
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
