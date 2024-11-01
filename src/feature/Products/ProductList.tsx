import styled from "styled-components";
import { ProductCard } from "./ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { selectProducts } from "./products-slice";

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
  gap: 1.5rem;
`;

function ProductList() {
  const productList = useSelector(selectProducts);
  return (
    <Wrapper>
      {productList.map((product, index) => {
        return <ProductCard key={index} data={product} />;
      })}
    </Wrapper>
  );
}

export { ProductList };
