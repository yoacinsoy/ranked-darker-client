"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import NavLink from "@/shared/components/ui/NavLink";
import DiscordLink from "@/features/discord/DiscordButton";

import {
    Hammer,
    Compass,
    ShoppingCart,
    Users2Icon as Users,
    Map,
} from "lucide-react";

function Divider() {
    return (
        <div className="relative h-7 w-px mx-3 bg-gradient-to-b from-transparent via-amber-300 to-transparent opacity-90 before:absolute before:inset-0 before:bg-amber-200/40 before:blur-[2px] before:opacity-70" />
    );
}

export default function Header() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const max = 200;
            const value = Math.min(window.scrollY / max, 1);
            setProgress(value);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-90 select-none grid grid-cols-3 items-center px-6 py-4 border-b border-zinc-800 bg-[#0b0b0c] bg-[url('/textures/navbar-texture.png')] bg-repeat bg-center bg-cover font-bold">

            <div className="flex items-center justify-start">
                <div className="flex items-center mr-4">
                    <Image
                        src="/rdc.png"
                        alt="RDC Logo"
                        width={70}
                        height={70}
                        className="object-contain pointer-events-none"
                        priority
                    />
                </div>

                <NavLink href="/build" icon={<Hammer size={16} />}>
                    BUILD
                </NavLink>

                <Divider />

                <NavLink href="/quest" icon={<Compass size={16} />}>
                    QUESTS
                </NavLink>
            </div>

            <div className="flex justify-center relative">
                <Image
                    src="/brand-title.png"
                    alt="Title Background"
                    width={400}
                    height={100}
                    style={{
                        transform: `translate(-50%, ${-8 - (progress * 32)}px) scale(${1 - progress * 0.1})`,
                        opacity: 1 - progress * 0.2,
                    }}
                    className="absolute left-1/2 will-change-transform -top-10"
                    priority
                />
            </div>

            <div className="flex items-center justify-end">
                <NavLink href="/market" icon={<ShoppingCart size={16} />}>
                    MARKET
                </NavLink>

                <Divider />

                <NavLink href="/community" icon={<Users size={16} />}>
                    FORUM
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
