import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function lg(...args: any[]) {
  // TODO: replace with logger
  console.log(...args)
}

export function dateToAge(date: Date):string {
  const diff = Date.now() - date.getTime();
  const age = new Date(diff);
  return `${Math.floor(age.getUTCFullYear() - 1970)}.${('0'+age.getMonth()).slice(-2)}`;
}