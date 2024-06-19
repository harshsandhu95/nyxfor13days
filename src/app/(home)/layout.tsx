import Header from "@/components/Header";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  about: React.ReactNode;
  skills: React.ReactNode;
  experience: React.ReactNode;
}

export default function Layout({ children, about, skills, experience }: Props) {
  return (
    <div className="container max-w-5xl">
      <Header />
      <main>
        {children}
        {about}
        {skills}
        {experience}
      </main>
    </div>
  );
}
