import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Selected work
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Projects I've built
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Practical backend projects demonstrating API development,
          authentication, database design, testing, and deployment.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
