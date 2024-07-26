"use server";

import prisma from "@/lib/db";

export async function getResume() {
  const details = await prisma.details.findFirst();
  const certifications = await prisma.certifications.findMany();
  const education = await prisma.education.findMany();
  const experience = await prisma.experience.findMany({
    orderBy: { startDate: "desc" },
  });
  const projects = await prisma.projects.findMany({
    orderBy: { id: "desc" },
  });
  const skills = await prisma.skills.findMany();

  return { details, certifications, education, experience, projects, skills };
}

export async function getDetails() {
  const response = await prisma.details.findFirst();

  return response;
}

export async function getEducation() {
  const response = await prisma.education.findMany();

  return response;
}

export async function getExperience() {
  const response = await prisma.experience.findMany();

  return response;
}

export async function getProjects() {
  const response = await prisma.projects.findMany();

  return response;
}

export async function getSkills() {
  const response = await prisma.skills.findMany();

  return response;
}

export async function getCertifications() {
  const response = await prisma.certifications.findMany();

  return response;
}
