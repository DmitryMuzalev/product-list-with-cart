import styled from "styled-components";

const Layout = styled.main`
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2.25rem;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (${(props) => props.theme.mediaQuery.small_desktop}) {
    grid-template-columns: 1fr;
  }
  @media (${(props) => props.theme.mediaQuery.mobile}) {
    padding: 2rem 1rem;
  }
`;

export { Layout };
