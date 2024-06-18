import Link from "next/link";
import { HardHatIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getDetails } from "../actions";

export default async function Home() {
  const details = await getDetails();

  return (
    <section className="py-12 max-w-prose space-y-4">
      <Badge className="md:w-fit flex items-center justify-center gap-2">
        <HardHatIcon size={16} /> Website Under Development
      </Badge>
      <h1 className="text-7xl eading-tight">Hey, I am {details?.name}</h1>
      <p className="text-lg leading-normal">{details?.objective}</p>
      <Button asChild>
        <Link href="">Let&apos;s Connect!</Link>
      </Button>
    </section>
  );
}
