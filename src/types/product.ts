export type ProductType = {
  name: string;
  category: string;
  price: number;
  image: ProductImageType;
};

export type ProductImageType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
