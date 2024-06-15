import { PropsWithChildren } from "react";
import { Source_Serif_4 } from "next/font/google";
import { Toaster } from "@/components/ui/Sonner";
import { cn } from "@/lib/utils";

const font = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Provider({ children }: PropsWithChildren) {
  return (
    <main className={cn(font.className, "container max-w-3xl print:text-sm")}>
      {children}
      <Toaster />
    </main>
  );
}
