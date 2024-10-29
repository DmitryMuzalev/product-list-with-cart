import { ProductType } from "./product";

export type OrderItemType = ProductType & {
  amount: number;
};
