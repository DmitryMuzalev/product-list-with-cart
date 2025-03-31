import styled from "styled-components";
import { Image } from "common/components/Image/Image";

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

export const S = { Wrapper };
