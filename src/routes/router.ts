import { Router} from "express"
import { UserController } from "../controllers/UserController"





export class Route{
  private router:Router = Router()
  private user:UserController = new UserController()

  getRouter():Router{
    return this.router
  }

  userRoutes(){
    this.router.post("/",   this.user.create)
    this.router.get("/:id", this.user.findById)
    this.router.get("/",    this.user.findAll)

  }

}

const router = new Route()


export {router}