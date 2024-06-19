import { getSkills } from "@/app/actions";
import SkillItem from "./_components/SkillItem";

export default async function Page() {
  const skills = await getSkills();

  return (
    <section className="py-12 space-y-4">
      <h2 className="text-5xl">My Skills</h2>

      {skills.map((skill) => (
        <SkillItem key={skill.id} {...skill} />
      ))}
    </section>
  );
}
