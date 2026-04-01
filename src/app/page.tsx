import Header from "@/shared/components/layout/Header";

import Hero from "@/features/hero/components/Hero";
import Builds from "@/features/build/components/BuildSection";
import Community from "@/features/community/components/CommunitySection";
import Maps from "@/features/maps/components/MapsSection";
import Market from "@/features/market/components/MarketSection";

export default function Home() {
    return (
        <div className="relative min-h-screen font-sans overflow-x-hidden">
            <Header />

            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                <Hero />
            </section>

            <Builds />
            <Community />
            <Maps />
            <Market />
        </div>
    );
}
