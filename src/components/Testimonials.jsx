import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── EDIT TESTIMONIALS HERE ─────────────────────────────────────────────────
const testimonials = [
  {
    name: "Nimal Perera",
    location: "Moratuwa",
    text: "After my stroke, I had very limited movement on my left side. The team at Rapid Fix Physio worked with me consistently and I've regained so much independence. I'm truly grateful.",
    rating: 5,
  },
  {
    name: "Sandya Fernando",
    location: "Panadura",
    text: "My back pain had been chronic for years. After just 6 sessions of manual therapy and exercise, I can finally sleep through the night and get back to my daily routine.",
    rating: 5,
  },
  {
    name: "Ruwan Jayasinghe",
    location: "Dehiwala",
    text: "As an athlete, getting back on the field quickly was critical. The sports physio program was structured perfectly. Professional, knowledgeable, and caring team.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <motion.section
      className="section-padding bg-cream"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="Patient testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="section-title mb-4">What Our Patients Say</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Real recoveries, real lives changed — we measure our success by yours.
          </p>
        </header>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={cardVariant}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 border border-slate-50 hover:border-accent/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(null).map((_, j) => (
                  <FiStar key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.text}"</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="text-primary font-semibold text-sm not-italic block">{t.name}</cite>
                  <span className="text-slate-400 text-xs">{t.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
