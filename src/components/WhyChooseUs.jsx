import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const reasons = [
  { icon: "🏅", title: "SLMC Registered", desc: "Both our physiotherapists are officially registered with the Sri Lanka Medical Council." },
  { icon: "🎓", title: "University Trained", desc: "Graduates of Kotelawala Defence University with Honours degrees in Physiotherapy." },
  { icon: "🔬", title: "Evidence-Based Care", desc: "All treatments follow the latest clinical research and physiotherapy best practices." },
  { icon: "🤝", title: "Personalized Treatment", desc: "Every patient receives a customized treatment plan based on their unique condition." },
  { icon: "🕗", title: "Open 7 Days", desc: "We're available Monday through Sunday, 9am to 8pm for your convenience." },
  { icon: "💚", title: "Compassionate Team", desc: "We treat every patient with kindness, respect, and equal dignity — no exceptions." },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="section-padding bg-gradient-to-br from-primary to-[#0d6d96] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="Why choose Rapid Fix Physio"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Why Patients Trust Us</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">Why Choose Rapid Fix Physio?</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We go beyond treatment — we build lasting partnerships with our patients on the road to recovery.
          </p>
        </header>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={cardVariant}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-400 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{r.icon}</div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
