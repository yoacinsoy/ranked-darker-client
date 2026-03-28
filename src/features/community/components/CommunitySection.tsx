"use client";

import { motion } from "motion/react";
import CommunityCard from "@/features/community/components/CommunityCard";
import { projects } from "@/features/community/data/projects";

export default function CommunitySection() {
    return (
        <section id="projects" className="relative py-20 px-6 z-90">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileOutOfView={{ opacity: 0, y: 60 }}
                    viewport={{ margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase mb-3 text-zinc-500 dark:text-zinc-400">
                        Portfolio
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
                        Meus Projetos
                    </h2>

                    <p className="mt-4 max-w-lg mx-auto text-zinc-600 dark:text-zinc-400">
                        Uma seleção de projetos que demonstram minhas habilidades em design,
                        desenvolvimento e resolução de problemas.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <CommunityCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
