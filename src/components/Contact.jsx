import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiNavigation } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="section-padding bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      aria-label="Contact Rapid Fix Physio"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-title mb-4">Contact Us</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Ready to begin your recovery journey? Reach us by phone, WhatsApp, or email — we'd love to hear from you.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <motion.div
            className="space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Call */}
            <motion.a
              variants={itemVariant}
              href="tel:+94756637614"
              className="flex items-center gap-5 p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 group hover:-translate-y-0.5"
              id="contact-call-link"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FiPhone size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-0.5">Call Us</p>
                <p className="text-primary font-bold text-lg">+94 75 663 7614</p>
                <p className="text-slate-400 text-xs">Tap to call directly</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariant}
              href="https://wa.me/94756637614"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-300 group hover:-translate-y-0.5"
              id="contact-whatsapp-link"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-0.5">WhatsApp</p>
                <p className="text-accent font-bold text-lg">+94 75 663 7614</p>
                <p className="text-slate-400 text-xs">Message us anytime</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariant}
              href="mailto:rapidfixphysiotherapy@gmail.com"
              className="flex items-center gap-5 p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 group hover:-translate-y-0.5"
              id="contact-email-link"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-0.5">Email</p>
                <p className="text-purple-700 font-bold">rapidfixphysiotherapy@gmail.com</p>
                <p className="text-slate-400 text-xs">We reply within 24 hours</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div variants={itemVariant} className="flex items-start gap-5 p-6 rounded-2xl bg-amber-50">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white shrink-0">
                <FiMapPin size={20} />
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-0.5">Address</p>
                <p className="text-slate-700 font-semibold">No.11, 8th Lane, Rawatawaththa</p>
                <p className="text-slate-500 text-sm">Moratuwa, Sri Lanka</p>
                <a
                  href="https://maps.app.goo.gl/N6cbVvtQYAuL54Qu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 bg-amber-500 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                  id="contact-directions-link"
                >
                  <FiNavigation size={13} /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={itemVariant} className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-white shrink-0 text-xl" aria-hidden="true">🕗</div>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-1">Opening Hours</p>
                <p className="text-slate-700 font-semibold">Monday – Sunday</p>
                <p className="text-accent font-bold">9:00 AM – 8:00 PM</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-lg h-full min-h-[400px] border border-slate-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              title="Rapid Fix Physio clinic location on Google Maps — Moratuwa, Sri Lanka"
              src="https://maps.google.com/maps?q=No+11+8th+Lane+Rawatawaththa+Moratuwa&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
