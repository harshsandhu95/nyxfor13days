import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function prefixHttps(url: string) {
  return url.startsWith("http") ? url : `https://${url}`;
}
