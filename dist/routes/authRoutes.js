"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post("/register", authController_1.registerUsers);
exports.authRouter.post("/login", authController_1.loginUser);
exports.authRouter.get("/logout", authController_1.logoutUser);
//# sourceMappingURL=authRoutes.js.map