import { ProductType } from "./product";

export type OrderItemType = ProductType & {
  quantity: number;
};
