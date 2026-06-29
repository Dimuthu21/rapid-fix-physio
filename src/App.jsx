import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Treatments from "./components/Treatments";
import Specialists from "./components/Specialists";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FiMessageCircle } from "react-icons/fi";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Treatments />
      <Specialists />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* ── Sticky WhatsApp Button ── */}
      <a
        href="https://wa.me/94756637614"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-green-500/40 hover:shadow-green-500/60 hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle size={22} />
        <span className="hidden sm:inline text-sm">WhatsApp Us</span>
      </a>
    </>
  );
}