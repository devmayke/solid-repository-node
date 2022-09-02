import { Response, Request } from 'express';
import { UserDB } from '../database/UserDB';
import { User } from '../entities/User';
import { UserCreate } from '../services/user/UserCreate';
import { UserFindById } from './../services/user/UserFindById';
import { UserFindAll } from './../services/user/UserFindAll';

export class UserController{  

  public async create(req:Request, res:Response){
    const userCreate= new UserCreate(new UserDB)  
    const body= new User(req.body)   
    userCreate.execute(body)
    .then(user=>res.status(201).json({created:user}))
    .catch(e=>res.status(500).json({message:e}))  
  }

  public async findById(req:Request, res:Response){
    const userFind = new UserFindById(new UserDB)
    const {id} = req.params     
    userFind.execute(id)
    .then(user=> res.status(201).json({found:user}))
    .catch(e=>res.status(500).json({message:e})) 
  }

  public async findAll(req:Request, res:Response){
    const userFindAll = new UserFindAll(new UserDB)
    const users = await userFindAll.execute()
    return res.status(200).json(users)
  }
}


