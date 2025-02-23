const { default: mongoose } = require("mongoose");

const usermodel=new mongoose.Schema({
    name:String,
    email:String,
    message:String
})

export const user_schema=mongoose.models.Portfolio || mongoose.model("Portfolio",usermodel)