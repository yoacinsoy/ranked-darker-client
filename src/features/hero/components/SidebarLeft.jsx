"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/features/hero/constants/nav-links";
import { useTerminalMode } from "@/shared/hooks/useTerminalMode";
import React from "react";

function DefaultSidebar() {
    const separatorIndex = 2;
    return (
        <nav
            aria-label="Page sections"
            className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-40"
        >
            {NAV_LINKS.map(({ label, href }, index) => (
                <React.Fragment key={href}>
                    <p className="sidebar-link">
                        <a href={href}>{label}</a>
                    </p>

                    {index === separatorIndex && (
                        <div className="my-2 h-16 w-px bg-black/20 dark:bg-white/20" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}

function TerminalSidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % NAV_LINKS.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <nav
            aria-label="Page sections"
            className="absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col gap-3 z-40 font-mono text-sm"
        >
            {NAV_LINKS.map(({ terminalLabel, href }, i) => (
                <a
                    key={href}
                    href={href}
                    className={`flex items-center gap-2 transition-all duration-300 ${activeIndex === i
                        ? "text-green-400"
                        : "text-zinc-500 hover:text-white"
                        }`}
                >
                    <span className="text-green-500">$</span>
                    <span>{terminalLabel}</span>
                    {activeIndex === i && (
                        <span className="ml-1 w-2 h-4 bg-green-400 cursor-block" />
                    )}
                </a>
            ))}
        </nav>
    );
}

export default function SidebarLeft() {
    const { terminalMode } = useTerminalMode();

    return terminalMode ? <TerminalSidebar /> : <DefaultSidebar />;
}
