import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      
      const sections = ["hero", "about", "education", "skills", "projects", "contact"];
      let current = "hero"; 

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          
          const sectionTop = section.offsetTop;
          
          if (window.scrollY >= sectionTop - 150) { 
            current = sections[i];
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-gray-800 py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex justify-between items-center">
          
          <a href="#" className="text-2xl font-black text-white tracking-wider group">
            P<span className="text-[#deff9a] transition-colors duration-300">L.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id ? "text-[#deff9a]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Contact Button */}
            <a 
              href="#contact" 
              className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                 activeSection === "contact" 
                 ? "bg-white text-black scale-105" 
                 : "bg-[#deff9a] text-black hover:bg-white hover:scale-105" 
              }`}
            >
              Contact Me
            </a>
          </div>

          <button 
            className="md:hidden text-2xl text-white hover:text-[#deff9a] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full bg-[#0a0a0a] border-b border-gray-800 z-40 md:hidden flex flex-col items-center py-8 shadow-2xl"
          >
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-4 transition-colors ${
                  activeSection === link.id ? "text-[#deff9a]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className={`mt-6 px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
                 activeSection === "contact" ? "bg-white text-black" : "bg-[#deff9a] text-black hover:bg-white"
              }`}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;