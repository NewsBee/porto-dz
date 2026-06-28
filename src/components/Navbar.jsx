import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1F2937]/80 bg-[#0B0F14]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 transition hover:-translate-y-0.5"
          onClick={closeMenu}
          aria-label="Kembali ke bagian utama"
        >
          <span className="flex h-11 w-11 items-center justify-center border border-[#1F2937] bg-[#111821] p-1.5 transition group-hover:border-[#6EE7E0] group-hover:shadow-[0_0_18px_rgba(110,231,224,0.18)]">
            <img
              src="/dz-logo.svg"
              alt="Dzaki logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-bold tracking-[0.18em] text-[#F8FAFC] transition group-hover:text-[#6EE7E0]">
              DZAKI
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#94A3B8] transition hover:text-[#6EE7E0]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-[#1F2937] bg-[#111821] text-[#F8FAFC] transition hover:border-[#6EE7E0] hover:text-[#6EE7E0] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#1F2937] bg-[#0B0F14] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-1 py-3 text-sm font-medium text-[#94A3B8] transition hover:text-[#6EE7E0]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
