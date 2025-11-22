import mongoose from "mongoose";

export const connectDB = ()=>{
  try{
    if(!process.env.MONGO_URI){
      return console.log("Not Found");
    }
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  }catch(err){
    console.log(err);
  }
}