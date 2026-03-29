import type { Project } from "@/types/project.types";

export const projects: Project[] = [
    {
        id: "rpg-tasks",
        title: "App de Tarefas baseado em jogos RPG.",
        desc: "Um aplicativo de gerenciamento de tarefas inspirado em jogos de RPG.",
        image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
        href: null,
    },
    {
        id: "task-management",
        title: "Task Management App",
        desc:
            "Collaborative project management tool with Kanban boards and team workflows.",
        image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tags: ["TypeScript", "Next.js", "Prisma", "Tailwind"],
        href: null,
    },
    {
        id: "ai-chat",
        title: "AI Chat Interface",
        desc:
            "Conversational AI platform with natural language processing.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        tags: ["Python", "FastAPI", "OpenAI", "React"],
        href: null,
    },
];
