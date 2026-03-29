/** @type {import('@/types/nav.types').NavLink[]} */

export const ROUTES = {
    home: "#home",
    projects: "#projects",
    about: "#architecture",
    resume: "#stack",
    works: "#lab",
    contact: "#contact",
};

export const NAV_LINKS = [
    {
        id: "home",
        label: ".is()",
        terminalLabel: "whoami",
        href: ROUTES.home,
    },
    {
        id: "projects",
        label: ".projects()",
        terminalLabel: "ls projects",
        href: ROUTES.projects,
    },
    {
        id: "about",
        label: ".about()",
        terminalLabel: "cat about.md",
        href: ROUTES.about,
    },
    {
        id: "resume",
        label: ".resume()",
        terminalLabel: "cat resume.pdf",
        href: ROUTES.resume,
    },
    {
        id: "works",
        label: ".works()",
        terminalLabel: "ls works",
        href: ROUTES.works,
    },
    {
        id: "contact",
        label: ".contact()",
        terminalLabel: "ping contact",
        href: ROUTES.contact,
    },
];
