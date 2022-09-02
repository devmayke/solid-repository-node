"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rota = void 0;
const UserCreate_1 = require("./../services/UserCreate");
const UserDB_1 = require("../db/UserDB");
const User_1 = require("../entities/User");
class Rota {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCreate = new UserCreate_1.UserCreate(new UserDB_1.UserDB);
            const user = new User_1.User(req.body);
            const { name, age, profession } = req.body;
            userCreate.execute(user)
                .then(user2 => res.status(200).json({ created: user2 }))
                .catch(e => {
                res.status(500).json({ message: e });
            });
        });
    }
}
exports.Rota = Rota;
