import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "R.P Bhalodia College",
    duration: "2020 – 2023",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Marwadi University",
    duration: "2023 – 2025",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Education
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Academic background
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#0d1527] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-slate-300">{item.university}</p>

                  <p className="mt-2 text-sm text-slate-500">{item.duration}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
