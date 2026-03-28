import { Mail, MapPin, Send } from "lucide-react";
import { SITE } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 z-90">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase mb-3 text-zinc-500 dark:text-zinc-400">
          Get in touch
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Contact
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400">
            <MapPin aria-hidden="true" className="w-5 h-5 shrink-0" />
            <span className="text-sm">Brazil</span>
          </div>

          <a
            href={`mailto:contact@${SITE.name.toLowerCase().replaceAll(" ", "")}.dev`}
            className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <Mail aria-hidden="true" className="w-5 h-5 shrink-0" />
            <span className="text-sm">Send an email</span>
          </a>
        </div>

        <a
          href={SITE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm hover:opacity-80 transition-opacity"
        >
          <Send aria-hidden="true" className="w-4 h-4" />
          View GitHub
        </a>
      </div>
    </section>
  );
}
