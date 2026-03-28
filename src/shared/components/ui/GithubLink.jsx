import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/config/site";

export default function GithubLink() {
    return (
        <Link
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View profile on GitHub"
            title="View profile on GitHub"
            className="
                relative flex items-center justify-center gap-3
                px-5 py-3

                text-amber-200
                font-serif tracking-wide

                bg-gradient-to-b from-[#2b1f14] to-[#1a120b]
                border border-amber-700/40

                shadow-[0_0_15px_rgba(255,180,100,0.15),inset_0_0_10px_rgba(0,0,0,0.8)]

                hover:from-[#3a2a1a] hover:to-[#20160d]
                hover:text-amber-100
                hover:shadow-[0_0_20px_rgba(255,200,120,0.25)]

                transition-all duration-300

                w-full md:w-auto
                max-w-xs md:max-w-fit

                before:absolute before:inset-0
                before:border before:border-amber-900/30
                before:rounded-sm
                before:pointer-events-none

                after:absolute after:inset-0
                after:bg-[radial-gradient(circle_at_center,rgba(255,180,100,0.15),transparent_70%)]
                after:opacity-0 hover:after:opacity-100
                after:transition-opacity
            "
        >
            <GithubIcon
                aria-hidden="true"
                size={18}
                className="text-amber-300 drop-shadow-[0_0_4px_rgba(255,200,120,0.6)]"
            />

            <span className="hidden sm:inline whitespace-nowrap">
                Chronicle on GitHub
            </span>
        </Link>
    );
}
