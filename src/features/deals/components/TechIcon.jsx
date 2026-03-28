import Image from "next/image";

/**
 * Displays an SVG icon for a given technology slug.
 *
 * @param {{ name: string }} props
 */
export default function TechIcon({ name }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100/40 dark:bg-white/5 backdrop-blur-md hover:scale-110 transition">
      <Image src={`/${name}.svg`} alt={name} width={22} height={22} />
    </div>
  );
}
