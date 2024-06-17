"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import BeforePrint from "./BeforePrint";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-2 px-4 absolute top-0 left-0 right-0 print:hidden flex items-center justify-between gap-2 z-20">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.push("/")}>
          <ArrowLeftIcon size={16} />
        </Button>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Resume</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <BeforePrint />
    </header>
  );
}
