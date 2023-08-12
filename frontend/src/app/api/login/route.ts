import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request:Request) {
  const {username, password} = await request.json();
  
  const user = await prisma.user.findUnique({
    where: {username: username, password:password},
  });

  if(user) {
    await prisma.$disconnect();
    return NextResponse.json({Response:"success"}, {status:200})
  }
}