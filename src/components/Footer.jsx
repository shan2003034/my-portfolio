import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaHeart } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-gray-900 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#deff9a] rounded-full blur-[120px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Branding & Bio */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#" className="text-3xl font-black tracking-wider group">
              P<span className="text-[#deff9a]">L.</span>
            </a>
            <p className="text-gray-500 font-light leading-relaxed">
              Crafting high-performance digital experiences as a Full Stack Software Engineer. Dedicated to clean code and innovative IoT solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-[#deff9a] transition-colors">About Me</a></li>
              <li><a href="#education" className="text-gray-500 hover:text-[#deff9a] transition-colors">Education</a></li>
              <li><a href="#skills" className="text-gray-500 hover:text-[#deff9a] transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-[#deff9a] transition-colors">Featured Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 italic">Matara, Sri Lanka</li>
              <li><a href="tel:+94705629772" className="text-gray-400 hover:text-white transition-colors">+94 70 562 9772</a></li>
              <li><a href="mailto:shangajanayake7@gmail.com" className="text-gray-400 hover:text-white transition-colors">shangajanayake7@gmail.com</a></li>
            </ul>
          </div>

          {/* Column 4: Socials & Brand Expansion */}
          <div className="space-y-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Connect</h4>
            
            {/* Social Pills */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/prasannalakshan" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-lg text-gray-400 hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaLinkedin />
              </a>
              <a href="https://github.com/shan2003034" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-lg text-gray-400 hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaGithub />
              </a>
              <a href="https://wa.me/94705629772" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-lg text-gray-400 hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaWhatsapp />
              </a>
              <a href="https://www.facebook.com/share/1GLKbAA9eq/" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center text-lg text-gray-400 hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <FaFacebook />
              </a>
            </div>

            {/* Byte Code LK Mini Card */}
            <div className="pt-6 border-t border-gray-900">
               <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em] mb-4">Official Community</p>
               <a href="https://www.facebook.com/share/17PbovQj3z/" className="flex items-center gap-3 bg-[#0a0a0a] border border-gray-800 p-4 rounded-2xl hover:border-[#deff9a]/40 transition-all duration-500 group">
                  <div className="w-10 h-10 bg-[#1877F2]/10 rounded-xl flex items-center justify-center text-[#1877F2] text-xl group-hover:scale-110 transition-transform">
                    <SiFacebook />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Facebook Page</p>
                    <p className="text-sm font-bold text-white group-hover:text-[#deff9a] transition-colors">Byte Code LK</p>
                  </div>
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm font-medium">
            © {currentYear} <span className="text-gray-400">Prasanna Lakshan</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Designed & Engineered by</span>
            
            <span>Prasanna Lakshan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;