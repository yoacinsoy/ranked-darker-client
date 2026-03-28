import Image from "next/image";
import TechStack from "@/features/deals/components/TechStack";

export default function Build() {
    return (
        <section
            className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
            id="architecture"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-center md:text-left max-w-xl mx-8 md:mx-8 sm:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Full Stack Developer passionate about creating impactful digital
                        experiences. Specialist in modern technologies such as React,
                        Next.js, Vue, and Laravel. Always seeking new challenges and
                        opportunities to grow professionally.
                    </p>

                    <div className="mt-8 space-y-4">
                        <TechStack />

                        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
                            Linux and open source enthusiast, always eager to contribute and
                            learn from the community.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-sm sm:max-w-md">
                        <Image
                            src="/yo.png"
                            alt="Wallace Henrique Carneiro, developer"
                            width={1200}
                            height={1200}
                            className="rounded-2xl w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
