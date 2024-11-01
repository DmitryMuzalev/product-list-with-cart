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

  & > div {
    width: 50%;
    padding: 2.75rem 2.5rem;
    background: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.borderRadius.small};
  }
`;

function ModalWindow({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
}

export { ModalWindow };
