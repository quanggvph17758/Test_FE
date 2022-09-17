import { OrderModel } from "./OrderModel";
import { ProductModel } from "./ProductModel";

export class OrderDetailModel {
  id!: Number;
  order_id!: OrderModel;
  product_id!: ProductModel;
  price!: Number;
  quantity!: Number;
}
