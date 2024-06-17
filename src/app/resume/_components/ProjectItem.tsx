import { Project } from "@/lib/types";
import { prefixHttps } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface Props extends Project { }

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

      <p>{props.description}</p>
    </div>
  );
}
