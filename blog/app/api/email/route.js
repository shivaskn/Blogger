import { ConnectDB } from "@/lib/config/db";
import email from "@/lib/models/emailModel";
import { NextResponse } from "next/server";



const loadDB = async () => {
    await ConnectDB()
}

loadDB()

export async function POST(request){
    try {
        const formData = await request.formData();
        const emailData = {
            email:`${formData.get('email')}`,
        }
        
        await email.create(emailData)
        return NextResponse.json({
            success:true,
            message:'Subscribed Successfully'
        })
    } catch (error) {
        return NextResponse.json({
            success:true,
            message:error.message
        })
    }
}


export async function GET(request){
    try {
        const emails = await email.find({});
        return NextResponse.json({
            emails,
            success:true
        })
    } catch (error) {
        return NextResponse.json({
            success:true,
            message:error.message
        })
    }
}

export async function DELETE(request){
    try {
        const id = await request.nextUrl.searchParams.get("id");
        await email.findByIdAndDelete(id)
        return NextResponse.json({
            success:true,
            message:'Subscription Email Deleted'
        })
    } catch (error) {
        return NextResponse.json({
            success:true,
            message:error.message
        })
    }
}