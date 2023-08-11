import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request:Request) {
  const {username,password} = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        username:username,
        password:password,
      },
      
    })
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
    return NextResponse.json({Response:"success"}, {status:200})
  }
  
}