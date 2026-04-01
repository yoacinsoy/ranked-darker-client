import BuildCard from "./BuildCard";
import { builds } from "../data/builds";

export default function BuildSection() {
    return (
        <section
            className="relative z-20 w-full max-w-7xl mx-auto px-4 py-16"
            id="builds"
        >
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-white">
                    Builds
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {builds.map((build) => (
                    <BuildCard key={build.id} build={build} />
                ))}
            </div>
        </section>
    );
}
