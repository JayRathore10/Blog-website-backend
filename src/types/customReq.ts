import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";


export interface userPlayload extends JwtPayload{
  userId : any ,
  email : string , 
}

export interface AuthRequest extends Request {
  user?: userPlayload;
}
