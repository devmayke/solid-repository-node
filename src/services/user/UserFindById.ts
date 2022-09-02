import { IuserRepository } from '../../repositories/IuserRepository';
import { User } from '../../entities/User';

export class UserFindById{
  private userRepository:IuserRepository
  constructor(userRepository:IuserRepository){
    this.userRepository = userRepository
  }

  async execute(id:string):Promise<User>{
    const user = await this.userRepository.findById(id)
    return user
  }
}