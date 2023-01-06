import connection from "../../utils/database";  
import { IUser } from "../../entity/mysql/user.entity";
import { User } from "../../models/user.model";
import { OkPacket } from "mysql2";

function createUserPersistence(user:User):Promise<IUser>{
    return new Promise((resolve:any, reject:any)=>{
        connection.query<OkPacket>(
            "INSERT INTO User VALUES (null, ?, ?)",
            [user.username, user.password],
            (err, res)=>{
                if(err) reject(err)
                else resolve({id:res.insertId, username:user.username, password:user.password})
            }
        )
    })
}

export default createUserPersistence