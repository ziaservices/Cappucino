import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToLocation = () => {
    document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Premium coffee"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-amber tracking-[0.25em] text-xs sm:text-sm uppercase font-medium mb-4">
            Est. 2020 · Kenitra, Morocco
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-bold leading-tight mb-6">
            Cappuccino
            <br />
            <em className="not-italic text-amber">Kenitra</em>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl md:text-2xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Premium Coffee Experience in Kenitra
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-amber text-cream font-medium text-base hover:bg-amber-dark shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            View Menu
          </button>
          <button
            onClick={scrollToLocation}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-cream/60 text-cream font-medium text-base hover:bg-cream/10 hover:border-cream transition-all duration-300 hover:-translate-y-1"
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-cream/50 hover:text-cream transition-colors duration-200 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
