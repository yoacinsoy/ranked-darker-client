// src/features/deals/data/tech-stack.ts
export type Tech =
    | "reactjs"
    | "nextjs"
    | "nuxtjs"
    | "tailwindcss"
    | "javascript"
    | "figma"
    | "nodejs"
    | "php"
    | "laravel"
    | "postgresql"
    | "redis"
    | "swagger"
    | "docker"
    | "kubernetes"
    | "linux"
    | "git"
    | "render"
    | "vercel"
    | "neovim"
    | "postman"
    | "jira"
    | "atlassian"
    | "azure"
    | "railway";

export const TECH_LABELS: Record<Tech, string> = {
    reactjs: "React",
    nextjs: "Next.js",
    nuxtjs: "Nuxt",
    tailwindcss: "Tailwind CSS",
    javascript: "JavaScript",
    figma: "Figma",
    nodejs: "Node.js",
    php: "PHP",
    laravel: "Laravel",
    postgresql: "PostgreSQL",
    redis: "Redis",
    swagger: "Swagger",
    docker: "Docker",
    kubernetes: "Kubernetes",
    linux: "Linux",
    git: "Git",
    render: "Render",
    vercel: "Vercel",
    neovim: "Neovim",
    postman: "Postman",
    jira: "Jira",
    atlassian: "Atlassian",
    azure: "Azure",
    railway: "Railway",
};

export const POPULAR_TECH: Tech[] = ["reactjs", "nextjs", "tailwindcss", "javascript"];

export const TECH_CATEGORIES: Record<string, Tech[]> = {
    Frontend: ["reactjs", "nextjs", "nuxtjs", "javascript", "tailwindcss"],
    Backend: ["nodejs", "php", "laravel", "postgresql", "redis"],
    DevOps: ["docker", "kubernetes", "render", "vercel"],
    Tools: ["git", "figma", "jira", "postman", "neovim", "atlassian", "azure", "railway"],
};
