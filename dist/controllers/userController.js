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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.editPost = exports.giveLike = exports.makePost = exports.loginPage = exports.profileLogged = exports.homePage = void 0;
const userModel_1 = require("../models/userModel");
const postModel_1 = require("../models/postModel");
const homePage = (req, res) => {
    try {
        return res.status(200).json({
            message: "Home Page",
        });
    }
    catch (err) {
        return res.status(500).json({
            meesage: err
        });
    }
};
exports.homePage = homePage;
const profileLogged = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield userModel_1.userModel.findOne({ email: (_a = req.user) === null || _a === void 0 ? void 0 : _a.email });
        if (!user) {
            return res.status(401).json({
                messgae: "User not found"
            });
        }
        yield user.populate("posts");
        const posts = yield postModel_1.postModel.findOne({ user: user._id });
        if (!posts) {
            return res.status(401).json({
                message: "Not Found"
            });
        }
        return res.status(200).json({
            message: "Profile",
            user,
            posts: user.posts
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.profileLogged = profileLogged;
const loginPage = (req, res) => {
    return res.send("hello");
};
exports.loginPage = loginPage;
const makePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield userModel_1.userModel.findOne({ email: (_a = req.user) === null || _a === void 0 ? void 0 : _a.email });
        const { content } = req.body;
        // not needed checked through isLoginMiddleware
        if (!user && !content) {
            return res.status(401).json({
                message: "Something went wrong"
            });
        }
        const post = yield postModel_1.postModel.create({
            user: user === null || user === void 0 ? void 0 : user._id,
            content: content
        });
        user === null || user === void 0 ? void 0 : user.posts.push(post._id);
        yield (user === null || user === void 0 ? void 0 : user.save());
        return res.status(200).json({
            message: "New post created",
            content
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.makePost = makePost;
const giveLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const post = yield postModel_1.postModel.findOne({ _id: req.params.id }).populate("user");
        if (!post) {
            return res.status(401).json({
                message: "Not Found"
            });
        }
        if (post.likes.indexOf((_a = req.user) === null || _a === void 0 ? void 0 : _a.userId) === -1) {
            post.likes.push((_b = req.user) === null || _b === void 0 ? void 0 : _b.userId);
        }
        else {
            post.likes.splice(post.likes.indexOf((_c = req.user) === null || _c === void 0 ? void 0 : _c.id), 1);
        }
        yield post.save();
        return res.status(200).json({
            message: "Post Liked",
            likes: post.likes,
            length: post.likes.length
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.giveLike = giveLike;
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.postModel.findOne({ _id: req.params.id }).populate("user");
        if (!post) {
            return res.status(401).json({
                message: "Not Found"
            });
        }
        res.send("Edit Page");
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.editPost = editPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(300).json({
                message: "Not new data to change"
            });
        }
        const post = yield postModel_1.postModel.findOneAndUpdate({ _id: req.params.id }, { content: content }, { new: true }).populate("user");
        if (!post) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        }
        return res.status(200).json({
            message: "Post updated",
            post: post
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err
        });
    }
});
exports.updatePost = updatePost;
//# sourceMappingURL=userController.js.map