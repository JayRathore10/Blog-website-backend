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
exports.logoutUser = exports.loginUser = exports.registerUsers = void 0;
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const registerUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, name, email, age, password } = req.body;
        if (!userName || !name || !email || !age || !password) {
            return res.status(404).json({
                message: "Something went wrong"
            });
        }
        const foundUser = yield userModel_1.userModel.findOne({ email });
        if (foundUser) {
            return res.status(500).json({
                message: "User  already found"
            });
        }
        const hashedPassword = yield (0, authMiddleware_1.encrypt)(password);
        const newUser = yield userModel_1.userModel.create({
            userName,
            name,
            email,
            age,
            password: hashedPassword
        });
        const token = jsonwebtoken_1.default.sign({ email, userId: newUser._id }, "secure");
        res.cookie("token", token);
        return res.status(200).json({
            message: "User Successfully registered",
            newUser
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.registerUsers = registerUsers;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.userModel.findOne({ email });
        if (!user) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        }
        const result = (0, authMiddleware_1.compare)(password, user.password);
        if (!result) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        }
        const token = jsonwebtoken_1.default.sign({ email, userId: user._id }, "secure");
        res.cookie("token", token);
        return res.status(200).json({
            message: "Successfully Login"
        });
    }
    catch (err) {
        return res.status(500).json({
            messgae: err
        });
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("token", "");
        return res.status(200).json({
            message: "Logout Successfully"
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.logoutUser = logoutUser;
//# sourceMappingURL=authController.js.map