"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const router_1 = require("./routes/router");
const express_1 = __importDefault(require("express"));
const UserDB_1 = require("./database/UserDB");
class App {
    constructor() {
        this.port = null;
        this.server = (0, express_1.default)();
        this.midlewares();
        this.database();
        this.router();
    }
    midlewares() {
        this.server.use(express_1.default.json());
    }
    router() {
        router_1.router.userRoutes();
        this.server.use("/user", router_1.router.getRouter());
    }
    database() {
        UserDB_1.db.connect();
    }
    listen(port, cb) {
        this.port = port;
        this.server.listen(this.port);
        console.log(`>  Servidor iniciado em http://localhost:${this.port}`);
        if (cb)
            cb();
    }
}
exports.App = App;
