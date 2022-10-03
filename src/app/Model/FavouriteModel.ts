import { ProductModel } from "./ProductModel";
import { UserModel } from "./UserModel";

export class FavouriteModel {
  id!: number;
  user_id!: UserModel;
  product_id!: ProductModel;
}
