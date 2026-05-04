import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = ['All', 'Hot', 'Cold', 'Desserts'];

const items = [
  {
    id: 1,
    name: 'Angel',
    category: 'Hot',
    desc: 'Sweetness overdose + honey and a cherry on top.',
    price: '∞ MAD',
    image: 'https://github.com/ziaservices/Cappucino/blob/main/src/components/angel.jpg?raw=true',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Espresso',
    category: 'Hot',
    desc: 'A bold, concentrated shot with a rich golden crema.',
    price: '20 MAD',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 3,
    name: 'Flat White',
    category: 'Hot',
    desc: 'Smooth ristretto with silky micro-foam, an Antipodean classic.',
    price: '30 MAD',
    image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 4,
    name: 'Caramel Latte',
    category: 'Hot',
    desc: 'House espresso with steamed milk and a drizzle of artisan caramel.',
    price: '38 MAD',
    image: 'https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    tag: 'Fan Favorite',
  },
  {
    id: 5,
    name: 'Cold Brew',
    category: 'Cold',
    desc: '24-hour slow-steeped coffee, served over ice for a smooth finish.',
    price: '40 MAD',
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 6,
    name: 'Iced Matcha Latte',
    category: 'Cold',
    desc: 'Ceremonial-grade matcha blended with chilled oat milk over ice.',
    price: '42 MAD',
    image: 'https://images.pexels.com/photos/5946627/pexels-photo-5946627.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    tag: 'New',
  },
  {
    id: 7,
    name: 'Tiramisu',
    category: 'Desserts',
    desc: 'Classic Italian layers of mascarpone, espresso, and cocoa dust.',
    price: '45 MAD',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    id: 8,
    name: 'Cheesecake',
    category: 'Desserts',
    desc: 'New York-style baked cheesecake with a buttery graham cracker base.',
    price: '40 MAD',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
];

import { useState } from 'react';

export default function Menu() {
  const [active, setActive] = useState('All');
  const heading = useScrollAnimation();

  const filtered = active === 'All' ? items : items.filter(i => i.category === active);

  return (
    <section id="menu" className="py-24 md:py-32 bg-sand dark:bg-espresso-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">Our Offerings</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso dark:text-cream font-semibold mb-4">
            The Menu
          </h2>
          <p className="text-espresso/60 dark:text-cream/60 max-w-md mx-auto">
            Each item crafted with intention. Every sip an experience.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-amber text-cream shadow-md'
                  : 'bg-cream dark:bg-espresso text-espresso/70 dark:text-cream/70 hover:bg-amber/10 dark:hover:bg-amber/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-espresso dark:bg-cream text-cream dark:text-espresso font-medium hover:bg-amber dark:hover:bg-amber dark:hover:text-cream shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, delay }: { item: typeof items[0]; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group bg-cream dark:bg-espresso rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-amber text-cream text-xs font-semibold px-3 py-1 rounded-full shadow">
            {item.tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-serif font-semibold text-espresso dark:text-cream text-base">{item.name}</h3>
          <span className="text-amber font-semibold text-sm ml-2 flex-shrink-0">{item.price}</span>
        </div>
        <p className="text-espresso/60 dark:text-cream/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
