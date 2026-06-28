import { motion } from 'framer-motion';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section className="border-t border-[#1F2937] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6EE7E0] sm:text-xs sm:tracking-[0.28em]">
            // SKILLS
          </p>
          <h2 className="text-3xl font-black tracking-normal text-[#F8FAFC] sm:text-5xl">
            Tools I Use
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#94A3B8]">
            Teknologi yang saya gunakan untuk membangun tampilan frontend, backend sederhana,
            integrasi database, dan workflow pengembangan yang rapi.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="min-w-0 break-words border border-[#1F2937] bg-[#111821] px-3 py-4 text-center text-xs font-bold text-[#F8FAFC] transition hover:-translate-y-0.5 hover:border-[#6EE7E0] hover:text-[#6EE7E0] sm:px-4 sm:text-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
