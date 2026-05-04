import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 11:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 11:30 PM' },
  { day: 'Sunday', time: '9:00 AM – 10:00 PM' },
];

export default function Location() {
  const heading = useScrollAnimation();
  const info = useScrollAnimation();
  const map = useScrollAnimation();

  return (
    <section id="location" className="py-24 md:py-32 bg-sand dark:bg-espresso-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso dark:text-cream font-semibold">
            Come Visit Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div
            ref={info.ref}
            className={`space-y-5 transition-all duration-700 delay-100 ${
              info.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Address */}
            <div className="bg-cream dark:bg-espresso rounded-2xl p-6 shadow-md flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-amber" />
              </div>
              <div>
                <h3 className="font-semibold text-espresso dark:text-cream mb-1">Our Address</h3>
                <p className="text-espresso/60 dark:text-cream/60 text-sm leading-relaxed">
                  Avenue Mohammed V, Centre Ville<br />
                  Kenitra 14000, Morocco
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream dark:bg-espresso rounded-2xl p-6 shadow-md">
              <div className="flex gap-5 items-start mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber" />
                </div>
                <h3 className="font-semibold text-espresso dark:text-cream pt-2">Opening Hours</h3>
              </div>
              <div className="space-y-3 pl-16">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between text-sm border-b border-espresso/5 dark:border-cream/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-espresso/60 dark:text-cream/60">{day}</span>
                    <span className="font-medium text-espresso dark:text-cream">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="bg-cream dark:bg-espresso rounded-2xl p-6 shadow-md flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-amber" />
              </div>
              <div>
                <h3 className="font-semibold text-espresso dark:text-cream mb-1">Reservations</h3>
                <p className="text-espresso/60 dark:text-cream/60 text-sm">+212 600-000-000</p>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=Kenitra,Morocco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-amber text-cream font-medium hover:bg-amber-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div
            ref={map.ref}
            className={`transition-all duration-700 delay-200 ${
              map.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-cream dark:border-espresso h-[420px] lg:h-[520px] relative bg-sand dark:bg-espresso-light">
              <iframe
                title="Cappuccino Kenitra Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53154.10!2d-6.5890!3d34.2610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda74f53d74b24c9%3A0x68a8d99b9eb9d95e!2sKenitra%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
