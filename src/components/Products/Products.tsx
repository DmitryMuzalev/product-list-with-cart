import styled from "styled-components";
import { ProductList } from "./ProductList";

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

function Products() {
  return (
    <Wrapper>
      <h2>Desserts</h2>
      <ProductList />
    </Wrapper>
  );
}

export { Products };
