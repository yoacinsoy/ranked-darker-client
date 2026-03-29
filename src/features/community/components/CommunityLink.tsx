import Link from "next/link";

export default function CommunityLink() {
    return (
        <Link
            href="/community"
            className="
                group relative inline-block

                font-serif text-sm md:text-base
                tracking-widest

                text-amber-300/80
                transition-colors duration-300

                hover:text-amber-200
            "
        >
            {/* Texto */}
            <span className="relative z-10 inline-block">
                Community
            </span>

            {/* Linha rúnica */}
            <span
                className="
                    pointer-events-none
                    absolute left-0 bottom-0

                    h-[1px]
                    w-full

                    origin-left scale-x-0
                    bg-gradient-to-r from-transparent via-amber-500 to-transparent

                    transition-transform duration-300 ease-out
                    group-hover:scale-x-100
                "
            />

            {/* Glow */}
            <span
                className="
                    pointer-events-none
                    absolute inset-0

                    opacity-0 group-hover:opacity-100

                    bg-[radial-gradient(circle,rgba(255,140,0,0.15),transparent_70%)]
                    blur-md
                    transition-opacity duration-300
                "
            />
        </Link>
    );
}
