export type ProductType = {
  id: string;
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

export type CartItemType = ProductType & {
  quantity: number;
};
