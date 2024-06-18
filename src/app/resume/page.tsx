import Link from "next/link";
import { Construction, Dot, Github, Linkedin } from "lucide-react";
import EducationItem from "./_components/EducationItem";
import ExperienceItem from "./_components/ExperienceItem";
import SkillsItem from "./_components/SkillsItem";
import ProjectItem from "./_components/ProjectItem";
import CertificationItem from "./_components/CertificationItem";
import { prefixHttps } from "@/lib/utils";
import { getResume } from "@/app/actions";
import {
  certifications,
  education,
  experience,
  projects,
  skills,
} from "@prisma/client";

export default async function Page() {
  const { details, experience, education, skills, certifications, projects } =
    await getResume();

  return (
    <div className="py-16 print:py-0 space-y-6">
      {/* Header */}
      <section className="space-y-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold text-center">{details?.name}</h1>
          <p className="text-center">{details?.title}</p>
        </div>

        <hr className="divide-y" />

        <ul className="flex flex-wrap items-center justify-center md:justify-between print:justify-between gap-1 print:text-sm list-none list-inside">
          <li>{details?.location}</li>
          <Dot size={16} />
          <li>{details?.email}</li>
          <Dot size={16} />
          <li>{details?.phone}</li>
          <Dot size={16} />
          <li className="flex items-center gap-1">
            <Construction size={12} /> {details?.website}
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 place-items-center md:place-items-start print:place-items-start gap-2">
          <div className="flex items-center gap-2">
            <Linkedin size={14} stroke="0" className="fill-current" />
            <Link href={prefixHttps(details?.linkedin)} target="_blank">
              {details?.linkedin}
            </Link>
          </div>

          <div className="md:place-self-end print:place-self-end flex items-center gap-2">
            <Github size={14} stroke="0" className="fill-current" />
            <Link href={prefixHttps(details?.github)} target="_blank">
              {details?.github}
            </Link>
          </div>
        </div>
      </section>

      <section id="objective" className="space-y-2 print:hidden">
        <h2 className="font-bold text-center">Professional Summary</h2>
        <p>{details?.objective}</p>
      </section>

      <hr className="divide-y print:hidden" />

      {/* Education */}
      <section id="education" className="space-y-2">
        <h2 className="font-bold text-center">Education</h2>

        <div className="space-y-4">
          {education.map((item: education) => (
            <EducationItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-2">
        <h2 className="font-bold text-center">Relevant Experience</h2>

        <div className="space-y-4">
          {experience.map((item: experience) => (
            <ExperienceItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section id="technical-skills" className="space-y-2">
        <h2 className="font-bold text-center">Technical Skills</h2>

        <div className="space-y-2 md:space-y-1">
          {skills.map((skill: skills) => (
            <SkillsItem key={skill.title} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-2">
        <h2 className="font-bold text-center">Projects</h2>

        <div className="space-y-2">
          {projects.map((project: projects) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="space-y-2">
        <h2 className="font-bold text-center">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-2">
          {certifications.map((certification: certifications) => (
            <CertificationItem key={certification.title} {...certification} />
          ))}
        </div>
      </section>
    </div>
  );
}
