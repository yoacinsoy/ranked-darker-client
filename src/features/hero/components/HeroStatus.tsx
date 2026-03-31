export default function HeroStatus() {
    return (
        <div className="mt-6 flex items-center gap-3 text-stone-500 font-mono text-xs tracking-widest bg-stone-900/50 px-4 py-1.5 rounded border border-stone-800 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            SERVIDORES ONLINE - PING: 24ms
        </div>
    );
}
