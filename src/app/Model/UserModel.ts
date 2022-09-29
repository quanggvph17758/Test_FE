import { RoleModel } from "./RoleModel";

export class UserModel {
    id!:number;
    fullname!:string;
    email!:string;
    password!:string
    gender!:string;
    birthday!:Date;
    address!:string;
    active!: string;
    role_id!: RoleModel;
}
