export default function HeroStats() {
    return (
        <div className="grid grid-cols-3 w-full border-y border-stone-800/80 bg-black/20 py-6 mb-8">

            <div className="flex flex-col items-center justify-center group cursor-default">
                <span className="font-mono text-2xl font-bold text-gray-200">14,052</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1 group-hover:text-parchment transition-colors">
                    Ouro
                </span>
            </div>

            <div className="flex flex-col items-center justify-center border-x border-stone-800/80">
                <span className="font-mono text-2xl font-bold text-gray-200">2.4</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1">
                    K/D
                </span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-2xl font-bold text-gray-200">68%</span>
                <span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-1">
                    Extração
                </span>
            </div>

        </div>
    );
}
