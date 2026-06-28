import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, MonitorSmartphone } from 'lucide-react';
import { projects } from '../data/projects';

const featuredProjects = projects.slice(0, 2);
const otherProjects = projects.slice(2);
const previewColors = ['#6EE7E0', '#38BDF8', '#A78BFA', '#F59E0B'];

function ProjectLinks({ project }) {
  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      {project.liveUrl && project.liveUrl !== '#' ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-0 items-center justify-center gap-2 border border-[#6EE7E0]/70 px-4 py-2.5 text-center text-sm font-bold text-[#6EE7E0] transition hover:bg-[#6EE7E0] hover:text-[#0B0F14]"
        >
          Visit Site <ExternalLink size={16} />
        </a>
      ) : (
        <span className="inline-flex min-w-0 items-center justify-center border border-[#1F2937] px-4 py-2.5 text-center text-sm font-bold text-[#64748B]">
          Private Demo
        </span>
      )}

      {project.sourceUrl ? (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-0 items-center justify-center gap-2 border border-[#1F2937] px-4 py-2.5 text-center text-sm font-bold text-[#F8FAFC] transition hover:border-[#6EE7E0] hover:text-[#6EE7E0]"
        >
          Repository <Github size={16} />
        </a>
      ) : (
        <span className="inline-flex min-w-0 items-center justify-center border border-[#1F2937] px-4 py-2.5 text-center text-sm font-bold text-[#64748B]">
          Client Work
        </span>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-[#1F2937] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6EE7E0] sm:text-xs sm:tracking-[0.28em]">
              // SELECTED PROJECTS
            </p>
            <h2 className="text-3xl font-black tracking-normal text-[#F8FAFC] sm:text-5xl">
              Work Showcase
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#94A3B8]">
            Pilihan project yang pernah saya kerjakan, baik sebagai pembuat utama maupun bagian
            dari tim. Beberapa project bersifat publik, sementara sebagian lainnya adalah web app
            private untuk kebutuhan internal client.
          </p>
        </div>

        <div className="mb-6 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden border border-[#1F2937] bg-[#111821] transition hover:-translate-y-1 hover:border-[#6EE7E0]/70"
            >
              <div className="relative min-h-56 border-b border-[#1F2937] bg-[#0B0F14] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B] sm:text-xs sm:tracking-[0.16em]">
                    <MonitorSmartphone size={15} />
                    Featured
                  </span>
                </div>

                <div className="grid min-h-40 gap-4 sm:h-40 sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="space-y-3">
                    <span
                      className="block h-10 w-10 border"
                      style={{
                        borderColor: previewColors[index],
                        backgroundColor: `${previewColors[index]}20`,
                      }}
                    />
                    <span className="block h-3 w-24 max-w-full bg-[#1F2937]" />
                    <span className="block h-3 w-16 max-w-full bg-[#1F2937]" />
                    <span
                      className="block h-8 w-28 max-w-full"
                      style={{ backgroundColor: previewColors[index] }}
                    />
                  </div>
                  <div className="grid min-h-32 grid-rows-[0.7fr_1fr] gap-3">
                    <div className="min-h-14 border border-[#1F2937] bg-[#111821]" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="min-h-14 border border-[#1F2937] bg-[#111821]" />
                      <div className="min-h-14 border border-[#1F2937] bg-[#111821]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="min-w-0 break-words border border-[#1F2937] bg-[#0B0F14] px-3 py-1.5 text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-[#6EE7E0] sm:text-[11px] sm:tracking-[0.14em]">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-[#64748B] transition group-hover:text-[#6EE7E0]"
                  />
                </div>

                <h3 className="text-xl font-black leading-7 text-[#F8FAFC] sm:text-2xl sm:leading-8">
                  {project.title}
                </h3>
                <p className="mt-2 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#6EE7E0] sm:text-xs sm:tracking-[0.18em]">
                  {project.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#94A3B8]">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#1F2937] bg-[#0B0F14] px-3 py-1.5 text-xs font-medium text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex min-h-[410px] min-w-0 flex-col border border-[#1F2937] bg-[#111821] p-5 transition hover:-translate-y-1 hover:border-[#6EE7E0]/70 sm:p-6"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#1F2937] bg-[#0B0F14] text-[#6EE7E0] transition group-hover:border-[#6EE7E0]">
                  <ArrowUpRight size={22} />
                </div>
                <span className="min-w-0 break-words border border-[#1F2937] bg-[#0B0F14] px-3 py-1.5 text-right text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-[#6EE7E0] sm:text-[11px] sm:tracking-[0.14em]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-7 text-[#F8FAFC]">{project.title}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6EE7E0]">
                {project.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-[#94A3B8]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#1F2937] bg-[#0B0F14] px-3 py-1.5 text-xs font-medium text-[#94A3B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ProjectLinks project={project} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
