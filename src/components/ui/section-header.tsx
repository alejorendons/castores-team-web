import Badge from "./badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "default" | "primary" | "water" | "gold";
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  titleHighlight,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-secondary dark:text-white"
        }`}
      >
        {title}
        {titleHighlight && (
          <span className="text-primary"> {titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-800 dark:text-gray-200"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
