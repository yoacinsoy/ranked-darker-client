"use client";

import { useState, type FC } from "react";
import Image from "next/image";
import { Build, BuildItem } from "../types/build.types";
import { Tooltip } from "@/shared/components/Tooltip";

interface PerkIconProps {
    perk: BuildItem;
    index: number;
}

const PerkIcon: FC<PerkIconProps> = ({ perk }) => {
    if (!perk.image) return null;

    const hasTooltip = perk.name || perk.description;

    const perkContent = (
        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 ${hasTooltip ? "cursor-help" : ""}`}>
            <Image
                src={perk.image}
                alt={perk.name || "Perk"}
                fill
                className="object-cover rounded transition-transform duration-200 hover:scale-105"
            />
        </div>
    );

    if (hasTooltip) {
        return (
            <Tooltip
                title={perk.name}
                content={perk.description || `Perk: ${perk.name}`}
                placement="top"
            >
                {perkContent}
            </Tooltip>
        );
    }

    return perkContent;
};

interface SkillItemProps {
    skill: BuildItem;
    index: number;
}

const SkillItem: FC<SkillItemProps> = ({ skill }) => {
    const hasTooltip = skill.name || skill.description;

    const skillContent = (
        <div className={`flex items-center justify-center p-1 rounded-lg ${hasTooltip ? "cursor-help" : ""}`}>
            {skill.image && (
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <Image
                        src={skill.image}
                        alt={skill.name || "Skill"}
                        fill
                        className="object-cover rounded border border-zinc-500/30 shadow-sm shadow-zinc-500/30 transition-transform duration-200 hover:scale-105"
                    />
                </div>
            )}
        </div>
    );

    if (hasTooltip) {
        return (
            <Tooltip
                title={skill.name}
                content={skill.description || `Skill: ${skill.name}`}
                placement="bottom"
            >
                {skillContent}
            </Tooltip>
        );
    }

    return skillContent;
};

interface SpellItemProps {
    spell: BuildItem;
    index: number;
}

const SpellItem: FC<SpellItemProps> = ({ spell }) => {
    const hasTooltip = spell.name || spell.description;

    const spellContent = (
        <div className={`flex items-center gap-2 p-2 ${hasTooltip ? "cursor-help hover:bg-zinc-800/50 rounded-lg transition-all duration-200" : ""}`}>
            {spell.image && (
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                    <Image
                        src={spell.image}
                        alt={spell.name || "Spell"}
                        fill
                        className="object-cover transition-transform duration-200 hover:scale-105"
                    />
                </div>
            )}
        </div>
    );

    if (hasTooltip) {
        return (
            <Tooltip
                title={spell.name}
                content={spell.description || `Spell: ${spell.name}`}
                placement="bottom"
            >
                {spellContent}
            </Tooltip>
        );
    }

    return spellContent;
};

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
    <div className="p-4 sm:p-6">
        {build.skills.length > 0 && (
            <>
                <SectionTitle title="Skills" />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                    {build.skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} index={index} />
                    ))}
                </div>
            </>
        )}

        {build.spells.length > 0 && (
            <>
                <SectionTitle title="Spells" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {build.spells.map((spell, index) => (
                        <SpellItem key={index} spell={spell} index={index} />
                    ))}
                </div>
            </>
        )}

        <div className="mt-6 p-3 sm:p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
            <h4 className="text-sm font-semibold text-amber-400 mb-3 text-center sm:text-left">Stats Distribution</h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                <div className="p-2 bg-zinc-900/50 rounded">
                    <span className="text-xs text-gray-400 block mb-1">Strength</span>
                    <span className="text-lg sm:text-xl font-bold text-white">{build.stats.strength}</span>
                </div>
                <div className="p-2 bg-zinc-900/50 rounded">
                    <span className="text-xs text-gray-400 block mb-1">Agility</span>
                    <span className="text-lg sm:text-xl font-bold text-white">{build.stats.agility}</span>
                </div>
                <div className="p-2 bg-zinc-900/50 rounded">
                    <span className="text-xs text-gray-400 block mb-1">Will</span>
                    <span className="text-lg sm:text-xl font-bold text-white">{build.stats.will}</span>
                </div>
            </div>
        </div>
    </div>
);

interface BuildCardProps {
    build: Build;
}

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
            {/* Button/Collapsed State */}
            <div
                role="button"
                tabIndex={0}
                aria-expanded={expanded}
                aria-label={`Build card for ${build.class}. Click to ${expanded ? 'collapse' : 'expand'} details.`}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className="relative w-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-lg cursor-pointer transition-all duration-200 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 overflow-hidden"
            >
                <div className="p-4 sm:p-6">
                    {/* Header Section */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-zinc-800 border border-zinc-600 rounded-lg flex-shrink-0 overflow-hidden">
                            <Image
                                src={build.image}
                                alt={build.title}
                                fill
                                sizes="(max-width: 640px) 56px, 64px"
                                className="object-cover contrast-90 saturate-75"
                                priority
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-xl font-bold text-white truncate">{build.class}</h3>
                            <p className="text-xs sm:text-sm text-amber-400 truncate">{build.title}</p>
                        </div>
                    </div>

                    {/* Perks Section */}
                    <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider text-center">Key Perks</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {build.perks.slice(0, 4).map((perk, index) => (
                                <PerkIcon key={index} perk={perk} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Expand Hint */}
                    {!expanded && (
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                            <span>Click to see full build details</span>
                            <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>

            {/* Expanded State */}
            {expanded && (
                <div className="relative mt-4 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <ExpandedContent build={build} />
                    <div className="px-4 sm:px-6 pb-4 text-center">
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
