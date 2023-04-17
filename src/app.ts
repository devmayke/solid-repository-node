import { router } from './routes/router'
import  express  from 'express'
import { db } from './database/UserDB'
import {v4} from 'uuid'




export class App{
  public server:  express.Application
  private port:   number | null =  null

  constructor(){    
    this.server = express()
    this.midlewares()
    this.database()
    this.router()
  }

  private midlewares():void{
    this.server.use(express.json())
  }

  public router():void{
    router.userRoutes()
    this.server.use("/user",router.getRouter())
  }

  private database():void{   
    db.connect()
  }

  public listen(port:number, cb?:()=>void):void{
    this.port = port 
    this.server.listen(this.port)
    console.log(`>  Servidor iniciado em http://localhost:${this.port}`)
    if(cb) cb()
  }
   
  
}