"use client";

import { Button } from "@/components/ui/Button";
import { PrinterIcon } from "lucide-react";
import { toast } from "sonner";

export default function BeforePrint() {
  function onPrint() {
    toast("Printing...");
    setTimeout(() => window.print(), 1000);
  }

  return (
    <Button onClick={onPrint}>
      <PrinterIcon size={14} />
      Print
    </Button>
  );
}
