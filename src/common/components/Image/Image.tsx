import styled from "styled-components";

export const Image = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.small};
  overflow: hidden;
  flex-shrink: 0;

  picture,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
