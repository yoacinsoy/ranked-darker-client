import Image from "next/image";

import BrandTitle from "@/shared/components/ui/BrandTitle";
import NavLink from "@/shared/components/ui/NavLink";
import DiscordLink from "@/features/discord/DiscordButton";

import {
    Hammer,
    Users,
    ShoppingCart,
    Tag,
    Map,
} from "lucide-react";

function Divider() {
    return (
        <div
            className="relative h-7 w-px mx-3

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
            className="fixed top-0 w-full z-90

                grid grid-cols-3 items-center

                px-6 py-4

                border-b border-zinc-800

                bg-[#0b0b0c]
                bg-[url('/textures/Navbar-Background.svg')]
                bg-repeat
                bg-center
                bg-cover
            "
        >
            {/* ESQUERDA */}
            <div className="flex items-center justify-start">

                {/* LOGO */}
                <div className="flex items-center mr-4">
                    <Image
                        src="/rdc-logo.png"
                        alt="RDC Logo"
                        width={128}
                        height={128}
                        className="object-contain"
                        priority
                    />
                </div>

                <NavLink href="/build" icon={<Hammer size={16} />}>
                    BUILD
                </NavLink>

                <Divider />

                <NavLink href="/community" icon={<Users size={16} />}>
                    COMMUNITY
                </NavLink>
            </div>

            <div className="flex justify-center">
                <Image src="/brand-title.png"
                    alt="Title Background"
                    width={400}
                    height={100}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 "
                    priority
                />
            </div>

            <div className="flex items-center justify-end">
                <NavLink href="/market" icon={<ShoppingCart size={16} />}>
                    MARKET
                </NavLink>

                <Divider />

                <NavLink href="/deals" icon={<Tag size={16} />}>
                    DEALS
                </NavLink>

                <Divider />

                <NavLink href="/maps" icon={<Map size={16} />}>
                    MAPS
                </NavLink>

                <Divider />

                <DiscordLink />
            </div>
        </header>
    );
}
