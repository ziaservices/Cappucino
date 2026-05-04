import { Coffee, Instagram, MapPin, Clock, Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center shadow-md">
                <Coffee size={16} className="text-cream" />
              </div>
              <span className="font-serif font-semibold text-lg text-cream">
                Cappuccino<span className="text-amber"> Kenitra</span>
              </span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Crafting extraordinary coffee experiences in the heart of Kenitra, Morocco since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/cappuccino.kenitra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-amber hover:border-amber/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/212600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-green-400 hover:border-green-400/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-wide">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Menu', href: '#menu' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-cream/50 text-sm hover:text-amber transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-wide">Hours</h4>
            <div className="space-y-3">
              {[
                { day: 'Mon – Fri', time: '7:00 – 23:00' },
                { day: 'Saturday', time: '8:00 – 23:30' },
                { day: 'Sunday', time: '9:00 – 22:00' },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-cream/50">{day}</span>
                  <span className="text-cream/80">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-5 tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-amber flex-shrink-0 mt-0.5" />
                <p className="text-cream/50 text-sm leading-relaxed">
                  Ave Mohammed V, Centre Ville<br />
                  Kenitra 14000, Morocco
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-amber flex-shrink-0" />
                <p className="text-cream/50 text-sm">+212 600-000-000</p>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={16} className="text-amber flex-shrink-0" />
                <p className="text-cream/50 text-sm">Open Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} Cappuccino Kenitra. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Crafted with love in Morocco
          </p>
        </div>
      </div>
    </footer>
  );
}
