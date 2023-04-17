"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.Route = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
class Route {
    constructor() {
        this.router = (0, express_1.Router)();
        this.user = new UserController_1.UserController();
    }
    getRouter() {
        return this.router;
    }
    userRoutes() {
        this.router.post("/", this.user.create);
        this.router.get("/:id", this.user.findById);
        this.router.get("/", this.user.findAll);
    }
}
exports.Route = Route;
const router = new Route();
exports.router = router;
