import type { ReactNode } from "react";

interface GridProps {
    children?: ReactNode;
    className?: string;
}

export default function Grid({ children, className = "" }: GridProps) {
    return (
        <div className={`grid gap-4 ${className}`}>
            {children}
        </div>
    );
}
