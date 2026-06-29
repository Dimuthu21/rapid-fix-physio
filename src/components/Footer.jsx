import { FiPhone, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Our Team", href: "#specialists" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-5 bg-white rounded-2xl p-3 inline-block shadow-sm">
            <img
              src="/images/LOGO.png"
              alt="Rapid Fix Physio"
              className="h-14 w-auto object-contain"
              style={{ maxWidth: "160px" }}
              loading="lazy"
              onError={(e) => {
                e.target.parentElement.style.display = "none";
                e.target.parentElement.nextSibling.style.display = "flex";
              }}
            />
          </div>
          {/* Fallback if logo missing */}
          <div style={{ display: "none" }} className="items-center gap-2 mb-5">
            <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center font-bold text-sm">RF</div>
            <div>
              <div className="font-bold text-lg leading-tight">Rapid Fix</div>
              <div className="text-accent text-xs tracking-widest uppercase">Physio</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Restoring health, independence, and quality of life with compassion and professional excellence.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <h4 className="font-semibold mb-4 text-white/90">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/55 hover:text-accent text-sm transition-colors duration-200">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div>
          <h4 className="font-semibold mb-4 text-white/90">Opening Hours</h4>
          <div className="space-y-2 text-sm text-white/60">
            <div className="flex justify-between gap-4">
              <span>Monday – Sunday</span>
              <span className="text-accent font-medium">9:00 AM – 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-2 bg-accent rounded-full pulse-dot" aria-hidden="true" />
              <span className="text-emerald-400 text-xs">Open Today</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <address className="not-italic">
          <h4 className="font-semibold mb-4 text-white/90">Contact</h4>
          <div className="space-y-3 text-sm text-white/60">
            <a href="tel:+94756637614" className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
              <FiPhone size={14} className="shrink-0" /> +94 75 663 7614
            </a>
            <a href="https://wa.me/94756637614" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors duration-200">
              <FiMessageCircle size={14} className="shrink-0" /> WhatsApp
            </a>
            <a href="mailto:rapidfixphysiotherapy@gmail.com" className="flex items-start gap-2 hover:text-accent transition-colors duration-200">
              <FiMail size={14} className="shrink-0 mt-0.5" /> rapidfixphysiotherapy@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <FiMapPin size={14} className="shrink-0 mt-0.5" />
              <span>No.11, 8th Lane, Rawatawaththa, Moratuwa</span>
            </div>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10 px-4 sm:px-8 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Rapid Fix Physio. All rights reserved.</p>
        <p className="text-white/40 text-xs">No.11, 8th Lane, Rawatawaththa, Moratuwa</p>
      </div>
    </footer>
  );
}
