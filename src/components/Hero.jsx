import { motion } from 'framer-motion';
import { ArrowRight, Code2, Send, Sparkles } from 'lucide-react';

const codeLines = [
  'const profile = {',
  "  name: 'Dzaki Zuhditiya Maulana',",
  "  role: 'Web Developer',",
  "  location: 'Indonesia',",
  "  since: 2022,",
  "  experience: ['Educourse Intern', 'Freelance Projects', 'Mobile App'],",
  "  focus: 'Websites, dashboards, web apps',",
  "  contact: 'dzaki.zuh10@gmail.com'",
  '};',
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-[#6EE7E0]/40 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#6EE7E0]">
            // DZAKI ZUHDITIYA MAULANA
          </p>

          <div className="mb-6 inline-flex items-center gap-2 border border-[#1F2937] bg-[#111821] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#CBD5E1]">
            <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_12px_rgba(34,197,94,0.75)]" />
            Available for freelance projects
          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-[0.92] tracking-normal text-[#F8FAFC] sm:text-7xl lg:text-8xl">
            Building
            <span className="block text-[#6EE7E0]">Web Apps</span>
            {/* <span className="block">That Work</span>
            <span className="block">Well</span> */}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#94A3B8] sm:text-lg">
            Saya membangun website, landing page, dashboard, dan aplikasi web yang responsif,
            rapi, serta mudah digunakan. Sejak 2022 saya mengerjakan project freelance dan pernah
            magang satu tahun di Educourse sebagai bagian dari tim pengembangan web.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-[#6EE7E0] bg-[#6EE7E0] px-6 py-3 text-sm font-bold text-[#0B0F14] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#6EE7E0]"
            >
              Lihat Project <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#1F2937] bg-[#111821] px-6 py-3 text-sm font-bold text-[#F8FAFC] transition hover:-translate-y-0.5 hover:border-[#6EE7E0] hover:text-[#6EE7E0]"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#1F2937]">
            {[
              ['2022', 'Started'],
              ['100+', 'Projects'],
              ['Web', 'Focus'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-[#1F2937] py-4 last:border-r-0">
                <p className="text-2xl font-black text-[#F8FAFC]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#64748B]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-[#6EE7E0]/15" />
          {/* <div className="absolute -right-3 -top-3 z-10 hidden border border-[#6EE7E0]/40 bg-[#0B0F14] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6EE7E0] shadow-xl shadow-black/30 sm:flex">
            <Sparkles size={15} className="mr-2" />
            Clean UI
          </div> */}
          <div className="relative overflow-hidden border border-[#1F2937] bg-[#111821] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-[#1F2937] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full bg-[#6EE7E0]" />
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8]">
                <Code2 size={15} />
                developer.js
              </div>
            </div>

            <pre className="overflow-x-auto p-5 text-sm leading-7 text-[#F8FAFC] sm:p-7 sm:text-base">
              <code>
                {codeLines.map((line, index) => (
                  <span key={line} className="block">
                    <span className="mr-5 select-none text-[#475569]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={
                        line.includes('const') || line.includes('};')
                          ? 'text-[#6EE7E0]'
                          : 'text-[#CBD5E1]'
                      }
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </code>
            </pre>

            <div className="grid border-t border-[#1F2937] sm:grid-cols-3">
              {['React', 'Django', 'WordPress'].map((tool) => (
                <div
                  key={tool}
                  className="border-b border-[#1F2937] px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                    Stack
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#F8FAFC]">{tool}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[#1F2937] bg-[#0B0F14] px-5 py-3 text-sm font-bold text-[#F8FAFC] transition hover:border-[#6EE7E0] hover:text-[#6EE7E0]"
          >
            Request collaboration <Send size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
