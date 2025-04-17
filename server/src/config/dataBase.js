import mongoose from "mongoose";

const dataConnection = async ()=> {
    try {
        await mongoose.connect('mongodb+srv://shiva:shiva1106@blogger.efhds4a.mongodb.net/Blogger?retryWrites=true&w=majority&appName=Blogger')
        console.log('MongoDB is Connected Successfully');
    } catch (error) {
        console.log('Connection Error')
    }
}

export default dataConnection;