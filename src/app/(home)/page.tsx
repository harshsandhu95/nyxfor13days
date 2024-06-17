import Link from "next/link";
import { HardHatIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { details } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <section className="py-12 max-w-prose space-y-4">
        <Badge className="md:w-fit flex items-center justify-center gap-2">
          <HardHatIcon size={16} /> Under Development
        </Badge>
        <h1 className="text-7xl eading-tight">Hey, I am Harsh Sandhu</h1>
        <p className="text-lg leading-normal">{details.objective}</p>
        <Button asChild>
          <Link href="">Let&apos;s Connect!</Link>
        </Button>
      </section>

      <section className="py-12">
        <h2 className="text-5xl">Education</h2>
      </section>
    </div>
  );
}
