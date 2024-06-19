"use client";

import { Badge } from "@/components/ui/Badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard";
import { SkillsItems, skills } from "@prisma/client";

interface Props extends skills {}

export default function SkillItem({ id, title, items }: Props) {
  return (
    <div key={id} className="grid md:grid-cols-6 items-center gap-y-2 gap-x-8">
      <h3 className="text-xl">{title}</h3>

      <div className="md:col-span-5 flex flex-wrap gap-4">
        {items.map((item: SkillsItems) => (
          <HoverCard key={item.name}>
            <HoverCardTrigger className="cursor-pointer">
              <Badge variant="secondary">{item.name}</Badge>
            </HoverCardTrigger>

            <HoverCardContent>
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p>Level: {item.level}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
