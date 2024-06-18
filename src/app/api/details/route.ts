import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.details.findMany();

  return NextResponse.json({ response });
}
