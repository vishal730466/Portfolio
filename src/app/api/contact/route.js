import { connectionStr } from "@/app/Database/db";
import { user_schema } from "@/app/Database/usermodel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        
        await mongoose.connect(connectionStr)
        let payload = await req.json()
        const {name , email , message} = payload;
    
        let result = new user_schema({name,email,message})
        let result1 = await result.save();
    
        return NextResponse.json({result1})
        
    } catch (error) {
        console.log(error)
    }
}