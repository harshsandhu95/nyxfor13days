import { PropsWithChildren } from "react";
import { Source_Serif_4 } from "next/font/google";
import Header from "./_components/Header";
import { cn } from "@/lib/utils";

const font = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Provider({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        font.className,
        "relative container max-w-3xl print:text-sm",
      )}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
}
