import { RoleModel } from "./RoleModel";

export class UserModel {
    id!:Number;
    fullname!:string;
    email!:string;
    password!:string
    gender!:string;
    birthday!:Date;
    address!:string;
    role_id!: RoleModel;
}
