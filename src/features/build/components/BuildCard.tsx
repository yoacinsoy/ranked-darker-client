"use client";

import { useState } from "react";
import { Build } from "../types/build.types";
import Image from "next/image";

type Props = {
    build: Build;
};

export default function BuildCard({ build }: Props) {
    const [expanded, setExpanded] = useState(false);
    const perkIconSrc = build.perks[0]?.image ?? build.image;

    return (
        <div
            onClick={() => setExpanded(!expanded)}
            className="relative w-full aspect-[634/152] bg-[url('/textures/Button.png')] bg-no-repeat bg-center bg-contain cursor-pointer transition-all duration-200 hover:brightness-105"
        >
            <div className="absolute left-5 top-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-zinc-800 border border-zinc-700 shadow-inner shadow-black/80"
            >
                <div className="relative w-full h-full bg-zinc-900 overflow-hidden border border-zinc-700"
                >
                    <Image
                        src={build.image}
                        alt={build.title}
                        fill
                        sizes="80px"
                        className="object-cover contrast-90 saturate-75"
                        priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 pointer-events-none" />
                </div>
            </div>

            <div className="ml-[100px] pr-4 flex flex-col justify-center h-full z-10 align-middle my-auto">
                <Image src={perkIconSrc} alt={build.class} width={60} height={60} className="mb-1" />
            </div>
        </div>
    );
}
