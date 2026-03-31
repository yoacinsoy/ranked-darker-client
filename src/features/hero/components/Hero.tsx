import SidebarLeft from "@/features/hero/components/SidebarLeft";
import SidebarRight from "@/features/hero/components/SidebarRight";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4">
            <SidebarLeft />

            <section className="flex-1 flex flex-col justify-center items-center z-10 px-8 pb-12 relative w-full max-w-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.06)_0%,_transparent_60%)] animate-pulse pointer-events-none -z-10"></div>

                <div className="text-fire uppercase tracking-[0.4em] text-xs font-bold mb-4 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
                    Temporada #8
                </div>

                <div className="relative bg-stone-900/70 border border-stone-700/80 p-8 flex flex-col items-center backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9)] w-full rounded-sm before:content-[''] before:absolute before:inset-0 before:border before:border-gold/10 before:scale-[0.98] pointer-events-auto transition-transform duration-500 hover:scale-[1.02]">

                    <div className="flex items-center gap-6 mb-8 w-full justify-center">
                        <div className="relative w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center bg-stone-950 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                            <Image
                                src="/bosses/cyclops.png"
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
                            <h2 className="text-3xl font-black tracking-widest text-parchment text-3d mb-1">Cavaleiro Spectral</h2>
                            <div className="flex items-center gap-2 text-stone-400 text-sm">
                                <span className="tracking-widest">Arqueiro Sombrio</span>
                                <span className="text-stone-600">|</span>
                                <span className="text-gold font-bold flex items-center gap-1 drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]">
                                    <i className="ph-fill ph-star"></i> Campeão III
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 w-full border-y border-stone-800/80 bg-black/20 py-6 mb-8">
                        <div className="flex flex-col items-center justify-center group cursor-default">
                            <i className="ph-fill ph-coins text-2xl text-gold mb-2 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all"></i>
                            <span className="font-mono text-2xl font-bold text-gray-200">14,052</span>
                            <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1 group-hover:text-parchment transition-colors">Ouro Acumulado</span>
                        </div>

                        <div className="flex flex-col items-center justify-center border-x border-stone-800/80 group cursor-default">
                            <i className="ph-fill ph-sword text-2xl text-stone-400 mb-2 group-hover:text-red-500 group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-all"></i>
                            <span className="font-mono text-2xl font-bold text-gray-200">2.4</span>
                            <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1 group-hover:text-parchment transition-colors">K/D Ratio</span>
                        </div>

                        <div className="flex flex-col items-center justify-center group cursor-default">
                            <i className="ph-fill ph-door-open text-2xl text-blue-400 mb-2 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)] transition-all"></i>
                            <span className="font-mono text-2xl font-bold text-gray-200">68%</span>
                            <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1 group-hover:text-parchment transition-colors">Taxa Extração</span>
                        </div>
                    </div>

                    <button className="relative group overflow-hidden border border-fire bg-stone-950 px-12 py-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] focus:outline-none">
                        <div className="absolute inset-0 bg-fire/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        <span className="relative z-10 text-fire group-hover:text-white font-black tracking-[0.3em] text-xl transition-colors duration-300 flex items-center gap-3">
                            <i className="ph-fill ph-campfire animate-pulse"></i>
                            ADENTRAR MASMORRA
                        </span>

                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-fire opacity-70"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-fire opacity-70"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-fire opacity-70"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-fire opacity-70"></div>
                    </button>
                </div>

                <div className="mt-6 flex items-center gap-3 text-stone-500 font-mono text-xs tracking-widest bg-stone-900/50 px-4 py-1.5 rounded border border-stone-800 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    SERVIDORES ONLINE - PING: 24ms (SÃO PAULO)
                </div>
            </section>

            <SidebarRight />
        </section>
    );
}
