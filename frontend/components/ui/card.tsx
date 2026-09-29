import { cn } from "@/utils/css";
import type { ReactNode } from "react";

type CardProps = {
    className?: string;
    children: ReactNode;
};

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-lg border border-card-border bg-card p-4",
                className,
            )}
        >
            {children}
        </div>
    );
}
