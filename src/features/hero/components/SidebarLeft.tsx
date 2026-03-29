"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/features/hero/constants/nav-links";
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

export default function SidebarLeft() {
    return <DefaultSidebar />;
}
