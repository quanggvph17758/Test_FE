import { UserModel } from "./UserModel";

export class OrderModel {
  id!: number;
  user_id!: UserModel;
  create_date!: Date;
  phone!: string;
  address!: string;
  status!: string;
  update_user!: string
}
