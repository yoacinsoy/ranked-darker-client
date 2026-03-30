import Link from "next/link";
import { SITE } from "@/config/site";

export default function GithubLink() {
    return (
        <Link
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View profile on GitHub"
            title="View profile on GitHub"
            className="
                relative inline-flex items-center justify-center

                /* TAMANHO BASEADO NA IMAGEM */
                w-[260px]
                aspect-[634/152]

                /* IMAGEM DO BOTÃO */
                bg-[url('/textures/Button-Yellow.png')]
                bg-no-repeat
                bg-center
                bg-contain

                /* TEXTO */
                font-serif tracking-wide
                text-[#fcfcc0]

                transition-all duration-200
                hover:brightness-110
                active:scale-[0.98]
            "
        >
            <span className="relative z-10 whitespace-nowrap text-sm ">
                CHRONICLE ON GITHUB
            </span>
        </Link>
    );
}
