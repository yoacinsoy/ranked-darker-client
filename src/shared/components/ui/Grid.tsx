import type { ReactNode } from "react";

interface GridProps {
    children?: ReactNode;
    className?: string;
}

export default function Grid() {
    return (
        <div
            className="
                pointer-events-none
                fixed inset-0
                z-0
                grid-bg
            "
        />
    );
}
