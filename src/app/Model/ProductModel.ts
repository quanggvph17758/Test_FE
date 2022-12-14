import { CategoryModel } from "./CategoryModel";

export class ProductModel {
  id!: Number;
  name!: String;
  images!: String;
  create_Date!: Date;
  update_Date!: Date;
  price!: number;
  category_id!: CategoryModel;
  update_user!: string;
}
