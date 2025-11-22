"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const project3DB_1 = require("./database/project3DB");
const userRoutes_1 = require("./routes/userRoutes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = require("./routes/authRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// connect database 
(0, project3DB_1.connectDB)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use("/user", userRoutes_1.userRouter);
app.use("/auth", authRoutes_1.authRouter);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map