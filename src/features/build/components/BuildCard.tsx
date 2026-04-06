"use client";

import { useState, type FC } from "react";
import Image from "next/image";
import { Build, BuildItem } from "../types/build.types";

interface PerkIconProps {
    perk: BuildItem;
    index: number;
}

const PerkIcon: FC<PerkIconProps> = ({ perk, index }) => {
    if (!perk.image) return null;
    return (
        <div className="relative w-16 h-16">
            <Image
                src={perk.image}
                alt={perk.name}
                fill
                className="object-cover rounded"
            />
        </div>
    );
};

interface SkillItemProps {
    skill: BuildItem;
    index: number;
}

const SkillItem: FC<SkillItemProps> = ({ skill, index }) => (
    <div
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
                    className="object-cover rounded"
                />
            </div>
        )}
        <span className="text-xs text-gray-300">{skill.name}</span>
    </div>
);

interface SpellItemProps {
    spell: BuildItem;
    index: number;
}

const SpellItem: FC<SpellItemProps> = ({ spell }) => (
    <div className="flex items-center gap-2 p-2 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
        <span className="text-xs text-gray-300">{spell.name}</span>
    </div>
);

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
    <h4 className="text-lg font-semibold text-amber-400 mb-3 mt-6">{title}</h4>
);

interface ExpandedContentProps {
    build: Build;
}

const ExpandedContent: FC<ExpandedContentProps> = ({ build }) => (
    <div>
        {build.skills.length > 0 && (
            <>
                <SectionTitle title="Skills" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {build.skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} index={index} />
                    ))}
                </div>
            </>
        )}

        {build.spells.length > 0 && (
            <>
                <SectionTitle title="Spells" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {build.spells.map((spell, index) => (
                        <SpellItem key={index} spell={spell} index={index} />
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
);

interface BuildCardProps {
    build: Build;
}

const BUTTON_ASPECT_RATIO = '634/152';

export default function BuildCard({ build }: BuildCardProps) {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(prev => !prev);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div className="relative w-full">
            <div
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                aria-label={`Build card for ${build.class}. Click to ${expanded ? 'collapse' : 'expand'} details.`}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className="relative w-full bg-[url('/textures/Button.png')] bg-no-repeat bg-center bg-contain cursor-pointer transition-all duration-200 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                style={{ aspectRatio: BUTTON_ASPECT_RATIO }}
            >
                <div className="p-6">
                    <div className="flex items-center gap-4 mt-8 relative">
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

                        <div className="flex-1 absolute -top-12 -left-5">
                            <h3 className="text-xl font-bold text-white">{build.class}</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-6 gap-18 ml-18 -mt-15 mb-4">
                        {build.perks.map((perk, index) => (
                            <PerkIcon key={index} perk={perk} index={index} />
                        ))}
                    </div>

                    {!expanded && (
                        <div className="text-xs text-gray-500 mt-2">
                            Click to expand and see all {build.perks.length} perks
                        </div>
                    )}
                </div>
            </div>

            {expanded && (
                <div className="relative mt-2 bg-zinc-900/95 border border-zinc-700 rounded-lg p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    <ExpandedContent build={build} />
                    <div className="mt-4 text-center">
                        <button
                            onClick={handleToggle}
                            className="text-xs text-gray-400 hover:text-amber-400 transition-colors underline underline-offset-4"
                            aria-label="Collapse build details"
                        >
                            Click to collapse
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
