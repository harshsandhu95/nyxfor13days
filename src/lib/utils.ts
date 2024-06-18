import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function prefixHttps(url: string | undefined) {
  if (url) return url.startsWith("http") ? url : `https://${url}`;

  return "";
}
