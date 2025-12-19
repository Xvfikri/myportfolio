"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface FixedAuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    showRadialGradient?: boolean;
}

export const FixedAuroraBackground = ({
    className,
    showRadialGradient = true,
    ...props
}: FixedAuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    `
            [--white-gradient:repeating-linear-gradient(100deg,#ffffff_0%,#ffffff_7%,transparent_10%,transparent_12%,#ffffff_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#0a0a0a_0%,#0a0a0a_7%,transparent_10%,transparent_12%,#0a0a0a_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#6366f1_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
                    showRadialGradient &&
                    `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
                )}
            ></div>
        </div>
    );
};
