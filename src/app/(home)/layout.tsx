import Header from "@/components/Header";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren { }

export default function Layout({ children }: Props) {
  return (
    <div className="container max-w-5xl">
      <Header />
      <main>{children}</main>
    </div>
  );
}
