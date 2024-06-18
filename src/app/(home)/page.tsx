import Link from "next/link";
import { HardHatIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getDetails } from "../actions";

export default async function Home() {
  const details = await getDetails();

  return (
    <div className="min-h-[calc(100vh-64px)]">
      <section className="py-12 max-w-prose space-y-4">
        <Badge className="md:w-fit flex items-center justify-center gap-2">
          <HardHatIcon size={16} /> Under Development
        </Badge>
        <h1 className="text-7xl eading-tight">Hey, I am {details?.name}</h1>
        <p className="text-lg leading-normal">{details?.objective}</p>
        <Button asChild>
          <Link href="">Let&apos;s Connect!</Link>
        </Button>
      </section>

      <section className="py-12 space-y-4">
        <h2 className="text-5xl">Education</h2>

        <p>
          I possess a strong educational background in computer science, having
          earned a B.Tech in Computer Science from CT University and a Diploma
          in Computer Science from Guru Nanak Dev Engineering College. My
          educational experiences have equipped me with expertise in various
          areas, including Artificial Intelligence, System Design, Web
          Development, and Cybersecurity.
        </p>
      </section>
    </div>
  );
}
