import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const heading = useScrollAnimation();
  const form = useScrollAnimation();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setValues({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Cappuccino Kenitra! I'd like to get in touch.\n\nName: ${values.name}\nMessage: ${values.message}`
  );

  return (
    <section id="contact" className="py-24 md:py-32 bg-espresso overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-amber tracking-widest text-xs uppercase font-medium mb-3">Say Hello</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-cream/60 max-w-md mx-auto">
            Questions, reservations, or just want to say hi — we'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <div
          ref={form.ref}
          className={`bg-espresso-light rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-700 delay-100 ${
            form.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-4">
                <Send size={28} className="text-amber" />
              </div>
              <h3 className="font-serif text-2xl text-cream mb-2">Message Sent!</h3>
              <p className="text-cream/60">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-cream/70 text-sm mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-espresso border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-amber transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-cream/70 text-sm mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-espresso border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-amber transition-colors duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-cream/70 text-sm mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl bg-espresso border border-cream/10 text-cream placeholder-cream/30 focus:outline-none focus:border-amber transition-colors duration-200 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-amber text-cream font-medium hover:bg-amber-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  Send Message
                </button>
                <a
                  href={`https://wa.me/212600000000?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-green-500/60 text-green-400 font-medium hover:bg-green-500/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
