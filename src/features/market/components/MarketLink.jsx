import Link from "next/link";

export default function MarketLink() {
    return (
        <Link
            href="/market"
            className="
                group relative
                font-serif text-sm md:text-base
                tracking-widest

                text-amber-300/80
                transition-colors duration-300

                hover:text-amber-200
            "
        >
            <span className="relative z-10">
                Market
            </span>

            <span
                className="
                    absolute left-0 -bottom-1
                    h-[1px] w-0
                    bg-gradient-to-r from-transparent via-amber-500 to-transparent

                    transition-all duration-300
                    group-hover:w-full
                "
            />

            <span
                className="
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100

                    bg-[radial-gradient(circle,rgba(255,140,0,0.15),transparent_70%)]
                    blur-md
                    transition-opacity duration-300
                "
            />
        </Link>
    );
}
