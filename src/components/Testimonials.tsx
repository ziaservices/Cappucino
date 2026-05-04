import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reviews = [
  {
    id: 1,
    name: 'Yasmine El Fassi',
    role: 'Food Blogger',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    rating: 5,
    text: "Hands down the best cappuccino I've had in Morocco. The atmosphere is stunning — I felt like I was in a café in Milan. I come here every weekend now.",
  },
  {
    id: 2,
    name: 'Karim Benali',
    role: 'Architect',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    rating: 5,
    text: 'The cold brew is absolutely exceptional. Strong, smooth, and perfectly balanced. The space is cozy and the staff genuinely care about every cup.',
  },
  {
    id: 3,
    name: 'Sofia Marchand',
    role: 'Interior Designer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    rating: 5,
    text: 'The tiramisu paired with their house espresso is my go-to ritual. The design of the café is impeccable — warm tones, great lighting, totally Instagrammable.',
  },
  {
    id: 4,
    name: 'Omar Idrissi',
    role: 'Entrepreneur',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&q=80',
    rating: 5,
    text: 'I hold most of my client meetings here. The environment is professional yet relaxed, and the service is always prompt. Cappuccino Kenitra is simply exceptional.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? 'text-amber fill-amber' : 'text-espresso/20 dark:text-cream/20'}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const heading = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream dark:bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso dark:text-cream font-semibold">
            What Our Guests Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, delay }: { review: typeof reviews[0]; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative bg-sand dark:bg-espresso-light rounded-3xl p-7 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote size={36} className="text-amber/20 absolute top-6 right-6" />
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber/30">
          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-espresso dark:text-cream text-sm">{review.name}</p>
          <p className="text-espresso/50 dark:text-cream/50 text-xs">{review.role}</p>
        </div>
        <div className="ml-auto">
          <Stars count={review.rating} />
        </div>
      </div>
      <p className="text-espresso/70 dark:text-cream/70 text-sm leading-relaxed italic">
        "{review.text}"
      </p>
    </div>
  );
}
