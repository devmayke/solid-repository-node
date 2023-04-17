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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.UserDB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const uuid_1 = require("uuid");
class UserDB {
    getDB() {
        return UserDB.db;
    }
    connect() {
        UserDB.db = mysql2_1.default.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: "teste",
            port: 3307,
        });
        this.getDB().connect((error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(">  Conectado ao banco");
            }
        });
    }
    findById(id) {
        return new Promise((resolve, rejects) => {
            this.getDB().query(`select * from person where id="${id}"`, (error, results) => {
                if (error) {
                    rejects(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    create(props) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                let columns = Object.keys(props).slice(1, 4).toString();
                let data = Object.values(props).slice(1, 4).map(el => `"${el}"`);
                let id = (0, uuid_1.v4)();
                this.getDB().query(`insert into person (id,${columns}) values ("${id}",${data})`, (error, results) => {
                    if (error) {
                        console.log(error);
                        rejects(error);
                    }
                    else {
                        resolve(results);
                    }
                });
            });
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, rejects) => {
                this.getDB().query("select * from person", (error, results) => {
                    if (error)
                        rejects(error);
                    resolve(results);
                });
            });
        });
    }
}
exports.UserDB = UserDB;
exports.db = new UserDB();
