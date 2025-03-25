import styled from "styled-components";
import { loadProducts, selectProducts } from "../../model/productsSlice";
import { useEffect } from "react";
import data from "common/moke/data.json";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard/ProductCard";

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

function Products() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts({ products: data }));
  }, []);

  const productList = useSelector(selectProducts);

  return (
    <Wrapper>
      <h2>Desserts</h2>
      <ProductList>
        {productList.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </ProductList>
    </Wrapper>
  );
}

export { Products };
