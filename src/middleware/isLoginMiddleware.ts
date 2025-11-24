import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/customReq";
import { userPlayload } from "../types/customReq";

export const isLogIn = (req: AuthRequest, res: Response, next: NextFunction) => {
  
  try {
    
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({
        message: "You must be logged in"
      });
    }
    
    const secret: string | undefined = process.env.JWT_SECRET || "secure";
    
    const data = jwt.verify(token, secret!) as userPlayload;
    req.user = data;
    next();
  } catch (err) {
    return res.status(500).json({
      message: err
    });
  }
}