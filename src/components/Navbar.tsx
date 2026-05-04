import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 dark:bg-espresso/95 backdrop-blur-md shadow-sm border-b border-sand/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); handleLink('#hero'); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-amber flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Coffee size={16} className="text-cream" />
              </div>
              <span className="font-serif font-semibold text-lg text-espresso dark:text-cream tracking-wide">
                Cappuccino<span className="text-amber"> Kenitra</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={e => { e.preventDefault(); handleLink(l.href); }}
                  className="text-sm font-medium text-espresso/70 dark:text-cream/70 hover:text-amber dark:hover:text-amber transition-colors duration-200 tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-full text-espresso/60 dark:text-cream/60 hover:text-amber dark:hover:text-amber hover:bg-sand/30 dark:hover:bg-espresso-light/30 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <a
                href="#menu"
                onClick={e => { e.preventDefault(); handleLink('#menu'); }}
                className="ml-2 px-5 py-2 rounded-full bg-amber text-cream text-sm font-medium hover:bg-amber-dark shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                View Menu
              </a>
            </div>

            {/* Mobile icons */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-espresso/60 dark:text-cream/60 hover:text-amber dark:hover:text-amber transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={() => setOpen(o => !o)}
                className="p-2 rounded-full text-espresso dark:text-cream hover:bg-sand/30 dark:hover:bg-espresso-light/30 transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-cream dark:bg-espresso shadow-2xl transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col pt-24 px-8 gap-6">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={e => { e.preventDefault(); handleLink(l.href); }}
                className="text-xl font-serif text-espresso dark:text-cream hover:text-amber dark:hover:text-amber transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={e => { e.preventDefault(); handleLink('#menu'); }}
              className="mt-4 px-6 py-3 rounded-full bg-amber text-cream text-center font-medium hover:bg-amber-dark transition-colors duration-300"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
