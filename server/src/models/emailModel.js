import mongoose from "mongoose";

const emailSchemas = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{timestamps:true})

const emails = mongoose.models.email || mongoose.model('email',emailSchemas)
export default emails;