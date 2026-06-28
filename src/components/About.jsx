import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="border-t border-[#1F2937] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6EE7E0] sm:text-xs sm:tracking-[0.28em]">
            // ABOUT ME
          </p>
          <h2 className="text-3xl font-black tracking-normal text-[#F8FAFC] sm:text-5xl">
            Saya membangun web
            <span className="block text-[#6EE7E0]">dengan rapi.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="min-w-0 border border-[#1F2937] bg-[#111821] p-5 sm:p-8"
        >
          <p className="text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Saya Dzaki Zuhditiya Maulana. Saya mulai mengerjakan web development sejak 2022,
            dari membuat website sederhana, memperbaiki tampilan, sampai ikut mengembangkan
            fitur dan API untuk platform yang sudah berjalan.
          </p>
          <p className="mt-5 text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Saya pernah magang selama satu tahun di Educourse dan setelah itu melanjutkan
            pekerjaan sebagai freelance web developer. Dari pengalaman tersebut, saya terbiasa
            bekerja dengan kebutuhan yang berbeda-beda: company profile, platform edukasi,
            dashboard internal, sistem CBT, API, dan beberapa web app private untuk client.
          </p>
          <p className="mt-5 text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Stack yang sering saya gunakan adalah JavaScript, PHP, Python, React, Django,
            WordPress, Tailwind CSS, dan beberapa framework pendukung lain. Saya cukup nyaman
            bekerja di bagian UI maupun API, terutama untuk memastikan fitur bisa dipakai dengan
            jelas, stabil, dan mudah dilanjutkan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
