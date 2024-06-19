import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function Page() {
  const specializations = [
    {
      title: "AI Integration",
      description: "Crafting AI models that elevate web applications.",
    },
    {
      title: "Web Development",
      description:
        "Mastery in React, Next.js, and other front-end technologies.",
    },
    {
      title: "System Design",
      description: "Building scalable and efficient software solutions.",
    },
  ];

  return (
    <section className="py-12 space-y-4">
      <h2 className="text-5xl">About me</h2>

      <p>
        With a B.Tech in Computer Science from CT University and a Diploma in
        Computer Science from Guru Nanak Dev Engineering College, I specialize
        in:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {specializations.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
