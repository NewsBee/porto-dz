import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Send } from 'lucide-react';
import { contacts } from '../data/contacts';

function Contact() {
  return (
    <section id="contact" className="border-t border-[#1F2937] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6EE7E0] sm:text-xs sm:tracking-[0.28em]">
            // CONTACT
          </p>
          <h2 className="text-3xl font-black tracking-normal text-[#F8FAFC] sm:text-5xl">
            Punya project?
            <span className="block text-[#6EE7E0]">Mari diskusikan.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
            Saya terbuka untuk pembuatan website portfolio, landing page, dashboard admin,
            sistem informasi sederhana, dan pengembangan aplikasi web berbasis kebutuhan.
            Kirim pesan melalui WhatsApp atau email untuk mulai berdiskusi.
          </p>
          <a
            href="https://wa.me/6287815180206"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-[#6EE7E0] bg-[#6EE7E0] px-6 py-3 text-sm font-bold text-[#0B0F14] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#6EE7E0] sm:w-auto"
          >
            Chat WhatsApp <ArrowRight size={18} />
          </a>

          <div className="mt-6 flex max-w-md items-start gap-3 border border-[#1F2937] bg-[#111821] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#1F2937] bg-[#0B0F14] text-[#6EE7E0]">
              <Clock3 size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F8FAFC]">Fast response for project briefs</p>
              <p className="mt-1 text-sm leading-6 text-[#94A3B8]">
                Kirim kebutuhan, referensi desain, atau target deadline agar diskusi lebih cepat.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="grid gap-3 sm:grid-cols-2"
        >
          <a
            href="mailto:dzaki.zuh10@gmail.com?subject=Project%20Inquiry%20-%20Portfolio"
            className="group min-w-0 border border-[#6EE7E0]/60 bg-[#6EE7E0] p-5 text-[#0B0F14] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#6EE7E0] sm:col-span-2"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[#0B0F14]/20 bg-[#0B0F14] text-[#6EE7E0] transition group-hover:border-[#6EE7E0]">
              <Send size={20} />
            </div>
            <p className="text-base font-black sm:text-lg">Start a project discussion</p>
            <p className="mt-2 text-sm leading-6 text-[#0B0F14]/75 transition group-hover:text-[#94A3B8]">
              Email langsung dengan subject project inquiry agar mudah saya follow up.
            </p>
          </a>

          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group min-w-0 border border-[#1F2937] bg-[#111821] p-5 transition hover:-translate-y-0.5 hover:border-[#6EE7E0]/80"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-[#1F2937] bg-[#0B0F14] text-[#6EE7E0] transition group-hover:border-[#6EE7E0]">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-bold text-[#F8FAFC]">{contact.label}</p>
                <p className="mt-2 break-words text-sm leading-6 text-[#94A3B8]">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
