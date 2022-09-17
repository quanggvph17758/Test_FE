import { UserModel } from "./UserModel";

export class OrderModel {
  id!: Number;
  email_user!: String;
  create_date!: Date;
  phone!: String;
  address!: String;
  status!: String;
}
