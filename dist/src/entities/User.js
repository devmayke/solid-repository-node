"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.id = null;
        this.name = "";
        this.age = null;
        this.profession = "";
        Object.assign(this, props);
    }
}
exports.User = User;
