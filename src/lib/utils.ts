import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function merge_class(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}