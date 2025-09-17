import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", { ...defaultOptions, ...options });
}

/**
 * Format time to readable string
 */
export function formatTime(date: Date | string) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}

/**
 * Get user role theme class
 */
export function getRoleTheme(role: "student" | "teacher" | "admin" | "counselor") {
  const themes = {
    student: "theme-student",
    teacher: "theme-teacher",
    admin: "theme-admin",
    counselor: "theme-counselor",
  };
  return themes[role] || "";
}

/**
 * Get user role color
 */
export function getRoleColor(role: "student" | "teacher" | "admin" | "counselor") {
  const colors = {
    student: "text-green-600 bg-green-50",
    teacher: "text-amber-600 bg-amber-50",
    admin: "text-pink-600 bg-pink-50",
    counselor: "text-purple-600 bg-purple-50",
  };
  return colors[role] || "text-gray-600 bg-gray-50";
}

/**
 * Calculate attendance percentage
 */
export function calculateAttendancePercentage(present: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((present / total) * 100);
}

/**
 * Get attendance status color
 */
export function getAttendanceStatusColor(percentage: number) {
  if (percentage >= 85) return "text-green-600 bg-green-50";
  if (percentage >= 75) return "text-amber-600 bg-amber-50";
  return "text-red-600 bg-red-50";
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Check if device is mobile
 */
export function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

/**
 * Generate random ID for components
 */
export function generateId(prefix = "id") {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Get initials from name
 */
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
