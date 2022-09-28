import { UserModel } from "./UserModel";

export class OrderModel {
  id!: Number;
  user_id!: UserModel;
  //user_id!: string;
  create_date!: Date;
  phone!: String;
  address!: String;
  status!: String;
}
