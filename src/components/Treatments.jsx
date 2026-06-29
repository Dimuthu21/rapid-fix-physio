import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiPhone, FiMessageCircle } from "react-icons/fi";
import { treatments } from "../data/treatments";
import { motion, AnimatePresence } from "framer-motion";

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ── Modal ── */
function Modal({ item, onClose }) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 shrink-0">
              <img
                src={`/images/${item.image}`}
                alt={`${item.name} — Rapid Fix Physio Moratuwa`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-7xl bg-gradient-to-br from-primary/10 to-accent/10">
                {item.icon}
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full p-2 hover:bg-white transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <FiX size={18} />
              </button>
              <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                Treatment
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto">
              <h2 className="text-primary font-bold text-2xl mb-4">{item.name}</h2>
              <div className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">{item.fullDescription}</div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+94756637614" className="btn-primary">
                  <FiPhone size={16} /> Book This Treatment
                </a>
                <a
                  href="https://wa.me/94756637614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-accent text-accent font-semibold px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <FiMessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Treatments Section ── */
export default function Treatments() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const touchStart = useRef(null);

  const getCardsPerPage = () => {
    if (typeof window === "undefined") return 6;
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 1024) return 4;
    return 6;
  };

  useEffect(() => {
    const update = () => {
      const newCpp = getCardsPerPage();
      setCardsPerPage(newCpp);
      setPage((prev) => Math.min(prev, Math.max(0, Math.ceil(treatments.length / newCpp) - 1)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(treatments.length / cardsPerPage);
  const visible = treatments.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStart.current = null;
  };

  return (
    <>
      <motion.section
        id="treatments"
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        aria-label="Treatments and technology offered"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-14">
            <p className="section-label mb-3">How We Help</p>
            <h2 className="section-title mb-4">Treatments &amp; Technology</h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              We combine advanced technology with hands-on expertise to deliver effective, personalized treatment for every patient.
            </p>
          </header>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[320px]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {visible.map((t) => (
                <motion.article
                  key={t.id}
                  variants={cardVariant}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden group flex flex-col cursor-pointer border border-slate-100 hover:border-primary/25 hover:-translate-y-1"
                  onClick={() => setSelected(t)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(t)}
                  aria-label={`Learn more about ${t.name}`}
                >
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
                    <img
                      src={`/images/${t.image}`}
                      alt={`${t.name} at Rapid Fix Physio Moratuwa`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-5xl">
                      {t.icon}
                    </div>
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-primary font-semibold text-[0.95rem] mb-1.5 group-hover:text-accent transition-colors duration-300">{t.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed flex-1 line-clamp-2">{t.description}</p>
                    <span className="mt-3 self-start inline-flex items-center gap-1 text-accent font-semibold text-xs group-hover:gap-2 transition-all duration-300">
                      Read More <span className="group-hover:translate-x-1 transition-transform inline-block duration-300">→</span>
                    </span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 mt-12" aria-label="Treatments pagination">
            <button
              onClick={prev}
              disabled={page === 0}
              className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous treatments"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2.5" role="tablist">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all duration-400 ${i === page ? "w-8 h-3 bg-primary shadow-md shadow-primary/30" : "w-3 h-3 bg-slate-300 hover:bg-slate-400"}`}
                  aria-label={`Go to page ${i + 1}`}
                  aria-selected={i === page}
                  role="tab"
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={page === totalPages - 1}
              className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next treatments"
            >
              <FiChevronRight size={18} />
            </button>
          </nav>
          <p className="text-center text-slate-400 text-xs mt-3 tabular-nums">{page + 1} of {totalPages}</p>
        </div>
      </motion.section>

      <Modal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
