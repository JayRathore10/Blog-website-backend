"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isLogIn = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "You must be logged in"
            });
        }
        const secret = process.env.JWT_SECRET;
        const data = jsonwebtoken_1.default.verify(token, secret);
        req.user = data;
        next();
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
};
exports.isLogIn = isLogIn;
//# sourceMappingURL=isLoginMiddleware.js.map