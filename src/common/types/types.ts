export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: ProductImage;
};

export type ProductImage = {
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
  image: Pick<ProductImage, "thumbnail">;
};
