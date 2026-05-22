import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

const sizeMap: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-3xl sm:text-4xl font-bold tracking-tight",
  3: "text-xl sm:text-2xl font-semibold",
  4: "text-lg font-semibold",
};

export default function Heading({
  level = 1,
  children,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(sizeMap[level], "text-white", className)}>{children}</Tag>
  );
}
