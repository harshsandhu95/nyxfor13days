import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await prisma.certifications.findMany();

  return NextResponse.json({ response });
}
