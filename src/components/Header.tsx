import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="py-2 h-16 grid grid-cols-2 gap-2">
      <div className="place-self-start self-center">
        <Link href="/" className="text-lg font-bold">
          Harsh Sandhu
        </Link>
      </div>

      <div className="place-self-end self-center">
        <Popover>
          <PopoverTrigger>
            <Button size="icon">
              <MenuIcon size={16} />
            </Button>
          </PopoverTrigger>

          <PopoverContent>
            <Navigation />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
