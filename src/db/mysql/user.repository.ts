import { OkPacket } from "mysql2";
import { IUser } from "../../entity/mysql/user.entity";
import { User } from "../../models/user.model";
import connection from "../../utils/database";

export class UserRepository{
    getAll():Promise<IUser[]>{
        return new Promise((resolve, reject)=>{
            connection.query<IUser[]>(
                "SELECT * FROM User",
                (err, res)=>{
                    if(err)reject(err)
                    else resolve(res)
                }
            )
        })
    }

    getById(id:number):Promise<IUser> |undefined{
        return new Promise((resolve, reject)=>{
            connection.query<IUser[]>(
                "SELECT * FROM User WHERE id=? LIMIT 1",
                [id],
                (err, res)=>{
                    if(err)reject(err)
                    else resolve(res?.[0])
                }
            )
        })
    }

    update(user:User):Promise<IUser> |undefined{
        return new Promise((resolve, reject)=>{
            connection.query<OkPacket>(
                "UPDATE User SET username=?, password=? WHERE id=?",
                [user.username, user.password, user.id],
                (err, res)=>{
                    if(err)reject(err)
                    else this.getById(user.id!)?.then(resolve).catch(reject)
                }
            )
        })
    }
}