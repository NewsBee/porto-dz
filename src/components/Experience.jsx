import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';
import { experiences } from '../data/experience';

function Experience() {
  return (
    <section id="experience" className="border-t border-[#1F2937] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#6EE7E0]">
              // EXPERIENCE
            </p>
            <h2 className="text-4xl font-black tracking-normal text-[#F8FAFC] sm:text-5xl">
              Started in 2022,
              <span className="block text-[#6EE7E0]">kept building.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#94A3B8]">
            Perjalanan saya dimulai dari pengembangan web sejak 2022, dilanjutkan dengan
            pengalaman magang selama satu tahun di Educourse, lalu mengerjakan berbagai project
            freelance dan personal project.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.title}-${experience.company}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="border border-[#1F2937] bg-[#111821] p-6 transition hover:-translate-y-0.5 hover:border-[#6EE7E0]/70"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[#1F2937] bg-[#0B0F14] text-[#6EE7E0]">
                <BriefcaseBusiness size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6EE7E0]">
                {experience.period}
              </p>
              <h3 className="mt-4 text-lg font-bold leading-7 text-[#F8FAFC]">
                {experience.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#94A3B8]">{experience.company}</p>
              <p className="mt-4 text-sm leading-7 text-[#94A3B8]">{experience.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
