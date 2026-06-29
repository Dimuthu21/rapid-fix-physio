import { FiPhone, FiMessageCircle, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const floatCard = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.15, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Welcome to Rapid Fix Physio"
    >
      {/* Background image — blurred, shifted right */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: "url('/images/HOME.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          filter: "blur(3px)",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />

      {/* Subtle grid dot pattern on top */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Decorative accent glow circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <div>
          {/* Live indicator */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            <span className="w-2 h-2 bg-accent rounded-full pulse-dot" aria-hidden="true" />
            <span className="text-emerald-300 text-sm font-medium">Open Today · 9am – 8pm</span>
          </motion.div>

          <motion.h1
            className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            Your Recovery <br />
            <span className="text-accent">Starts Here.</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}
          >
            Expert physiotherapy care in Moratuwa — restoring health, independence,
            and quality of life with compassion, dignity, and evidence-based treatment.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={3}
          >
            <a
              href="tel:+94756637614"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-4 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5"
              id="hero-call-btn"
            >
              <FiPhone size={18} /> Call Us Now
            </a>
            <a
              href="https://wa.me/94756637614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              id="hero-whatsapp-btn"
            >
              <FiMessageCircle size={18} /> WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={4}
          >
            {[
              { num: "7", label: "Days a Week" },
              { num: "15+", label: "Treatments" },
              { num: "6", label: "Specialties" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-white text-2xl sm:text-3xl font-bold">{s.num}</div>
                <div className="text-white/50 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right side floating info cards — only on large screens */}
        <div className="hidden lg:flex justify-end">
          <div className="flex flex-col gap-4 mt-8">
            {/* SLMC badge */}
            <motion.div
              className="bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-white max-w-xs hover:bg-white/30 transition-colors duration-300"
              initial="hidden"
              animate="visible"
              variants={floatCard}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-xl" aria-hidden="true">✓</div>
                <div>
                  <div className="font-bold text-base">SLMC Registered</div>
                  <div className="text-white/80 text-sm">Licensed Specialists</div>
                </div>
              </div>
            </motion.div>

            {/* Location badge */}
            <motion.div
              className="bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-white max-w-xs hover:bg-white/30 transition-colors duration-300"
              initial="hidden"
              animate="visible"
              variants={floatCard}
              custom={1}
            >
              <div className="text-sm text-white/80 mb-2 uppercase tracking-wide font-semibold">Our Location</div>
              <div className="font-bold text-base">No.11, 8th Lane</div>
              <div className="text-white/85 text-sm">Rawatawaththa, Moratuwa</div>
            </motion.div>

            {/* Hours badge */}
            <motion.div
              className="bg-accent/90 backdrop-blur-md border border-accent/60 rounded-2xl p-6 text-white max-w-xs hover:bg-accent/100 transition-colors duration-300"
              initial="hidden"
              animate="visible"
              variants={floatCard}
              custom={2}
            >
              <div className="text-sm text-white/90 mb-1 uppercase tracking-wide font-semibold">Open</div>
              <div className="font-bold text-base">Mon – Sun · 9am to 8pm</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <FiChevronDown size={28} />
      </a>
    </section>
  );
}
