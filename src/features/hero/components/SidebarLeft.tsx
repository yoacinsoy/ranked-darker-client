"use client";

import { NAV_LINKS } from "@/features/hero/constants/nav-links";
import React from "react";

export default function SidebarLeft() {
    const separatorIndex = 2;

    return (
        <nav
            aria-label="Grimório de Navegação"
            className="grimoire-sidebar absolute top-1/2 left-2 sm:left-6 -translate-y-1/2 hidden sm:flex flex-col items-start gap-4 px-4 py-6 z-40 rounded-md"
        >
            {NAV_LINKS.map(({ label, href }, index) => (
                <React.Fragment key={href}>
                    <a
                        href={href}
                        className="grimoire-link text-sm sm:text-base"
                    >
                        {label}
                    </a>

                    {index === separatorIndex && (
                        <div className="grimoire-separator my-2" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
