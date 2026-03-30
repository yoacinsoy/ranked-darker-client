import Header from "@/shared/components/layout/Header";
import Grid from "@/shared/components/ui/Grid";

import Hero from "@/features/hero/components/Hero";
import About from "@/features/build/components/BuildSection";
import Projects from "@/features/community/components/CommunitySection";
import Works from "@/features/maps/components/MapsSection";
import Contact from "@/features/market/components/MarketSection";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background font-sans overflow-x-hidden">
            <Header />
            <Grid />

            <section
                id="home"
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden z-70"
            >
                <Hero />
                <About />
            </section>

            <Projects />
            <Works />
            <Contact />
        </div>
    );
}
