import Link from "next/link";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function DiscordLink() {
    return (
        <Link
            href="https://discord.gg/seu-link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2

                text-sm md:text-base
                tracking-widest

                text-indigo-300/80
                transition-all duration-300

                hover:text-indigo-200
            "
        >
            {/* Ícone */}
            <DiscordLogoIcon
                className="w-4 h-4
                    opacity-80
                    group-hover:opacity-100
                    transition
                "
            />

            {/* Texto */}
            <span className="relative z-10">
                Discord
            </span>

            {/* Linha animada */}
            <span
                className="absolute left-0 -bottom-1
                    h-[1px] w-0
                    bg-gradient-to-r from-transparent via-indigo-400 to-transparent

                    transition-all duration-300
                    group-hover:w-full
                "
            />

            {/* Glow arcano */}
            <span
                className="absolute inset-0
                    opacity-0 group-hover:opacity-100

                    bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_70%)]
                    blur-md
                    transition-opacity duration-300
                "
            />
        </Link>
    );
}
