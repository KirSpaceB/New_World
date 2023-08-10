import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';
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

  // try {
  //   const user = await prisma.user.create({
  //     data: {
  //       username,
  //       password,
  //     },
  //   });
  //   res.status(200).json({ user });
  //   alert('successfully create user')
  // } catch (error) {
  //   console.error(error);
  //   res.status(400).json({ error: "n error occurred while creating the user"});
  // } finally {
  //   await prisma.$disconnect();
  // }
  
}