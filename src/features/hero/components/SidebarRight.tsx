"use client";

import { useState } from "react";

const indicators = [
    { label: "Nível Superior" },
    { label: "Nível Intermediário" },
    { label: "Nível Profundo" },
];

export default function SidebarRight() {
    const [active, setActive] = useState(0);

    return (
        <aside className="absolute top-1/2 right-12 -translate-y-1/2 hidden sm:flex flex-col items-center gap-4 text-zinc-300 z-60">
            <div className="relative flex flex-col items-center gap-8 py-4">

                <div className="absolute top-2 bottom-2 w-[1px] bg-stone-800 -z-10" />

                {indicators.map((item, index) => {
                    const isActive = active === index;

                    return (
                        <div
                            key={index}
                            title={item.label}
                            onClick={() => setActive(index)}
                            className="relative flex items-center justify-center cursor-pointer group"
                        >
                            {isActive ? (
                                <>
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-10 h-10 aspect-square rounded-full border border-orange-500/40 animate-ping" />
                                    </div>

                                    <div className="w-4 h-4 rotate-45 bg-orange-500 border border-orange-300 shadow-[0_0_10px_#f97316] relative z-10" />
                                </>
                            ) : (
                                <div className="w-4 h-4 rotate-45 bg-stone-800 border border-stone-600 relative z-10" />
                            )}
                        </div>
                    );
                })}
            </div>
        </aside>
    );
}
