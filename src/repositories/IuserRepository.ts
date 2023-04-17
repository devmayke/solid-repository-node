import { User } from '../entities/User';
export interface IuserRepository{
  create(props:User):Promise<User>
  findById(id:string):Promise<User>
  findAll():Promise<User>
}