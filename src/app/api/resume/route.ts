import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const certifications = await prisma.certifications.findMany();
  const details = await prisma.details.findMany();
  const education = await prisma.education.findMany();
  const experience = await prisma.experience.findMany();
  const projects = await prisma.projects.findMany();
  const skills = await prisma.skills.findMany();

  return NextResponse.json({
    certifications,
    details: details[0],
    education,
    experience,
    projects,
    skills,
  });
}
