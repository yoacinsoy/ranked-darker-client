import Image from "next/image";

export default function BrandTitle() {
    return (
        <div className="relative flex items-center gap-3 overflow-hidden">
            <span
                className="
                    relative z-10
                    text-xl md:text-2xl
                    font-serif font-bold
                    tracking-widest
                    select-none

                    text-transparent bg-clip-text
                    bg-[url('/textures/parchment.jpg')]
                    bg-cover bg-center

                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                "
            >
                <span
                    className="
                        bg-gradient-to-b from-amber-200 via-orange-400 to-amber-700
                        bg-clip-text text-transparent
                    "
                >
                    RANKED DARKER
                </span>
            </span>

        </div>
    );
}
