import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Leaf, Heart } from 'lucide-react';

const values = [
  { icon: Award, title: 'Specialty Grade', desc: 'Every bean sourced from award-winning farms across Ethiopia, Colombia, and Brazil.' },
  { icon: Leaf, title: 'Sustainably Sourced', desc: 'We partner with eco-conscious farmers who share our commitment to the planet.' },
  { icon: Heart, title: 'Made with Passion', desc: 'Our baristas are trained to craft each cup as a personal expression of artistry.' },
];

export default function About() {
  const heading = useScrollAnimation();
  const images = useScrollAnimation();
  const text = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream dark:bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso dark:text-cream font-semibold">
            More Than Just Coffee
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div
            ref={images.ref}
            className={`relative transition-all duration-800 delay-100 ${
              images.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                    alt="Café interior"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                    alt="Coffee art"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                    alt="Coffee beans"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"
                    alt="Barista preparing coffee"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber text-cream rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-serif text-3xl font-bold">5+</p>
              <p className="text-xs font-medium opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* Text */}
          <div
            ref={text.ref}
            className={`transition-all duration-800 delay-200 ${
              text.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-espresso/70 dark:text-cream/70 text-lg leading-relaxed mb-6">
              Born from a love of exceptional coffee and warm hospitality, Cappuccino Kenitra opened its doors
              in the heart of Kenitra to offer the city a truly elevated café experience.
            </p>
            <p className="text-espresso/70 dark:text-cream/70 text-lg leading-relaxed mb-10">
              We believe a great cup of coffee is a moment — a pause in the day that deserves to be savored.
              Our space was designed to feel like a second home: intimate, beautiful, and full of life.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-sand dark:bg-espresso-light flex items-center justify-center group-hover:bg-amber transition-colors duration-300">
                    <Icon size={20} className="text-amber group-hover:text-cream transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso dark:text-cream mb-1">{title}</h3>
                    <p className="text-espresso/60 dark:text-cream/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
