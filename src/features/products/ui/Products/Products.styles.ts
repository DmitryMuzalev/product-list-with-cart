import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
  gap: 1.5rem;
`;

export const S = { Wrapper, ProductList };
