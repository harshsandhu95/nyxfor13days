import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.skills.findMany();

  return NextResponse.json({ response });
}
