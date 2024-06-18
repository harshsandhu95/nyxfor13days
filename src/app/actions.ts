"use server";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getResume() {
  const response = await fetch(`${apiUrl}/resume`)
    .then((res) => res.json())
    .then((data) => data);

  return response;
}

export async function getDetails() {
  const response = await fetch(`${apiUrl}/details`)
    .then((res) => res.json())
    .then((data) => data.details[0]);

  return response;
}

export async function getEducation() {
  const response = await fetch(`${apiUrl}/education`)
    .then((res) => res.json())
    .then((data) => data.response);

  return response;
}

export async function getExperience() {
  const response = await fetch(`${apiUrl}/experience`)
    .then((res) => res.json())
    .then((data) => data.response);

  return response;
}

export async function getProjects() {
  const response = await fetch(`${apiUrl}/projects`)
    .then((res) => res.json())
    .then((data) => data.response);

  return response;
}

export async function getSkills() {
  const response = await fetch(`${apiUrl}/skills`)
    .then((res) => res.json())
    .then((data) => data.response);

  return response;
}

export async function getCertifications() {
  const response = await fetch(`${apiUrl}/certifications`)
    .then((res) => res.json())
    .then((data) => data.response);

  return response;
}
