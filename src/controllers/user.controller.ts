import { Request, Response } from "express-serve-static-core"
import createUserPersistence from "../db/mysql/createUser.persistance";
import { UserRepository } from "../db/mysql/user.repository";

export const createUser=async (req:Request, res:Response)=>{
    const {username, password}=req.body;
    try{
        const user = await createUserPersistence({id:null, username:username, password:password})
        return res.json(user)
    }catch(error){
        return res.status(400).send("An error occured")
    }
}

export const getUsers=async (req:Request, res:Response)=>{
    const users=await new UserRepository().getAll();
    return res.json(users)
}

export const getUser=async (req:Request, res:Response)=>{
    const id=+req.params.id;
    const user=await new UserRepository().getById(id);
    if(!user)return res.status(404).send("User not found")
    return res.json(user)
}

export const updateUser=async (req:Request, res:Response)=>{
    const id=+req.params.id;
    const {username, password}=req.body;
    const user={id:id, username:username, password:password};
    const updatedUser=await new UserRepository().update(user);
    if(!updatedUser)return res.status(404).send("User not found");
    return res.json(updatedUser);
}