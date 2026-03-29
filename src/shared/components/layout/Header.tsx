import GithubLink from "@/shared/components/ui/GithubLink";
import BrandTitle from "@/shared/components/ui/BrandTitle";
import NavLink from "@/shared/components/ui/NavLink";
import DiscordLink from "@/features/discord/DiscordButton";

export default function Header() {
    return (
        <header
            className="
                fixed top-0 w-full z-90
                flex items-center justify-between
                px-6 py-2
                bg-[#0b0b0c]
                border-b border-zinc-800
            "
        >
            {/* LEFT */}
            <div className="flex items-center gap-3">
                <GithubLink />
            </div>

            {/* CENTER */}
            <nav className="flex items-center gap-6">
                <BrandTitle />
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <NavLink active>BUILD</NavLink>
                <NavLink>COMMUNITY</NavLink>
                <NavLink>MARKET</NavLink>
                <NavLink>DEALS</NavLink>
                <NavLink>MAPS</NavLink>
                <DiscordLink />
            </div>
        </header>
    );
}
