import styled from "styled-components";

const Wrapper = styled.div<{ $active: boolean }>`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.small};
  overflow: hidden;

  picture,
  img {
    display: block;
    width: 100%;
    height: auto;
  }

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

type ProductCardImageProps = {
  name: string;
  counter: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

function ProductCardImage({ name, image, counter }: ProductCardImageProps) {
  return (
    <Wrapper $active={!!counter}>
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
