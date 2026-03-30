"use client";

import { NAV_LINKS } from "@/features/hero/constants/nav-links";
import {
    Diamond,
    ScrollText,
    Scale,
    VenetianMask,
    Shield,
    Mail
} from "lucide-react";
import React, { useEffect, useState } from "react";

const iconMap: Record<string, any> = {
    "ph-diamond": Diamond,
    "ph-scroll": ScrollText,
    "ph-scales": Scale,
    "ph-mask-happy": VenetianMask,
    "ph-shield-chevron": Shield,
    "ph-envelope-simple": Mail,
};

export default function SidebarLeft() {
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const handleHashChange = () => {
            setActive(window.location.hash || "#home");
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <aside className="absolute top-1/2 left-12 sm:left-12 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 z-40">
            <nav>
                <ul className="space-y-6 relative">
                    <div className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-stone-700 to-transparent -z-10"></div>

                    {NAV_LINKS.map((item, index) => {
                        const isActive = active === item.href;
                        const Icon = iconMap[item.icon];

                        if (index === 3) {
                            return (
                                <React.Fragment key={item.href}>
                                    <li className="h-8" />
                                    {renderItem(item, isActive, Icon, setActive)}
                                </React.Fragment>
                            );
                        }

                        return renderItem(item, isActive, Icon, setActive);
                    })}
                </ul>
            </nav>
        </aside>
    );
}

function renderItem(item: any, isActive: boolean, Icon: any, setActive: any) {
    return (
        <li
            key={item.href}
            onClick={() => setActive(item.href)}
            className={`relative group cursor-pointer flex items-center gap-4 transition-transform duration-300 ${!isActive && "hover:-translate-y-0.5"
                }`}
        >
            <div className="w-[24px] flex justify-center">
                {isActive ? (
                    <Diamond
                        size={12}
                        className="text-orange-500 drop-shadow-[0_0_8px_#f97316]"
                        fill="currentColor"
                    />
                ) : (
                    <Icon
                        size={18}
                        strokeWidth={2.2}
                        className="text-stone-600 group-hover:text-amber-400 transition-colors duration-300 hover-glow"
                    />
                )}
            </div>

            <span
                className={`
                    font-bold tracking-[0.2em] text-sm transition-all duration-300
                    ${isActive
                        ? "text-orange-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
                        : "text-stone-500 group-hover:text-amber-400"
                    }
                `}
            >
                {item.label.toUpperCase()}
            </span>
        </li>
    );
}
