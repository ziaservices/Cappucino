import { Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const posts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Aesthetic café table setup',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Cappuccino art',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Morning coffee',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Coffee beans close-up',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Iced cold brew',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    alt: 'Tiramisu dessert',
  },
];

export default function Gallery() {
  const heading = useScrollAnimation();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream dark:bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-12 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">On Instagram</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso dark:text-cream font-semibold mb-4">
            Life at the Café
          </h2>
          <p className="text-espresso/60 dark:text-cream/60 max-w-md mx-auto">
            Follow our daily moments — from the first pour to the last sip.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {posts.map((post, i) => (
            <GalleryItem key={post.id} post={post} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/cappuccino.kenitra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-espresso/20 dark:border-cream/20 text-espresso dark:text-cream font-medium hover:border-amber hover:text-amber dark:hover:border-amber dark:hover:text-amber transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram size={20} />
            Follow us @cappuccino.kenitra
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ post, delay }: { post: typeof posts[0]; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-600 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={post.image}
        alt={post.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-400 flex items-center justify-center">
        <Instagram
          size={32}
          className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
        />
      </div>
    </div>
  );
}
