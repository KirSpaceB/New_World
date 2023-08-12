import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { username, password } = await request.json();

  try {
    // Check if the user with the given username already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      // User already exists, return a response indicating so
      return NextResponse.json({ Response: "User already exists" }, { status: 409 });
    }

    // User does not exist, create a new user
    const user = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    // Return a success response
    return NextResponse.json({ Response: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    // Return an error response
    return NextResponse.json({ Response: "An error occurred" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}