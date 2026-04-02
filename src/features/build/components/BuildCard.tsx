"use client";

import { useState } from "react";
import { Build } from "../types/build.types";
import Image from "next/image";

type Props = {
    build: Build;
};

export default function BuildCard({ build }: Props) {
    const [expanded, setExpanded] = useState(false);
    const perkIconSrc = build.perks[0]?.image ?? build.image;

    return (
        <div
            onClick={() => setExpanded(!expanded)}
            className="relative w-full bg-[url('/textures/Button.png')] bg-no-repeat bg-center bg-contain cursor-pointer transition-all duration-200 hover:brightness-105"
            style={{ aspectRatio: expanded ? 'auto' : '634/152' }}
        >
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-[60px] h-[60px] bg-zinc-800 border border-zinc-700 shadow-inner shadow-black/80 flex-shrink-0">
                        <div className="relative w-full h-full bg-zinc-900 overflow-hidden border border-zinc-700">
                            <Image
                                src={build.image}
                                alt={build.title}
                                fill
                                sizes="80px"
                                className="object-cover contrast-90 saturate-75"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{build.title}</h3>
                        <p className="text-sm text-gray-400">{build.class}</p>
                    </div>

                    <Image
                        src={perkIconSrc}
                        alt={build.class}
                        width={60}
                        height={60}
                        className="flex-shrink-0"
                    />
                </div>

                <p className="text-gray-300 text-sm mb-4">{build.description}</p>

                {expanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-700">
                        <h4 className="text-lg font-semibold text-amber-400 mb-3">Perks</h4>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {build.perks.map((perk, index) => (
                                perk.image && (
                                    <div key={index} className="relative w-12 h-12 mb-2">
                                        <Image
                                            src={perk.image}
                                            alt={perk.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover rounded"
                                        />
                                    </div>
                                )
                            ))}
                        </div>

                        {build.skills.length > 0 && (
                            <>
                                <h4 className="text-lg font-semibold text-amber-400 mb-3 mt-6">Skills</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {build.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-2 p-2 rounded-lg ${skill.highlight
                                                ? 'bg-amber-900/30 border border-amber-700/50'
                                                : 'bg-zinc-800/50 border border-zinc-700/50'
                                                }`}
                                        >
                                            {skill.image && (
                                                <div className="relative w-8 h-8 flex-shrink-0">
                                                    <Image
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        fill
                                                        sizes="32px"
                                                        className="object-cover rounded"
                                                    />
                                                </div>
                                            )}
                                            <span className="text-xs text-gray-300">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {build.spells.length > 0 && (
                            <>
                                <h4 className="text-lg font-semibold text-amber-400 mb-3 mt-6">Spells</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {build.spells.map((spell, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg"
                                        >
                                            <span className="text-xs text-gray-300">{spell.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="mt-6 p-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
                            <h4 className="text-sm font-semibold text-amber-400 mb-2">Stats Distribution</h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <span className="text-xs text-gray-400 block">Strength</span>
                                    <span className="text-lg font-bold text-white">{build.stats.strength}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Agility</span>
                                    <span className="text-lg font-bold text-white">{build.stats.agility}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Will</span>
                                    <span className="text-lg font-bold text-white">{build.stats.will}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!expanded && (
                    <div className="text-xs text-gray-500 mt-2">
                        Click to expand and see all {build.perks.length} perks
                    </div>
                )}
            </div>
        </div>
    );
}
