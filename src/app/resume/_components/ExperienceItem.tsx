import { Experience } from "@/lib/types";

interface Props extends Experience { }

export default function ExperienceItem(props: Props) {
  return (
    <div className="space-y-1">
      <div className="flex flex-col md:flex-row print:flex-row items-start md:items-center justify-between gap-1">
        <h3 className="font-bold">{props.company}</h3>
        <p className="text-sm">{props.location}</p>
      </div>

      <div className="flex flex-col md:flex-row print:flex-row items-start md:items-center justify-between gap-1">
        <p>{props.position}</p>
        <p className="text-sm">
          {props.startDate} - {props.endDate}
        </p>
      </div>

      <p className="max-w-3xl print:max-w-fit">{props.description}</p>
    </div>
  );
}
