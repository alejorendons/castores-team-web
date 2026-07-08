import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "water" | "gold";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold",
        {
          "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-200": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "bg-water/10 text-water": variant === "water",
          "bg-gold/10 text-gold": variant === "gold",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
