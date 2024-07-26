import { experience } from "@prisma/client";

interface Props extends experience {}

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

      <ul className="ml-4 max-w-3xl print:max-w-prose flex flex-col gap-y-1 list-disc list-outside text-sm">
        {props.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
