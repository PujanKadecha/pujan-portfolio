import { motion } from "framer-motion";
import { Code, ExternalLink, Container } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const links = [
    {
      key: "github",
      label: "GitHub",
      url: project.github,
      icon: Code,
    },
    {
      key: "liveDemo",
      label: "Live Demo",
      url: project.liveDemo,
      icon: ExternalLink,
    },
    {
      key: "frontendDocker",
      label: "Frontend Docker",
      url: project.frontendDocker,
      icon: Container,
    },
    {
      key: "backendDocker",
      label: "Backend Docker",
      url: project.backendDocker,
      icon: Container,
    },
  ].filter((link) => link.url?.trim());

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0d1527] p-6 transition hover:-translate-y-1 hover:border-blue-400/40 sm:p-7"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
        <Code size={23} />
      </div>

      <h3 className="text-xl font-bold text-white">{project.title}</h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-4 border-t border-white/10 pt-5">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
              >
                <Icon size={15} />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </motion.article>
  );
}
