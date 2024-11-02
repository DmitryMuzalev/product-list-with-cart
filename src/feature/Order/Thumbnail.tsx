import { Image } from "components/Image";
import styled from "styled-components";

const Wrapper = styled(Image)`
  width: 3rem;
  height: 3rem;
`;

function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
    </Wrapper>
  );
}

export { Thumbnail };
