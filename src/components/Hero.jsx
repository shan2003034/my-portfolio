import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import myCv from "../assets/CV_Prasanna_Lakshan.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center selection:bg-[#deff9a] selection:text-black">

      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#deff9a] rounded-full mix-blend-soft-light filter blur-[200px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          
          className="lg:col-span-6 space-y-8 pt-28 pb-10 lg:pt-0 lg:pb-0 relative z-20 text-center lg:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-sm md:text-base text-[#deff9a] font-bold tracking-[0.25em] uppercase">
              Software Engineering Undergraduate
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-white leading-[1.1] tracking-tight">
              Prasanna <br /> Lakshan.
            </h1>
            {/* ඡේදය Mobile වලදී මැදට ගැනීම සඳහා mx-auto lg:mx-0 භාවිතා කර ඇත */}
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light mt-8">
              I build elegant, functional, and user-centric digital experiences. Specializing in Full Stack Development, Mobile Apps, and innovative IoT solutions.
            </p>
          </div>

          {/* බොත්තම් දෙක Mobile වලදී මැදට ගැනීම සඳහා justify-center lg:justify-start භාවිතා කර ඇත */}
          <div className="pt-10 flex flex-wrap gap-5 items-center justify-center lg:justify-start">
            <a
              href={myCv}
              download="Prasanna_Lakshan_CV.pdf"
              className="flex items-center gap-3 bg-[#deff9a] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(222,255,154,0.3)]"
            >
              Download CV <FiDownload className="text-xl" />
            </a>
            <a
              href="#projects"
              className="text-white px-8 py-4 rounded-full font-bold hover:text-[#deff9a] transition-colors duration-300 flex items-center gap-2 group text-lg cursor-pointer"
            >
              View My Work
              <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-2xl"></span>
            </a>
          </div>
        </motion.div>

        {/* Mobile Profile Image - අකුරු වලට යටින් එන රූපය */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="block lg:hidden w-full h-[400px] relative z-0 mt-4"
        >
          <img
            src={profileImg}
            alt="Prasanna Lakshan"
            className="w-full h-full object-cover object-top grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </motion.div>

        {/* Desktop Profile Image - මෙය කිසිසේත්ම වෙනස් කර නැත */}
        <div className="hidden lg:block fixed right-0 top-0 w-1/2 h-screen z-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative h-full"
          >
            <img
              src={profileImg}
              alt="Prasanna Lakshan"
              className="w-full h-full object-cover object-center grayscale"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;