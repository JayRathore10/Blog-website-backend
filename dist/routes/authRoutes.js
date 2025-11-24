"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.router = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
exports.router = (0, express_1.Router)();
exports.router.post("/register", authController_1.registerUsers);
exports.router.post("/login", authController_1.loginUser);
exports.router.get("/logout", authController_1.logoutUser);
exports.router.get("/test", (req, res) => {
    res.send("Auth router working!");
});
exports.authRouter = exports.router;
//# sourceMappingURL=authRoutes.js.map