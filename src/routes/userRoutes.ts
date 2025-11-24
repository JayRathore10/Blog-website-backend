import { Router } from "express";
import { editPost, giveLike, homePage, loginPage, makePost, profileLogged,  updatePost , uploadProfilePic } from "../controllers/userController";
import { isLogIn } from "../middleware/isLoginMiddleware";
import { upload } from "../config/multer.config";

export const userRouter = Router();

userRouter.get("/" , homePage);
userRouter.get("/profile", isLogIn, profileLogged);
userRouter.post("/post" , isLogIn , makePost);
userRouter.post("/upload" , isLogIn , upload.single("image") , uploadProfilePic );
userRouter.get("/like/:id" , isLogIn , giveLike);
userRouter.get("/edit/:id" , isLogIn , editPost);
userRouter.post("/update/:id" , isLogIn  , updatePost);