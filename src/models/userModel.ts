import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName : String , 
  name:String  , 
  email : String , 
  age : Number , 
  password : String , 
  profilePic : {
    type : String,
    default : "profilePicDef.jpg"
  },
  posts : [
    {
      type : mongoose.Schema.Types.ObjectId , 
      ref :  "post"
    }
  ]
});

export const userModel = mongoose.model("user" , userSchema);