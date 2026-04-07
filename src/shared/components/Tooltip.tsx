"use client";

import { type FC, type ReactNode, useState, useRef, useEffect } from "react";

interface TooltipProps {
    children: ReactNode;
    content: string;
    title?: string;
    placement?: "top" | "bottom";
    className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
    children,
    content,
    title,
    placement = "bottom",
    className
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Known tooltip dimensions from CSS (max-w-[280px] + padding)
    const TOOLTIP_MAX_WIDTH = 280;
    const TOOLTIP_ESTIMATED_HEIGHT = 120;

    useEffect(() => {
        if (isVisible && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            const gap = 8;

            // Center horizontally
            let x = rect.left + rect.width / 2;
            let y: number;

            // Calculate vertical position based on placement
            if (placement === "top") {
                y = rect.top - gap;
                // If not enough space above, flip to bottom
                if (y - TOOLTIP_ESTIMATED_HEIGHT < 0) {
                    y = rect.bottom + gap;
                }
            } else {
                y = rect.bottom + gap;
                // If not enough space below, flip to top
                if (y + TOOLTIP_ESTIMATED_HEIGHT > window.innerHeight) {
                    y = rect.top - gap;
                }
            }

            // Prevent horizontal overflow
            const halfWidth = TOOLTIP_MAX_WIDTH / 2;
            if (x + halfWidth > window.innerWidth) {
                x = window.innerWidth - halfWidth - 16;
            }
            if (x - halfWidth < 0) {
                x = halfWidth + 16;
            }

            setPosition({ x, y });
        }
    }, [isVisible, placement]);

    // Recalculate position on scroll and resize when visible
    useEffect(() => {
        if (!isVisible) return;

        const handleScroll = () => {
            if (triggerRef.current) {
                const rect = triggerRef.current.getBoundingClientRect();
                const gap = 8;

                let x = rect.left + rect.width / 2;
                let y: number;

                if (placement === "top") {
                    y = rect.top - gap;
                } else {
                    y = rect.bottom + gap;
                }

                const halfWidth = TOOLTIP_MAX_WIDTH / 2;
                if (x + halfWidth > window.innerWidth) {
                    x = window.innerWidth - halfWidth - 16;
                }
                if (x - halfWidth < 0) {
                    x = halfWidth + 16;
                }

                setPosition({ x, y });
            }
        };

        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isVisible, placement]);

    return (
        <>
            <div
                ref={triggerRef}
                className={`relative inline-block ${className || ''}`}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onFocus={() => setIsVisible(true)}
                onBlur={() => setIsVisible(false)}
            >
                {children}
            </div>

            {isVisible && (
                <div
                    ref={tooltipRef}
                    className="fixed z-50 pointer-events-none animate-in fade-in duration-150"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        transform: "translate(-50%, 0)",
                    }}
                >
                    <div
                        className="bg-zinc-900/97 backdrop-blur-md border border-amber-500/40 rounded-lg shadow-xl shadow-black/60 p-3 min-w-[200px] max-w-[280px]"
                    >
                        {title && (
                            <h5 className="text-amber-400 font-semibold text-sm mb-1.5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                                {title}
                            </h5>
                        )}
                        <p className="text-gray-300 text-xs leading-relaxed">
                            {content}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
