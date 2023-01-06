import { User } from "../../models/user.model";
import { RowDataPacket } from "mysql2";

export interface IUser  extends RowDataPacket, User{
    
}