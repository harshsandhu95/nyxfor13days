import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { details } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] py-12 space-y-12">
      <section className="max-w-prose space-y-4">
        <Badge>
          The Website is under construction but feel free to view my cv.
        </Badge>
        <h1 className="text-7xl eading-tight">Hey, I am Harsh Sandhu</h1>
        <p className="text-lg leading-normal">{details.objective}</p>
        <Button>Let&apos;s Connect!</Button>
      </section>
    </div>
  );
}
