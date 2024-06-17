interface Props {
  title: string;
  skills: string[];
}

export default function SkillsItem({ title, skills }: Props) {
  const skillsString = skills.join(", ");

  return (
    <div className="flex flex-col md:flex-row print:flex-row gap-1 md:gap-2 print:gap-2">
      <span className="font-bold">{title}:</span> {skillsString}
    </div>
  );
}
