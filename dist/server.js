"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv').config();
const PORT = Number(process.env.PORT) || 4000;
const server = new app_1.App();
server.listen(PORT, () => {
    console.log(`>  Conectado a porta ${PORT}`);
});
