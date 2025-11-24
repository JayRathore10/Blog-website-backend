import multer from "multer";
import crypto from "crypto";
import path from "path";

const diskStorage = multer.diskStorage({
  destination : (req , file , cb)=>{
    cb(null, "./public/images/uploads");
  } , 

  filename : (req , file , cb)=>{
    crypto.randomBytes(12 , (err , buf)=>{
      const unique = buf.toString("hex") + path.extname(file.originalname);
      cb(null, unique);
    })
  }
});

export const upload = multer({storage : diskStorage});