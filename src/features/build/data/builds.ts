import { Build } from "../types/build.types";

export const builds: Build[] = [
    {
        id: "fighter-1",
        class: "Fighter",
        title: "Tank PvP",
        description: "Versatilidade total; pode usar quase qualquer arma e armadura de placa para alta sobrevivência [1, 3].",
        image: "/classes/fighter.png",
        stats: { strength: 15, agility: 8, will: 5 },
        perks: [
            { name: "Defense Mastery", image: "/classes/perks/fighter/defense-mastery.png", highlight: true },
            { name: "Shield Expert", image: "/classes/perks/fighter/shield-expert.png" }, // Melhora a velocidade de bloqueio.
            { name: "Swift", image: "/classes/perks/fighter/swift.png" } // Essencial para reduzir penalidade de movimento da placa.
        ],
        skills: [
            { name: "Second Wind", image: "/classes/skills/second-wind.png", highlight: true }, // Cura essencial para solo.
            { name: "Sprint", image: "/classes/skills/sprint.png" } // Vital para fechar distância contra Rangers.
        ],
        spells: [],
    },
    {
        id: "ranger-1",
        class: "Ranger",
        title: "Sharpshooter",
        description: "Especialista em combate à distância; utiliza arcos e armadilhas para controlar o cenário [1, 3].",
        image: "/classes/ranger.png",
        stats: { strength: 10, agility: 15, will: 5 },
        perks: [
            { name: "Sharpshooter", image: "/classes/perks/ranger/sharpshooter.png", highlight: true },
            { name: "Nimble Hands", image: "/classes/perks/ranger/nimble-hands.png" } // Aumenta a cadência de tiro.
        ],
        skills: [
            { name: "Quick Shot", image: "/classes/skills/ranger/quick-shot.png", highlight: true }, // Dispara múltiplas flechas rapidamente.
            { name: "Field Provisions", image: "/classes/skills/ranger/field-provisions.png" } // Cura baseada em comida.
        ],
        spells: [],
    },
    {
        id: "rogue-1",
        class: "Rogue",
        title: "Shadow Assassin",
        description: "Alta mobilidade e furtividade; focado em ataques de oportunidade e venenos [1].",
        image: "/classes/rogue.png",
        stats: { strength: 8, agility: 15, will: 5 },
        perks: [
            { name: "Poisoned Weapon", image: "/classes/perks/rogue/poisoned-weapon.png", highlight: true },
            { name: "Stealth", image: "/classes/perks/rogue/stealth.png" } // Permite mover-se invisível.
        ],
        skills: [
            { name: "Hide", image: "/classes/skills/rogue/hide.png", highlight: true },
            { name: "Rupture", image: "/classes/skills/rogue/rupture.png" } // Dano de sangramento adicional.
        ],
        spells: [],
    },
    {
        id: "wizard-1",
        class: "Wizard",
        title: "Spellweaver",
        description: "Dano mágico explosivo em área; frágil, mas capaz de conjurar feitiços poderosos [3, 4].",
        image: "/classes/wizard.png",
        stats: { strength: 5, agility: 7, will: 15 },
        perks: [
            { name: "Sage", image: "/classes/perks/wizard/sage.png", highlight: true },
            { name: "Quick Chant", image: "/classes/perks/wizard/quick-chant.png" }
        ],
        skills: [
            { name: "Spell Memory", highlight: true },
            { name: "Meditation" } // Recupera feitiços usados.
        ],
        spells: [
            { name: "Fireball" },
            { name: "Invisibility" }
        ],
    },
    {
        id: "sorcerer-1",
        class: "Sorcerer",
        title: "Elemental Catalyst",
        description: "Nova classe focada em magia elemental e manipulação direta de energia [5].",
        image: "/classes/sorcerer.png",
        stats: { strength: 5, agility: 8, will: 17 },
        perks: [
            { name: "Mana Flow", image: "/classes/perks/warlock/vampirism.png", highlight: true }
        ],
        skills: [
            { name: "Elemental Overload", image: "/classes/skills/warlock/malice.png" }
        ],
        spells: [], // Detalhes de feitiços específicos variam conforme atualizações recentes [5, 6].
    },
    {
        id: "cleric-1",
        class: "Cleric",
        title: "Holy Crusader",
        description: "Suporte e sustain; capaz de curar aliados e causar dano massivo a mortos-vivos [1, 4].",
        image: "/classes/cleric.png",
        stats: { strength: 12, agility: 5, will: 15 },
        perks: [
            { name: "Undead Slaying", image: "/classes/perks/cleric/undead-slaying.png", highlight: true },
            { name: "Advanced Healer", image: "/classes/perks/cleric/advanced-healer.png" } // Aumenta a eficácia de cura.
        ],
        skills: [
            { name: "Holy Light", image: "/classes/skills/cleric/holy-light.png" },
            { name: "Resurrection", image: "/classes/skills/cleric/resurrection.png" }
        ],
        spells: [
            { name: "Lesser Heal" },
            { name: "Holy Strike" }
        ],
    }
];
