import { doctors } from "../data/doctors";
import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Specialists() {
  return (
    <motion.section
      id="specialists"
      className="section-padding bg-light"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="Meet our physiotherapy specialists"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="section-label mb-3">Expert Care</p>
          <h2 className="section-title mb-4">Meet Our Specialists</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            SLMC-registered physiotherapists with specialized training from Kotelawala Defence University.
          </p>
        </header>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {doctors.map((doc) => (
            <motion.article
              key={doc.id}
              variants={cardVariant}
              className="bg-white rounded-2xl max-w-sm w-full mx-auto overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-400 border border-slate-100 hover:border-accent/25 hover:-translate-y-1.5"
            >
              {/* Photo */}
              <div className="h-80 relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={`/images/${doc.photo}`}
                  alt={`${doc.name} — ${doc.role} at Rapid Fix Physio`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if photo missing */}
                <div className="hidden w-full h-full items-center justify-center flex-col gap-3 text-slate-400">
                  <div className="w-28 h-28 rounded-full bg-slate-200 flex items-center justify-center text-5xl">👨‍⚕️</div>
                  <p className="text-xs">Photo: {doc.photo}</p>
                </div>

                {/* Role badge */}
                <div className="absolute top-4 right-4 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  {doc.id === 1 ? "Founder" : "Director"}
                </div>

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-primary font-bold text-xl mb-0.5">{doc.name}</h3>
                <p className="text-accent text-sm font-semibold mb-4">{doc.role}</p>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FiAward size={15} className="text-accent mt-0.5 shrink-0" />
                    <span>{doc.qualifications}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-slate-600">
                    <FiAward size={15} className="text-primary mt-0.5 shrink-0" />
                    <span>{doc.university}</span>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary text-xs font-bold px-4 py-2 rounded-full">
                  ✓ {doc.slmcReg}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
