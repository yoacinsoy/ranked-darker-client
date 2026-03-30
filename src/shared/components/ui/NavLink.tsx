"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
    children: React.ReactNode;
    href: string;
};

export default function NavLink({ children, href }: Props) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            className={`group relative flex items-center text-xs uppercase tracking-widest transition-all duration-300 ${active
                ? "text-amber-400"
                : "text-zinc-400 hover:text-amber-300"
                }`}
        >
            <span className="relative z-10">{children}</span>

            <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-300 ${active
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
            />

            <span
                className={`absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(251,191,36,0.15),transparent_70%)] blur-md transition-opacity duration-300 ${active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                    }`}
            />
        </Link>
    );
}
