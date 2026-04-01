export type BuildItem = {
    name: string;
    description?: string;
    icon?: string;
    highlight?: boolean;
};

export type Build = {
    id: string;
    title: string;
    description: string;

    stats: {
        strength: number;
        agility: number;
        will: number;
    };

    class: string;
    image: string;

    perks: BuildItem[];
    skills: BuildItem[];
    spells: BuildItem[];
};
