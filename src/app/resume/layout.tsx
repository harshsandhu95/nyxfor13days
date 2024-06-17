import { PropsWithChildren } from "react";
import Header from "./_components/Header";
import { cn } from "@/lib/utils";
import { serifFont } from "@/fonts";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        serifFont.className,
        "relative container max-w-3xl print:text-sm",
      )}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
}
