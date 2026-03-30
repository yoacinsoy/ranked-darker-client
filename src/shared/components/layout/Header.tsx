import GithubLink from "@/shared/components/ui/GithubLink";
import BrandTitle from "@/shared/components/ui/BrandTitle";
import NavLink from "@/shared/components/ui/NavLink";
import DiscordLink from "@/features/discord/DiscordButton";

function Divider() {
    return (
        <div
            className="
                relative h-7 w-px mx-3

                bg-gradient-to-b
                from-transparent
                via-amber-300
                to-transparent

                opacity-90

                before:absolute before:inset-0
                before:bg-amber-200/40
                before:blur-[2px]
                before:opacity-70
            "
        />
    );
}

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
            <div className="flex items-center gap-3">
                <GithubLink />
            </div>

            <nav className="flex items-center gap-6">
                <BrandTitle />
            </nav>

            <div className="flex items-center">
                <NavLink href="/build">BUILD</NavLink>
                <Divider />
                <NavLink href="/community">COMMUNITY</NavLink>
                <Divider />
                <NavLink href="/market">MARKET</NavLink>
                <Divider />
                <NavLink href="/deals">DEALS</NavLink>
                <Divider />
                <NavLink href="/maps">MAPS</NavLink>
                <Divider />
                <DiscordLink />
            </div>
        </header>
    );
}
