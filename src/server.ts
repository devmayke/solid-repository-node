import { App } from "./app";
require('dotenv').config()
const PORT:number = Number(process.env.PORT) || 4000

const server = new App()

server.listen(PORT,()=>{
  console.log(`>  Conectado a porta ${PORT}`)
})

