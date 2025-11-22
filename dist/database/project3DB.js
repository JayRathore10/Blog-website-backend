"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    try {
        mongoose_1.default.connect(`mongodb+srv://JayRathore10:Jay9575Rathore@blogdb.kkimp1o.mongodb.net/`);
        console.log("Database connected");
    }
    catch (err) {
        console.log(err);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=project3DB.js.map