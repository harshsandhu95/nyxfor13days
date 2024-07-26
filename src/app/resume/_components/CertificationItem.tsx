import { certifications } from "@prisma/client";

interface Props extends certifications {}

export default function CertificationItem({
  title,
  issuer,
  date,
  skills,
}: Props) {
  return (
    <div className="space-y-0">
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-sm">
        {issuer}, {date}
      </p>
      {skills && (
        <p className="text-sm text-foreground/50">{skills.join(", ")}</p>
      )}
    </div>
  );
}
