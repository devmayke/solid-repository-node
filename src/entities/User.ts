export class User{
  public id:string | null   = null
  public name:string        = ""
  public age:number | null  = null
  public profession:string  = ""
  

  constructor(props:User){
    Object.assign(this, props)

  }

}