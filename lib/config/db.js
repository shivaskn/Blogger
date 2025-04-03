import mongoose from "mongoose";

export const ConnectDB = async () => {
   try {
    await mongoose.connect('mongodb+srv://shiva:shiva1106@blogger.efhds4a.mongodb.net/Blogger?retryWrites=true&w=majority&appName=Blogger')
    console.log('MongoDB is connected successfully')
   } catch (error) {
    console.log('Connection error', error.message)
   }

}