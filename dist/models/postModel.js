"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "user"
        }
    ]
});
exports.postModel = mongoose_1.default.model("post", postSchema);
//# sourceMappingURL=postModel.js.map