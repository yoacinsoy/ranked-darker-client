import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
import HeroCard from "./HeroCard";
import HeroStats from "./HeroStats";
import HeroCTA from "./HeroCTA";
import HeroStatus from "./HeroStatus";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4">

            <SidebarLeft />

            <section className="flex-1 flex flex-col justify-center items-center z-10 px-8 pb-12 pt-46 relative w-full max-w-3xl">

                <div className="text-fire uppercase tracking-[0.4em] text-xs font-bold mb-4">
                    Temporada #8
                </div>

                <HeroCard />
                <HeroStats />
                <HeroCTA />
                <HeroStatus />

            </section>

            <SidebarRight />
        </section>
    );
}
