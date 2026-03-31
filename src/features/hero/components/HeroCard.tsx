import Image from "next/image";

export default function HeroCard() {
    return (
        <div className="relative bg-stone-900/70 border border-stone-700/80 p-8 flex flex-col items-center backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9)] w-full rounded-sm before:content-[''] before:absolute before:inset-0 before:border before:border-gold/10 before:scale-[0.98] pointer-events-auto transition-transform duration-500 hover:scale-[1.02]">

            <div className="flex items-center gap-6 mb-8 w-full justify-center">
                <div className="relative w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center bg-stone-950 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <Image
                        src="/bosses/lich.png"
                        alt="Cyclops Avatar"
                        width={80}
                        height={80}
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute -bottom-2 bg-zinc-800 border border-gold text-gold text-[0.6rem] font-bold px-2 py-0.5 rounded-sm font-mono tracking-widest">
                        Nv.45
                    </div>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-black tracking-widest text-parchment text-3d mb-1">
                        Cavaleiro Spectral
                    </h2>
                    <div className="flex items-center gap-2 text-stone-400 text-sm">
                        <span className="tracking-widest">Arqueiro Sombrio</span>
                        <span className="text-stone-600">|</span>
                        <span className="text-gold font-bold flex items-center gap-1 drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]">
                            Campeão III
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
