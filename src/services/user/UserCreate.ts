import { IuserRepository } from '../../repositories/IuserRepository';
import { User } from '../../entities/User';

export class UserCreate{
  private userRepository:IuserRepository
  constructor(userRepository:IuserRepository){
    this.userRepository = userRepository
  }

  async execute(data:User, id?:string):Promise<User>{
    const user = await this.userRepository.create(data)
    return user
  }
}