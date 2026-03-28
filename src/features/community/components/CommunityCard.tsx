"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

/**
 * Animated card displaying a single project.
 *
 * @param {{ project: import('@/types/project.types').Project, index: number }} props
 */
export default function CommunityCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileOutOfView={{ opacity: 0, y: 40 }}
            viewport={{ margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl overflow-hidden border border-white/15 dark:border-white/10 bg-white/[0.03] dark:bg-white/[0.02] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-white/[0.06] dark:hover:bg-white/[0.04] transition-all duration-500"
        >
            <div className="relative h-24 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {project.href && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-md">
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title}`}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
                        >
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            View Project
                        </a>
                    </div>
                )}
            </div>

            <div className="p-5 h-52 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] rounded-md bg-white/10 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
