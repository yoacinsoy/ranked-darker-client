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
                px-6 py-4

                border-b border-zinc-800

                bg-[#0b0b0c]
                bg-[url('/textures/Navbar-Background.png')]
                bg-repeat
                bg-center
                bg-cover
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
                <NavLink href="/build">BUILD</NavLink>
                <NavLink href="/community">COMMUNITY</NavLink>
                <NavLink href="/market">MARKET</NavLink>
                <NavLink href="/deals">DEALS</NavLink>
                <NavLink href="/maps">MAPS</NavLink>
                <DiscordLink />
            </div>
        </header>
    );
}
