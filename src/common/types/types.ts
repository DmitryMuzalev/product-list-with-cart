export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: ProductImageSet;
};

export type ProductImageSet = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: Pick<ProductImageSet, "thumbnail">;
};
