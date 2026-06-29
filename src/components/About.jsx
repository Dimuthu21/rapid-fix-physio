import { FiEye, FiTarget, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

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

const pillars = [
  {
    icon: <FiEye size={24} />,
    title: "Our Vision",
    text: "To be a trusted physiotherapy clinic that restores health, independence, and quality of life for every patient with compassion, dignity, and humanity.",
    bg: "bg-blue-50",
    iconBg: "bg-primary",
  },
  {
    icon: <FiTarget size={24} />,
    title: "Our Mission",
    text: "To deliver high-quality, evidence-based physiotherapy services that support patients in regaining normal function and improving their quality of life.",
    bg: "bg-emerald-50",
    iconBg: "bg-accent",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Our Values",
    text: "Personalized and comprehensive care with kindness, respect, and professional excellence — ensuring every individual is treated with equal importance and dignity.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-500",
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-padding bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="About Rapid Fix Physio"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="section-label mb-3">Who We Are</p>
          <h2 className="section-title mb-4">About Rapid Fix Physio</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Based in Moratuwa, we are a dedicated team of SLMC-registered physiotherapists
            committed to evidence-based care and your complete recovery.
          </p>
        </header>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className={`${p.bg} rounded-3xl p-8 hover:-translate-y-1.5 transition-all duration-400 hover:shadow-lg`}
            >
              <div className={`${p.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5`}>
                {p.icon}
              </div>
              <h3 className="text-primary font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-[#0d6d96] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to start your recovery?</h3>
            <p className="text-white/70">Walk in or call us — we're open 7 days a week, 9am to 8pm.</p>
          </div>
          <a
            href="tel:+94756637614"
            className="shrink-0 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            id="about-cta-btn"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
