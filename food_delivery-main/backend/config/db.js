import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://Arjun:812331@cluster0.ypzruam.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
//mongodb+srv://Arjun:812331@cluster0.ypzruam.mongodb.net/?