import { prefixHttps } from "@/lib/utils";
import { projects } from "@prisma/client";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface Props extends projects {}

export default function ProjectItem(props: Props) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between gap-1">
        <h3 className="font-bold">{props.title}</h3>
        {props.link && (
          <Link
            href={prefixHttps(props.link)}
            target="_blank"
            className="print:hidden flex items-center gap-2 cursor-pointer"
          >
            <SquareArrowOutUpRight size={16} />
          </Link>
        )}
      </div>

      <ul className="ml-4 max-w-3xl print:max-w-prose flex flex-col gap-y-1 list-disc list-outside text-sm">
        {props.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
