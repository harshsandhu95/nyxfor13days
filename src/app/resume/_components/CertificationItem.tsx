import { Certification } from "@/lib/types";

interface Props extends Certification { }

export default function CertificationItem({
  title,
  issuer,
  date,
  link,
  skills,
}: Props) {
  return (
    <div className="space-y-0">
      <h3 className="font-bold">{title}</h3>
      <p>
        {issuer}, {date}
      </p>
      {skills && <p className="text-foreground/50">{skills.join(", ")}</p>}
    </div>
  );
}
