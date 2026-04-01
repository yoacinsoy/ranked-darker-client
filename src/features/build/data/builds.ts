import { Build } from "../types/build.types";
export const builds: Build[] = [
    {
        id: "fighter-1",
        class: "Fighter",
        title: "Tank PvP",
        description: "Alta defesa e sustain para combates longos.",
        image: "/classes/fighter.png",
        stats: {
            strength: 15,
            agility: 8,
            will: 5,
        },
        perks: [
            { name: "Defense Mastery", highlight: true },
            { name: "Shield Expert" },
        ],
        skills: [
            { name: "Taunt" },
            { name: "Shield Block", highlight: true },
        ],
        spells: [],
    },
];
