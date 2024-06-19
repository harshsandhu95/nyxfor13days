import { skills } from "@prisma/client";

interface Props extends skills {}

export default function SkillsItem({ title, items }: Props) {
  const skillsString = items.map((item) => item.name).join(", ");

  return (
    <div className="flex flex-col md:flex-row print:flex-row gap-1 md:gap-2 print:gap-2">
      <span className="font-bold">{title}:</span> {skillsString}
    </div>
  );
}
