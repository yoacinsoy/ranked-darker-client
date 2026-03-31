export default function HeroCTA() {
    return (
        <button
            className="
                relative inline-flex items-center justify-center

                w-full max-w-full h-[62px]

                bg-[url('/textures/Button-Yellow.png')]
                bg-no-repeat
                bg-center
                bg-contain

                tracking-wide
                text-[#fcfcc0]

                transition-all duration-200
                hover:brightness-110
                active:scale-[0.98]
            "
        >
            <span className="relative z-10 whitespace-nowrap text-sm font-bold tracking-[0.3em]">
                ADENTRAR MASMORRA
            </span>
        </button>
    );
}
