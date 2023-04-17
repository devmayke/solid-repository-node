import { User } from '../../entities/User';
import { IuserRepository } from '../../repositories/IuserRepository';
export class UserFindAll {

  private userRepository:IuserRepository
  constructor(userRepository:IuserRepository){
    this.userRepository = userRepository
  }

  async execute():Promise<User>{
    const users = this.userRepository.findAll()
    return users
  }
}