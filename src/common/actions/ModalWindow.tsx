import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  padding: 2rem 0;

  & > div {
    width: 100%;
    max-width: 600px;
    padding: 2.75rem 2.5rem;
    margin: auto 1rem;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.borderRadius.small};
  }

  @media (${(props) => props.theme.mediaQuery.mobile}) {
    & > div {
      padding: 2.5rem 1.5rem;
      margin: auto;
    }
  }
`;

function ModalWindow({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => void (document.body.style.overflow = "visible");
  }, []);
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
}

export { ModalWindow };
