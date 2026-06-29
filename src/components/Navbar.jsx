import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Treatments", href: "#treatments" },
  { label: "Our Team", href: "#specialists" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight current section in nav */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [isOpen]);

  /* Handle mobile nav click - close menu and scroll */
  const handleMobileNavClick = (href) => {
    setIsOpen(false);
    // Let the default anchor navigation happen
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-1" : "bg-transparent py-3"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center" aria-label="Rapid Fix Physio — Home">
         <div style={{ 
  borderRadius: "12px",
  padding: "6px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.92)",
}}>
            <img
              src="/images/LOGO.png"
              alt="Rapid Fix Physio Logo"
              className="h-14 sm:h-16 w-auto object-contain"
              style={{ maxWidth: "180px" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          </div>
          {/* Fallback text logo */}
          <div style={{ display: "none" }} className="items-center gap-2">
            <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">RF</span>
            </div>
            <div>
              <span className={`font-bold text-lg leading-tight block transition-colors ${scrolled ? "text-primary" : "text-white"}`}>Rapid Fix</span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-accent" : "text-emerald-300"}`}>Physio</span>
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.href
                  ? scrolled ? "text-accent" : "text-accent"
                  : scrolled ? "text-slate-600 hover:text-accent" : "text-white/90 hover:text-accent"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="tel:+94756637614" className="btn-primary text-sm py-2.5 px-5" id="nav-call-btn">
            <FiPhone size={14} /> Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-xl border-t border-slate-100 px-4 py-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick(link.href);
                }}
                className={`block py-3 font-medium border-b border-slate-50 transition-colors ${
                  activeSection === link.href
                    ? "text-accent"
                    : "text-slate-700 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+94756637614" className="btn-primary mt-4 w-full justify-center">
              <FiPhone size={14} /> Call Now: +94 75 663 7614
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
