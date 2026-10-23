import Navbar from "./components/Navbar";
import Projects from "./sections/Projects.jsx";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-200">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            About me
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Backend development with purpose.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            I build backend applications using Node.js and Express, with an
            emphasis on REST API design, authentication, database management,
            testing, and deployment. I'm continuing to strengthen my engineering
            skills by building practical projects.
          </p>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Technical skills
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Tools I work with
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "JavaScript",
                "Node.js",
                "Express.js",
                "REST APIs",
                "PostgreSQL",
                "Prisma ORM",
                "MongoDB",
                "Redis",
                "JWT Authentication",
                "Jest",
                "Docker",
                "Git",
                "CI/CD",
                "Socket.IO",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-[#0d1527] px-4 py-2.5 text-sm text-slate-300 transition hover:border-blue-400/50 hover:text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        <section
          id="experience"
          className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Experience
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Node.js Developer Intern
            </h2>
            <p className="mt-3 text-lg text-slate-300">Zennaxx Technology</p>
            <p className="mt-1 text-sm text-slate-500">
              April 2026 – October 2026
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-slate-400">
              Worked on Node.js backend projects involving REST APIs, database
              integration, testing, containerization, deployment, and related
              backend engineering practices.
            </p>
          </div>
        </section>

        <Education/>

        <Contact />
      </main>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Pujan Kadecha. Built with React and
        Node.js.
      </footer>
    </div>
  );
}
