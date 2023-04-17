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
exports.UserController = void 0;
const UserCreate_1 = require("../services/UserCreate");
const UserDB_1 = require("../database/UserDB");
const User_1 = require("../entities/User");
const UserFindById_1 = require("./../services/UserFindById");
const UserFindAll_1 = require("./../services/UserFindAll");
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userCreate = new UserCreate_1.UserCreate(new UserDB_1.UserDB);
            const body = new User_1.User(req.body);
            userCreate.execute(body)
                .then(user => res.status(201).json({ created: user }))
                .catch(e => res.status(500).json({ message: e }));
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFind = new UserFindById_1.UserFindById(new UserDB_1.UserDB);
            const { id } = req.params;
            userFind.execute(Number(id))
                .then(user => res.status(201).json({ found: user }))
                .catch(e => res.status(500).json({ message: e }));
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFindAll = new UserFindAll_1.UserFindAll(new UserDB_1.UserDB);
            const users = yield userFindAll.execute();
            return res.status(200).json(users);
        });
    }
}
exports.UserController = UserController;
