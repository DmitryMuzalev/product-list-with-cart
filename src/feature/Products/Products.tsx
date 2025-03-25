import styled from "styled-components";
import { ProductList } from "./ProductList";
import { loadProducts } from "./productsSlice";
import { useEffect } from "react";
import data from "assets/moke/data.json";
import { useAppDispatch } from "redux/redux-hooks";

const Wrapper = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
`;

function Products() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts({ products: data }));
  }, []);

  return (
    <Wrapper>
      <h2>Desserts</h2>
      <ProductList />
    </Wrapper>
  );
}

export { Products };
