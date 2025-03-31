import { S } from "./Products.styles";
import data from "common/moke/data.json";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { ProductCard } from "./ProductCard/ProductCard";
import {
  loadProducts,
  selectProducts,
} from "features/products/model/productsSlice";

function Products() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts({ products: data }));
  }, []);

  const productList = useAppSelector(selectProducts);

  return (
    <S.Wrapper>
      <h2>Desserts</h2>
      <S.ProductList>
        {productList.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </S.ProductList>
    </S.Wrapper>
  );
}

export { Products };
