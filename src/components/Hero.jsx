import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import myCv from "../assets/CV_Prasanna_Lakshan.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center py-12 lg:py-0 selection:bg-[#deff9a] selection:text-black overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#deff9a] rounded-full mix-blend-soft-light filter blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-12 w-full">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h2 className="text-xs md:text-sm text-[#deff9a] font-bold tracking-[0.3em] uppercase">
                Software Engineering Undergraduate
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-[85px] font-extrabold text-white leading-[1.1] tracking-tight">
                Prasanna <br className="hidden lg:block" /> Lakshan.
              </h1>
              <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                I build elegant, functional, and user-centric digital experiences. Specializing in <span className="text-white font-medium">Full Stack Development</span>, Mobile Apps, and innovative IoT solutions.
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a
                href={myCv}
                download="Prasanna_Lakshan_CV.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#deff9a] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(222,255,154,0.3)]"
              >
                Download CV <FiDownload className="text-xl" />
              </a>
              <a
                href="#projects"
                className="text-white px-8 py-4 rounded-full font-bold hover:text-[#deff9a] transition-colors duration-300 flex items-center gap-2 group text-lg"
              >
                View My Work
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Image - Original design preserved without any borders or rounding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none lg:col-span-5 aspect-[4/5] overflow-hidden"
          >
            <img
              src={profileImg}
              alt="Prasanna Lakshan"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;