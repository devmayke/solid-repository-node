import { User } from '../entities/User';
import { IuserRepository } from './../repositories/IuserRepository';
import mysql from 'mysql2'
import {v4} from 'uuid'

export class UserDB implements IuserRepository{
  private static db:any

  public static getDB(){
    return UserDB.db
  }  

  public static connect(){
        
    UserDB.db = mysql.createConnection({
      host:       process.env.MYSQL_HOST,
      user:       process.env.MYSQL_USER,
      password:   process.env.MYSQL_PASSWORD,    
      database:   "teste",
      port:       3307,
    });
    UserDB.db.connect((error:any)=>{
      if(error){
        console.log(error)
      }else{
        console.log(">  Conectado ao banco")        
      }
    })  
   
  }

  findById(id: string): Promise<User> {
    return new Promise((resolve, rejects)=>{     
        UserDB.db.query(`select * from person where id="${id}"`, (error:any, results:any)=>{
          if(error){
            rejects(error)
          }else{
            resolve(results)
          }
        })   
     
    })
  }

  public async create(props: User): Promise<User> {    
    return new Promise((resolve, rejects)=>{
      let columns = Object.keys(props).slice(1,4).toString()
      let data = Object.values(props).slice(1,4).map(el=>`"${el}"`) 
      let id = v4()    
      
      UserDB.db.query(`insert into person (id,${columns}) values ("${id}",${data})`, (error:any, results:any)=>{
        if(error){
          console.log(error)
          rejects(error)
        }else{
          resolve(results)
        }
      })       
    }) 
  }

  public async findAll(): Promise<User> {
      return new Promise((resolve, rejects)=>{
        UserDB.db.query("select * from person", (error:any, results:any)=>{
          if(error)rejects(error)
          resolve(results)
        })
      })
  }
}

export const db = UserDB.getDB()