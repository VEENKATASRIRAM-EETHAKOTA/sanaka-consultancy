import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    badge?: string
    title: string
    description?: string
    className?: string
    align?: "center" | "left"
}

export function SectionHeader({
    badge,
    title,
    description,
    className,
    align = "center",
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "mb-16 reveal",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            {badge && (
                <div className="mb-4 inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary backdrop-blur-sm">
                    {badge}
                </div>
            )}
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl text-foreground">
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "text-lg text-muted-foreground font-medium max-w-2xl",
                    align === "center" && "mx-auto"
                )}>
                    {description}
                </p>
            )}
        </div>
    )
}
