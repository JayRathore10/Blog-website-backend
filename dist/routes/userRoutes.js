"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const isLoginMiddleware_1 = require("../middleware/isLoginMiddleware");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/", userController_1.homePage);
exports.userRouter.get("/profile", isLoginMiddleware_1.isLogIn, userController_1.profileLogged);
exports.userRouter.post("/post", isLoginMiddleware_1.isLogIn, userController_1.makePost);
exports.userRouter.get("/like/:id", isLoginMiddleware_1.isLogIn, userController_1.giveLike);
exports.userRouter.get("/edit/:id", userController_1.editPost);
exports.userRouter.post("/update/:id", userController_1.updatePost);
//# sourceMappingURL=userRoutes.js.map