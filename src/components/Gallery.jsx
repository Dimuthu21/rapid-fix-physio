import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const galleryImages = [
  { src: "/images/PLACE1.jpeg", alt: "Rapid Fix Physio clinic treatment room, Moratuwa" },
  { src: "/images/PLACE2.jpeg", alt: "Rapid Fix Physio clinic equipment and facilities" },
  { src: "/images/PLACE3.jpeg", alt: "Rapid Fix Physio clinic reception area, Moratuwa" },
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="section-padding bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="Our clinic facilities"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="section-label mb-3">Inside Our Clinic</p>
          <h2 className="section-title mb-4">Our Facilities</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A professional, clean, and welcoming environment designed for your comfort and recovery.
          </p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={imgVariant}
              className="relative overflow-hidden rounded-2xl bg-slate-100 group shadow-sm hover:shadow-xl transition-all duration-400"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div
                style={{ display: "none" }}
                className="w-full h-full items-center justify-center flex-col gap-2 text-slate-400 bg-slate-100"
              >
                <div className="text-4xl">🏥</div>
                <p className="text-xs text-center px-4">Add PLACE{i + 1}.jpeg to public/images/</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
