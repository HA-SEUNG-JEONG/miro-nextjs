import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = [
    "#DC2626",
    "#D97706",
    "#059669",
    "#2563EB",
    "#4F46E5",
    "#7C3AED"
];

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number) {
    return COLORS[connectionId % COLORS.length];
}
