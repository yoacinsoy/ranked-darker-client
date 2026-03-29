"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import TechIcon from "@/features/deals/components/TechIcon";
import { POPULAR_TECH, TECH_CATEGORIES, Tech } from "@/features/deals/data/tech-stack";

export default function TechStack() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {POPULAR_TECH.map((tech: Tech) => (
                    <TechIcon key={tech} name={tech} />
                ))}
            </div>

            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="flex items-center gap-2 mt-6 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition"
            >
                {open ? "Hide tech stack" : "Show tech stack"}
                {open ? (
                    <ChevronUp aria-hidden="true" size={16} />
                ) : (
                    <ChevronDown aria-hidden="true" size={16} />
                )}
            </button>

            {open && (
                <div className="mt-6 space-y-6">
                    {Object.entries(TECH_CATEGORIES).map(([category, techs]) => (
                        <div key={category}>
                            <h4 className="text-xs uppercase tracking-widest text-zinc-400 mb-3">{category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {(techs as Tech[]).map((tech: Tech) => (
                                    <TechIcon key={tech} name={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
