import { navigation } from "@/lib/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-col items-stretch">
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="w-full px-1 py-2 cursor-pointer"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
